"use client";

import { useCallback } from "react";
import Image from "next/image";

import { useDropzone } from "react-dropzone";
import { ImageIcon, Trash2 } from "lucide-react";
import { useUploadModal } from "~/store/use-upload-modal";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function ImageDropzone() {
  const { media, setMedia, clearMedia } = useUploadModal();

  const onDrop = useCallback(
    (acceptedFile: any) => {
      setMedia(acceptedFile[0]);
    },
    [setMedia],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
  });

  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      clearMedia();
    },
    [clearMedia],
  );

  return (
    <div
      {...getRootProps()}
      className={cn(
        "mx-auto flex aspect-square w-[250px] cursor-pointer items-center justify-center rounded-lg",
        (!media || isDragActive) &&
          "border-2 border-dashed border-muted-foreground",
      )}
    >
      <input {...getInputProps()} multiple={false} />
      {isDragActive ? (
        <p className="text-center">Drop here...</p>
      ) : (
        <>
          {!media ? (
            <div className="flex flex-col items-center justify-center space-y-4 text-muted-foreground">
              <ImageIcon className="h-8 w-8" />
              <p className="max-w-[75%] text-balance text-center">
                Drag &apos;n&apos; drop an image file, or click to select a file
              </p>
            </div>
          ) : (
            <div className="relative">
              <div className="relative h-[250px] w-[250px]">
                <Image
                  fill
                  src={URL.createObjectURL(media)}
                  alt="New file"
                  className="rounded-lg object-cover"
                />
              </div>
              <Button
                variant="link"
                onClick={handleDelete}
                className="absolute right-1 top-1 bg-black/10 px-2 text-red-600 hover:bg-black/20"
              >
                <Trash2 />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
