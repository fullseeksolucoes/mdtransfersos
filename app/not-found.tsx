import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="text-8xl font-light text-navy-700">404</span>
      <h1 className="text-3xl font-medium text-charcoal-900">
        Página não encontrada
      </h1>
      <p className="max-w-md text-charcoal-500">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="rounded-full bg-navy-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
