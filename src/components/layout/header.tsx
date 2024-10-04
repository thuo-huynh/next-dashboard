import ThemeToggle from '@/components/layout/theme-toggle/theme-toggle';
import UserNav from './user-nav';
import { MobileSidebar } from './mobile-sidebar';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
