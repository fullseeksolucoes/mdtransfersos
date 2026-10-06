export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-charcoal-300 border-t-navy-700" />
        <span className="text-sm text-charcoal-500">Carregando...</span>
      </div>
    </div>
  );
}
