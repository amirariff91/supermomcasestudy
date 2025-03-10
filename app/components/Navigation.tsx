'use client';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Current Campaign', href: '#current-campaign' },
  { label: 'Channel Performance', href: '#channel-performance' },
  { label: 'Strategic Roadmap', href: '#strategic-roadmap' },
  { label: 'Budget & KPIs', href: '#budget-kpi' },
  { label: 'Market Analysis', href: '#market-analysis' },
];

export const Navigation = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-pink-600">SuperMom</span>
            <span className="ml-2 text-sm text-gray-500">Case Study</span>
          </div>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200"
                aria-label={`Navigate to ${item.label} section`}
                tabIndex={0}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="md:hidden text-gray-600 hover:text-pink-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}; 