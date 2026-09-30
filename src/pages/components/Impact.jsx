const outcomes = [
  {
    value: "20+",
    label: "UI/UX specifications reviewed",
    detail: "Fewer design-related implementation issues",
  },
  {
    value: "30%",
    label: "Faster development",
    detail: "Through reusable cross-platform code",
  },
  {
    value: "40%",
    label: "Less manual data entry",
    detail: "With REST API integrations",
  },
  {
    value: "50%",
    label: "Less duplicated code",
    detail: "Using clean architecture",
  },
];

const Impact = () => (
  <section
    id="impact"
    aria-labelledby="impact-title"
    className="animate-fade-in-up border-y border-primary/10 bg-secondary/15 px-6 py-16 md:px-10 md:py-20"
  >
    <div className="mx-auto max-w-7xl">
      <div>
        <p className="text-sm font-semibold uppercase text-primary">
          Selected outcomes
        </p>
        <h2
          id="impact-title"
          className="mt-2 text-3xl font-bold text-foreground md:text-4xl"
        >
          Good work, measured.
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {outcomes.map((outcome, index) => (
          <div
            key={outcome.value}
            className="border-l-2 border-primary/40 pl-5"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-4xl font-bold text-primary md:text-5xl">
              {outcome.value}
            </p>
            <h3 className="mt-3 font-bold text-foreground">{outcome.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {outcome.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Impact;
