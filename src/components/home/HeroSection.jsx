function HeroSection() {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-2 py-20 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                    Placeholder badge
                </span>
                <h2 className="text-5xl leading-[1.05] font-extrabold tracking-tight text-slate-900 md:text-6xl">
                    Neque porro quisquam est qui dolorem ipsum
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    ullamcorper libero nisl, in vulputate lacus mollis eu. Nulla a
                    interdum mi. Praesent commodo enim metus, eu cursus sapien
                    fermentum ut. Vivamus lacinia urna quis pellentesque fermentum.
                    Vivamus convallis sodales ultricies. Fusce lobortis et libero quis
                    consectetur.
                </p>
                <div className="flex flex-row flex-wrap items-center gap-4">
                    <button className="rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-slate-800">
                        Placeholder
                    </button>
                    <button className="rounded-xl bg-slate-100 px-8 py-4 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-200">
                        Placeholder
                    </button>
                </div>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
                <div className="h-72 w-full rounded-2xl bg-slate-100 md:h-96"></div>
            </div>
        </div>
    );
}

export default HeroSection