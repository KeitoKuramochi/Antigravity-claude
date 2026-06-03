interface ImagePlaceholderProps {
  label: string;
  height?: string;
}

export default function ImagePlaceholder({ label, height = "h-48" }: ImagePlaceholderProps) {
  return (
    <div
      className={`${height} rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-2 text-gray-400`}
    >
      <span className="text-3xl">📷</span>
      <p className="text-sm text-center px-4">{label}</p>
    </div>
  );
}
