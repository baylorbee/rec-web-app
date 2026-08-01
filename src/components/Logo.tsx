import Link from "next/link";
import { RecLogo } from "./RecLogo";

export function Logo({
  className = "",
  markClassName = "",
  showWordmark = true,
  invert = false,
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  invert?: boolean;
}) {
  const text = invert ? "text-white" : "text-neutral-900";

  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 max-w-full items-center gap-2 sm:gap-2.5 ${text} ${className}`}
      aria-label="Refine Energy Consulting home"
    >
      <RecLogo size={28} invert={invert} className={`shrink-0 ${markClassName}`} />
      {showWordmark && (
        <span className="truncate font-sans text-[12px] font-medium tracking-tight sm:text-[15px]">
          Refine Energy Consulting
        </span>
      )}
    </Link>
  );
}
