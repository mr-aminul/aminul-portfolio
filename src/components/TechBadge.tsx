import type { TechIconData } from "@/lib/tech-icons";
import { resolveTechIcon } from "@/lib/tech-icons";

function BrandSvg({
  icon,
  className,
}: {
  icon: TechIconData;
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path fill={`#${icon.hex}`} d={icon.path} />
    </svg>
  );
}

function Monogram({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const letters = label
    .replace(/[^a-zA-Z0-9.+#]/g, " ")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{label}</title>
      <rect width="24" height="24" rx="4" fill="#ecedff" />
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fill="#564df5"
        fontSize="9"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="600"
      >
        {letters || "•"}
      </text>
    </svg>
  );
}

const sizeStyles = {
  sm: {
    icon: "h-3.5 w-3.5 shrink-0",
    chip: "!gap-1.5 !px-2 !py-1 !text-[0.72rem] !font-normal",
  },
  md: {
    icon: "h-4 w-4 shrink-0",
    chip: "!gap-1.5 !px-2.5 !py-1.5 !text-[0.8rem] !font-normal",
  },
  lg: {
    icon: "h-[1.15rem] w-[1.15rem] shrink-0",
    chip: "!gap-2 !px-2.5 !py-1.5 !text-[0.85rem] !font-normal",
  },
} as const;

export function TechBadge({
  label,
  showLabel = true,
  size = "md",
}: {
  label: string;
  showLabel?: boolean;
  size?: keyof typeof sizeStyles;
}) {
  const icon = resolveTechIcon(label);
  const styles = sizeStyles[size];

  return (
    <span
      className={`stack-chip inline-flex items-center ${styles.chip}`}
      title={label}
    >
      {icon ? (
        <BrandSvg icon={icon} className={styles.icon} />
      ) : (
        <Monogram label={label} className={styles.icon} />
      )}
      {showLabel ? <span>{label}</span> : <span className="sr-only">{label}</span>}
    </span>
  );
}
