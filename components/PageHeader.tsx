import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  overline,
  title,
  image,
  crumbs = [],
}: {
  overline?: string;
  title: string;
  image: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative flex h-[52vh] min-h-[380px] items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir" />
      <div className="container-lux relative z-10 mt-16 flex flex-col items-center text-center">
        {overline && (
          <span className="mb-4 text-xs uppercase tracking-[0.4em] text-or">
            {overline}
          </span>
        )}
        <h1 className="heading-lux text-4xl text-creme md:text-6xl">{title}</h1>
        <div className="gold-line mt-6" />
        {crumbs.length > 0 && (
          <nav className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-creme/60">
            <Link href="/" className="hover:text-or">
              Accueil
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-or">/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-or">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-or">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
