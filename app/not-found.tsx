import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="heading-lux text-7xl text-or">404</span>
      <div className="gold-line" />
      <h1 className="heading-lux text-2xl text-creme">Page introuvable</h1>
      <p className="max-w-md font-cormorant text-xl text-creme/60">
        La page que vous recherchez semble s'être évaporée comme la vapeur d'un
        hammam. Retrouvez la sérénité sur notre page d'accueil.
      </p>
      <Link href="/" className="btn-gold">
        Retour à l'accueil
      </Link>
    </section>
  );
}
