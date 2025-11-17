import { useMemo } from 'react'

const portraitUrl = 'https://lh3.googleusercontent.com/p/AF1QipM1kAVzeGp8cS14-hEed0hcrtx6ScHfo4B8mkYA=s680-w680-h510-rw'

export default function AboutMe() {
  // Simple noise-like matte using CSS gradients
  const matteBg = useMemo(
    () => ({
      backgroundImage:
        'radial-gradient(1200px 600px at 20% 10%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%), radial-gradient(800px 400px at 80% 90%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)',
    }),
    []
  )

  return (
    <section className="relative w-full bg-neutral-950 text-neutral-200">
      {/* Subtle vignette + gradient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-40" style={matteBg} />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Portrait with integrated look: soft rounded rectangle + subtle gradient mask */}
        <div className="relative order-last md:order-first">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
            {/* Image */}
            <img
              src={portraitUrl}
              alt="Portrait"
              className="h-full w-full object-cover object-center scale-[1.02]"
            />
            {/* Soft gradient fade to integrate with background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neutral-950/60 via-transparent to-transparent" />
            {/* Subtle inner highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>
        </div>

        {/* Text block with refined typography */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/95 font-serif">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-300/90 font-light">
            I’m a thoughtful learner, maker, and creative developer. I care about
            curiosity and simplicity—moving with patience, listening closely, and
            building with intention. My work is guided by growth and creativity,
            shaping things that feel meaningful and human.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-neutral-300/80 font-light">
            Technology, to me, is a medium of expression—not just a collection of
            tools. I enjoy crafting quiet, clear interfaces and systems that
            support people gently, with a sense of calm confidence.
          </p>
        </div>
      </div>
    </section>
  )
}
