import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`mb-3 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-[color:var(--gold)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-[color:var(--gold)]" />
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
