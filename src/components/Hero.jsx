import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability and mood */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,0.55)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
        <div className="max-w-2xl">
          <p className="text-sm tracking-widest text-amber-200/70 uppercase">About</p>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-white/95 font-serif">
            A calm space for thoughtful making
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-prose">
            Exploring the quiet intersection of design, code, and meaning.
          </p>
        </div>
      </div>
    </section>
  )
}
