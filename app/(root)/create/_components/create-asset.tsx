"use client";

import { useState } from "react";

import { ImageDropzone } from "./image-dropzone";
import { AssetForm } from "./asset-form";

export function CreateAsset() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="mt-4 space-y-8">
      <ImageDropzone file={file} setFile={setFile} />
      <AssetForm file={file} />
    </div>
  );
}
