import React, { useState } from "react";

import { ImageDropzone } from "./image-dropzone";
import { AssetForm } from "./asset-form";

export function CreateAsset() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="mt-4 space-y-8">
      <ImageDropzone file={file} setFile={setFile} />
      <AssetForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
}
