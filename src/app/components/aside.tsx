import { NavLink } from './nav-link'

export function Aside() {
  const items = [
    {
      title: 'Animation',
      href: '/ui/animate-on-show',
    },
    {
      title: 'Button',
      href: '/ui/button',
    },
    {
      title: 'Magnetic Hover',
      href: '/ui/magnetic-hover',
    },
    {
      title: 'Icons',
      href: '/ui/icons',
    },
    {
      title: 'Expandable Card',
      href: '/ui/expandable-card',
    },
    {
      title: 'Expandable Menu',
      href: '/ui/expandable-menu',
    },
    {
      title: 'Sticky Scroll',
      href: '/ui/sticky-scroll',
    },
    {
      title: 'Smooth Scroll',
      href: '/ui/smooth-scroll',
    },
    {
      title: 'Number Flow',
      href: '/ui/number-flow',
    },
    {
      title: 'Scroll Snap',
      href: '/ui/scroll-snap',
    },
    {
      title: 'Card Profile',
      href: '/ui/card-profile'
    },
    {
      title: 'Input File',
      href: '/ui/input-file'
    },
    {
      title: 'Button Animated',
      href: '/ui/button-animated'
    }
  ]

  const asideItemsSorted = items.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="flex-shrink-0 lg:w-[270px]">
      <aside className="bottom-0 top-14 h-[calc(100vh_-_3rem)] flex-1 border-r border border-neutral-800/60 max-lg:hidden max-lg:pt-12 lg:sticky">
        <nav className="h-full overflow-y-auto pl-6 pr-6 pt-8 space-y-4 [-ms-overflow-style:none] [scrollbar-width:none] max-lg:hidden [&::-webkit-scrollbar]:hidden">
          <div>
            <span className="text-lg">Components</span>
          </div>
          <ul className="flex flex-col gap-4">
            {asideItemsSorted.map(item => {
              return (
                <NavLink key={item.href} href={item.href}>
                  {item.title}
                </NavLink>
              )
            })}
          </ul>
        </nav>
      </aside>
    </div>
  )
}
