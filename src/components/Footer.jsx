export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between text-neutral-400 text-sm">
        <p className="font-light">© {new Date().getFullYear()} — Crafted with calm intent.</p>
        <p className="font-light">Curiosity • Simplicity • Growth • Creativity</p>
      </div>
    </footer>
  )
}
