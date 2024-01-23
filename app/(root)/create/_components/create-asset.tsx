"use client";

import { useState } from "react";

import { ImageDropzone } from "./image-dropzone";
import { AssetForm } from "./asset-form";

export function CreateAsset() {
  return (
    <div className="mx-auto mt-4 max-w-xl space-y-8">
      <ImageDropzone />
      <AssetForm />
    </div>
  );
}
