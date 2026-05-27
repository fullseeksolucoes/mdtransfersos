const fleet = [
  {
    id: "sovereign",
    name: "Mercedes-Benz S-Class",
    title: "O Soberano",
    image: "/fleet-sclass.jpg",
    role: "Transfer executivo · Categoria 01",
    specs: [
      ["Capacidade", "4 passageiros"],
      ["Bagagem", "3 grandes"],
      ["Wi-Fi", "A bordo"],
      ["Motor", "Híbrido"],
    ],
  },
  {
    id: "vanguard",
    name: "Range Rover Autobiography",
    title: "A Vanguarda",
    image: "/fleet-rangerover.jpg",
    role: "SOS todo-terreno · Transfer rural",
    specs: [
      ["Capacidade", "4 passageiros"],
      ["Bagagem", "4 grandes"],
      ["Tração", "4x4 permanente"],
      ["Autonomia", "780 km"],
    ],
  },
];

export default function FleetSection() {
  return (
    <section id="fleet" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-executive/60" />
            <span className="text-xs font-medium tracking-[0.3em] text-executive uppercase">
              A frota
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-ink-800 tracking-tight mb-4">
            Veículos selecionados.
            <br />
            <span className="text-ink-400">Para cada jornada.</span>
          </h2>
        </header>

        <div className="mt-16 space-y-24">
          {fleet.map((v, i) => (
            <article
              key={v.id}
              className="grid items-center gap-10 lg:grid-cols-12"
            >
              <div
                className={`relative overflow-hidden rounded-sm bg-warm-100 ring-1 ring-ink-200/50 lg:col-span-8 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <img
                  src={v.image}
                  alt={v.name}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-800 backdrop-blur">
                  <span className="size-1.5 rounded-full bg-executive" />
                  {v.title}
                </div>
              </div>

              <div
                className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="font-display text-sm italic text-ink-400">
                  No. 0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-3xl font-medium leading-tight text-ink-800">
                  {v.name}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{v.role}</p>

                <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-ink-200 pt-6">
                  {v.specs.map(([k, val]) => (
                    <div key={k}>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-400">
                        {k}
                      </dt>
                      <dd className="mt-1 font-display text-lg text-ink-800">
                        {val as string}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="#book"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-800 transition-colors hover:text-executive"
                >
                  Reservar este veículo
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
