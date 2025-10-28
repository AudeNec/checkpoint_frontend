export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-4xl font-bold mb-4 text-primary">
        Welcome to Countries App! 🌍
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl">
        Explore countries from around the world and view their details.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/countries"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Browse Countries
        </a>
        <a
          href="/countries/new"
          className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-semibold"
        >
          Add a Country
        </a>
      </div>
    </div>
  );
}
