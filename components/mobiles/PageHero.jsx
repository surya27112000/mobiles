import BackBar from "@/components/BackBar";

// Red banner with back button (mobile) / breadcrumb (desktop) + title,
// shared by all Mobile section screens.
export default function PageHero({ crumbs, title, subtitle, leading }) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <BackBar crumbs={crumbs} />

        <div className="mt-4 flex items-center gap-4">
          {leading}
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-white/90 sm:text-base">{subtitle}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}