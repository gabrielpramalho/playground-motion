import { NavLink } from './nav-link'

export function Aside() {
  return (
    <div className="flex-shrink-0 lg:w-[270px]">
      <aside className="bottom-0 top-14 h-[calc(100vh_-_3rem)] flex-1 border-r border border-neutral-800/60 max-lg:hidden max-lg:pt-12 lg:sticky">
        <nav className="h-full overflow-y-auto pl-6 pr-6 pt-8 space-y-4 [-ms-overflow-style:none] [scrollbar-width:none] max-lg:hidden [&::-webkit-scrollbar]:hidden">
          <div>
            <span className='text-lg'>Components</span>
          </div>
          <ul className="flex flex-col gap-4">
            <NavLink href="/ui/animate-on-show">Animation</NavLink>
            <NavLink href="/ui/button">Button</NavLink>
            <NavLink href="/ui/magnetic-hover">Magnetic Hover</NavLink>
          </ul>
        </nav>
      </aside>
    </div>
  )
}
