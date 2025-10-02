import type { CSSProperties, ReactNode } from "react";

/** -------------------------------------------------
 *  Local constants & types (self-contained)
 *  ------------------------------------------------ */
export const LAYOUT = {
  BORDERS: {
    VERTICAL_WIDTH: 16,
    HORIZONTAL_HEIGHT: 16,
  },
} as const;

export const RESPONSIVE = {
  left: (delta = 0) =>
    `max(-20px, calc((100vw - 1520px) / -2 - 120px + ${delta}px))`,
  right: (delta = 0) =>
    `max(-20px, calc((100vw - 1520px) / -2 - 120px + ${delta}px))`,
};

export type RoleBoxProps = {
  children: ReactNode;
  bgColor: string;
  className?: string;
};

export type PersonNameProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export type SectionLabelProps = {
  children: ReactNode;
  position: "left" | "right";
  top: string;
};

export type HeroVerticalTextProps = {
  children: ReactNode;
  position: "left" | "right";
  top: string;
};

/** -------------------------------------------------
 *  Shared styles (JS style objects & Tailwind tokens)
 *  ------------------------------------------------ */
export const STYLES = {
  mainTitle: {
    fontSize: "48px",
    fontFamily: '"rixdongnimgothic-pro", sans-serif',
    fontWeight: "normal",
    letterSpacing: "-0.02em",
    lineHeight: "1.27",
    wordBreak: "keep-all" as const,
  },
  sectionLabel: {
    fontSize: "24px",
  },
  subtitle: {
    fontSize: "22px",
    lineHeight: "34.2px",
    wordBreak: "keep-all" as const,
    marginBottom: "66.6px",
  },
  bodyText: {
    fontSize: "22px",
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: "500",
    wordBreak: "keep-all" as const,
  },
  roleTitle: {
    fontSize: "20px",
    fontFamily: '"rixdongnimgothic-pro", sans-serif',
    fontWeight: "400",
    lineHeight: "33.3px",
    whiteSpace: "nowrap" as const,
    letterSpacing: "-0.02em",
    color: "#000000",
  },
  personName: {
    color: "#3D3D3D",
    fontSize: "18px",
    fontFamily: "RixDongnimGothic_Pro",
    fontWeight: "400",
    lineHeight: "33.3px",
    whiteSpace: "nowrap" as const,
    letterSpacing: "-0.02em",
    textAlign: "right" as const,
  },
  professorName: {
    color: "#3D3D3D",
    fontSize: "19.8px",
    fontFamily: "RixDongnimGothic_Pro",
    fontWeight: "400",
    lineHeight: "33.3px",
    whiteSpace: "nowrap" as const,
    letterSpacing: "-0.02em",
    textAlign: "right" as const,
  },
} as const;

/** Tailwind utility counterparts (for JSX className) */
export const styles = {
  mainTitle:
    'text-[48px] leading-[1.27] tracking-[-0.02em] font-[400] font-["rixdongnimgothic-pro",_sans-serif]',
  subtitle: "text-[22px] leading-[34.2px] mb-[66.6px]",
  body: "text-[22px] font-[500]",
  roleTitle:
    'text-[20px] leading-[33.3px] tracking-[-0.02em] font-[400] font-["rixdongnimgothic-pro",_sans-serif] whitespace-nowrap',
  personName:
    "text-[#3D3D3D] text-[18px] leading-[33.3px] tracking-[-0.02em] font-[400] whitespace-nowrap text-right",
  sectionLabel: "text-[24px]",
} as const;

/** -------------------------------------------------
 *  Primitive UI blocks
 *  ------------------------------------------------ */
export const RoleBox = ({ children, bgColor, className = "" }: RoleBoxProps) => (
  <div
    className={`tag-box flex items-center justify-center text-black px-3 py-1 rounded-none -rotate-2 ${className}`}
    style={{ ...STYLES.roleTitle, backgroundColor: bgColor, minWidth: "60px" }}
  >
    {children}
  </div>
);

export const ProfessorRoleBox = ({
  children,
  bgColor,
  className = "",
}: RoleBoxProps) => (
  <div
    className={`tag-box flex items-center justify-center text-black px-2 py-1 rounded-none -rotate-2 ${className}`}
    style={{ ...STYLES.roleTitle, backgroundColor: bgColor }}
  >
    {children}
  </div>
);

export const TiltBadge = ({ bg, children }: { bg: string; children: ReactNode }) => (
  <div
    className={`inline-flex items-center justify-center px-3 py-1 -rotate-2 ${styles.roleTitle}`}
    style={{ backgroundColor: bg, minWidth: 60 }}
  >
    {children}
  </div>
);

export const PersonName = ({ children, style = {} }: PersonNameProps) => (
  <div style={{ ...STYLES.personName, ...style }}>{children}</div>
);

export const ProfessorName = ({ children }: { children: ReactNode }) => (
  <div style={STYLES.professorName}>{children}</div>
);

/** -------------------------------------------------
 *  Frame & labels (borders, rails)
 *  ------------------------------------------------ */
export const SectionBorder = () => (
  <>
    <div
      className="rail-vertical absolute top-0 h-full bg-black z-[15]"
      style={{
        left: RESPONSIVE.left(-20),
        width: LAYOUT.BORDERS.VERTICAL_WIDTH,
      }}
    />
    <div
      className="rail-vertical absolute top-0 h-full bg-black z-[15]"
      style={{
        right: RESPONSIVE.right(-20),
        width: LAYOUT.BORDERS.VERTICAL_WIDTH,
      }}
    />
  </>
);

export const HorizontalBorder = () => (
  <div className="relative mx-auto">
    <div
      className="rail-horizontal absolute bg-black"
      style={{
        height: LAYOUT.BORDERS.HORIZONTAL_HEIGHT,
        // Clamp offsets so the line doesn't shrink too much on small screens
        left: "clamp(-200px, calc((100vw - 1520px) / -2 - 120px), 52px)",
        right: "clamp(-200px, calc((100vw - 1520px) / -2 - 120px), 52px)",
      }}
    />
  </div>
);

export const SectionLabel = ({
  children,
  position,
  top,
}: SectionLabelProps) => (
  <div
    className={`section-label absolute ${
      position === "left" ? "text-left" : "text-right"
    } -translate-y-1/2 rotate-90 z-20 whitespace-nowrap`}
    style={{
      ...STYLES.sectionLabel,
      top,
      [position]: "max(-20px, calc((100vw - 1520px) / -2 - 180px))",
      transform:
        position === "left"
          ? "translateX(-50%) translateY(-50%) rotate(90deg)"
          : "translateX(50%) translateY(-50%) rotate(90deg)",
    }}
  >
    {children}
  </div>
);

export const HeroVerticalText = ({
  children,
  position,
  top,
}: HeroVerticalTextProps) => (
  <div
    className={`absolute ${
      position === "left" ? "text-left" : "text-right"
    } -translate-y-1/2 rotate-90 z-20`}
    style={{
      ...STYLES.sectionLabel,
      top,
      [position]: "max(-72px, calc((100vw - 1520px) / -2 - 167px))",
      transform:
        position === "left"
          ? "translateX(-50%) translateY(-50%) rotate(90deg)"
          : "translateX(50%) translateY(-50%) rotate(90deg)",
    }}
  >
    {children}
  </div>
);

/** -------------------------------------------------
 *  Layout sections
 *  ------------------------------------------------ */
export const ContainerRails = ({
  railWidth = LAYOUT.BORDERS.VERTICAL_WIDTH,
  extend = LAYOUT.BORDERS.HORIZONTAL_HEIGHT,
  extendTop,
  extendBottom,
  className = "",
  style = {},
}: {
  railWidth?: number;
  extend?: number; // legacy: symmetric extra length (top & bottom)
  extendTop?: number; // overrides top extension when provided
  extendBottom?: number; // overrides bottom extension when provided
  className?: string;
  style?: CSSProperties;
}) => {
  const extTop = extendTop ?? extend ?? 0;
  const extBottom = extendBottom ?? extend ?? 0;
  const heightCalc = `calc(100% + ${extTop + extBottom}px)`;

  return (
    <>
      <div
        className={`rail-vertical absolute right-full bg-black z-15 ${className}`.trim()}
        style={{
          width: `${railWidth}px`,
          top: -extTop,
          height: heightCalc,
          ...style,
        }}
      />
      <div
        className={`rail-vertical absolute left-full bg-black z-15 ${className}`.trim()}
        style={{
          width: `${railWidth}px`,
          top: -extTop,
          height: heightCalc,
          ...style,
        }}
      />
    </>
  );
};
interface BorderedSectionProps {
  children: ReactNode;
  label?: ReactNode;
  labelPosition?: "left" | "right";
  labelTop?: string;
  className?: string;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  width?: number | string;
  style?: CSSProperties;
  before?: ReactNode;
  after?: ReactNode;
  showBorders?: boolean;
}

export const BorderedSection = ({
  children,
  label,
  labelPosition = "left",
  labelTop = "0px",
  className = "bg-white",
  contentClassName = "max-w-6xl mx-auto",
  contentStyle = {},
  width,
  style = {},
  before,
  after,
  showBorders = true,
}: BorderedSectionProps) => {
  const widthStyle =
    typeof width === "number"
      ? { width: `${width}px`, maxWidth: "100%" }
      : width
      ? { width, maxWidth: "100%" }
      : {};

  return (
    <section className={`relative ${className}`} style={style}>
      {showBorders && <SectionBorder />}
      {label && (
        <SectionLabel position={labelPosition} top={labelTop}>
          {label}
        </SectionLabel>
      )}
      {before}
      <div className={contentClassName} style={{ ...widthStyle, ...contentStyle }}>
        {children}
      </div>
      {after}
    </section>
  );
};

interface RailSectionProps {
  children: ReactNode;
  innerWidth: number;
  railWidth?: number;
  railGap?: number;
  className?: string;
  style?: CSSProperties;
  floating?: ReactNode;
  contentClassName?: string;
  contentStyle?: CSSProperties;
}

export const RailSection = ({
  children,
  innerWidth,
  railWidth = 16,
  railGap = 52,
  className = "",
  style = {},
  floating,
  contentClassName = "",
  contentStyle = {},
}: RailSectionProps) => {
  const halfWidth = innerWidth / 2;
  const offset = `calc(50% - ${halfWidth}px - ${railGap}px - ${railWidth}px)`;

  return (
    <section className={`relative ${className}`} style={style}>
      <div className="rail-vertical absolute inset-y-0 bg-black" style={{ width: `${railWidth}px`, left: offset }} />
      <div className="rail-vertical absolute inset-y-0 bg-black" style={{ width: `${railWidth}px`, right: offset }} />
      <div
        className={`mx-auto ${contentClassName}`.trim()}
        style={{ width: `${innerWidth}px`, maxWidth: "100%", ...contentStyle }}
      >
        {children}
      </div>
      {floating}
    </section>
  );
};

/** -------------------------------------------------
 *  Adapters for refactored page (compat layer)
 *  ------------------------------------------------ */
export function SectionChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <SectionBorder />
      {children}
    </>
  );
}

export function RotatedLabel({
  children,
  side,
  top,
}: {
  children: ReactNode;
  side: "left" | "right";
  top: string;
}) {
  return (
    <SectionLabel position={side} top={top}>
      {children}
    </SectionLabel>
  );
}
