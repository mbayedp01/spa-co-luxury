import Reveal from "./Reveal";

type Props = {
  overline?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionTitle({
  overline,
  title,
  subtitle,
  center = true,
  light = false,
}: Props) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        center ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {overline && (
        <span className="text-xs uppercase tracking-[0.35em] text-or">
          {overline}
        </span>
      )}
      <h2
        className={`heading-lux text-3xl md:text-5xl ${
          light ? "text-noir" : "text-creme"
        }`}
      >
        {title}
      </h2>
      <div className={`gold-line ${center ? "" : "self-start"}`} />
      {subtitle && (
        <p
          className={`max-w-2xl font-cormorant text-xl md:text-2xl ${
            light ? "text-noir/70" : "text-creme/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
