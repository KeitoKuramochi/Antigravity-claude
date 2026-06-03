"use client";

import { useState } from "react";
import Image from "next/image";

interface ImagePlaceholderProps {
  label: string;
  filename: string; // 例: "step1.png"
}

export default function ImagePlaceholder({ label, filename }: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
        <Image
          src={`/images/${filename}`}
          alt={label}
          width={800}
          height={450}
          className="w-full h-auto"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="h-56 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-2 text-gray-400">
      <span className="text-3xl">📷</span>
      <p className="text-sm text-center px-4">{label}</p>
      <p className="text-xs text-gray-300 font-mono">public/images/{filename}</p>
    </div>
  );
}
