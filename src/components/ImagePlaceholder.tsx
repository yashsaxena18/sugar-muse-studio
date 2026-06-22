import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  aspect?: string; // e.g. "aspect-[4/3]"
  className?: string;
  rounded?: string;
};

export function ImagePlaceholder({
  label = "Image Placeholder",
  aspect = "aspect-[4/3]",
  className,
  rounded = "rounded-2xl",
}: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden placeholder-shimmer",
        aspect,
        rounded,
        "ring-1 ring-[color:var(--gold)]/30",
        className,
      )}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[color:var(--brown)]/70">
        <ImageIcon className="size-7 opacity-60" />
        <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--gold)_30%,transparent),transparent_60%)]" />
    </div>
  );
}
