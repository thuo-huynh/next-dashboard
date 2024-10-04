'use client';
import { navItems } from '@/constants/data';
import { MenuIcon } from 'lucide-react';
import { Fragment, useState } from 'react';
import { DashboardNav } from '../dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 text-lg font-semibold tracking-tight">
                Overview
              </h2>
            </div>
            <div className="space-y-1">
              <DashboardNav
                items={navItems}
                isMobileNav={true}
                setOpen={setOpen}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}
