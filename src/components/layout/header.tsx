import ThemeToggle from '@/components/layout/theme-toggle/theme-toggle';
import UserNav from './user-nav';

export default function Header() {
  return (
    <header>
      <nav>
        <div></div>
        <div>
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
