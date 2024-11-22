export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[4rem] w-full bg-background">
      <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-6 border-b border border-neutral-800/60 px-6 xl:border-x">
        <div>Logo</div>
        <div>Socials</div>
      </nav>
    </header>
  )
}