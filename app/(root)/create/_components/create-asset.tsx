import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { ImageIcon, Trash2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

export function CreateAsset() {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFile: any) => {
    setFile(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  const handleDelete = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
  }, []);

  return (
    <div className="mt-4">
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
                <p className="max-w-[75%] text-center">
                  Drag &apos;n&apos; drop some files here, or click to select
                  files
                </p>
              </div>
            ) : (
              <div className="relative">
                <Image
                  src={URL.createObjectURL(file)}
                  alt="New file"
                  width={250}
                  height={250}
                  className="rounded-lg object-cover"
                />
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
    </div>
  );
}
