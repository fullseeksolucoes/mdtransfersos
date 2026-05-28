'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="text-8xl font-light text-alert-500">500</span>
      <h1 className="text-3xl font-medium text-charcoal-900">
        Algo deu errado
      </h1>
      <p className="max-w-md text-charcoal-500">
        Ocorreu um erro inesperado. Tente novamente.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-navy-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
      >
        Tentar novamente
      </button>
    </div>
  );
}
