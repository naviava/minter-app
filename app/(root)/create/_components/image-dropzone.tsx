"use client";

import { useCallback } from "react";
import Image from "next/image";

import { useDropzone } from "react-dropzone";
import { ImageIcon, Trash2 } from "lucide-react";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface IProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export function ImageDropzone({ file, setFile }: IProps) {
  const onDrop = useCallback(
    (acceptedFile: any) => {
      setFile(acceptedFile[0]);
    },
    [setFile],
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
      setFile(null);
    },
    [setFile],
  );

  return (
    <div
      {...getRootProps()}
      className={cn(
        "mx-auto flex aspect-square w-[250px] cursor-pointer items-center justify-center rounded-lg",
        !file && "border-2 border-dashed border-muted-foreground",
      )}
    >
      <input {...getInputProps()} multiple={false} />
      {isDragActive ? (
        <p className="text-center">Drop here...</p>
      ) : (
        <>
          {!file ? (
            <div className="flex flex-col items-center justify-center space-y-4 text-muted-foreground">
              <ImageIcon className="h-8 w-8" />
              <p className="max-w-[75%] text-balance text-center">
                Drag &apos;n&apos; drop an image file, or click to select a file
              </p>
            </div>
          ) : (
            <div className="relative">
              <div className="h-[250px] w-[250px]">
                <Image
                  fill
                  src={URL.createObjectURL(file)}
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
