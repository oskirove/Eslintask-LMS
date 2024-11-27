"use client";

import DarkModeToggle from '@/components/DarkModeToggle';
import { Input } from '@/components/ui/input';
import { UserButton, useUser } from '@clerk/nextjs'
import { Breadcrumbs } from './Breadcrumbs';
import NotificationsButton from './NotificationsButton';

export default function HeaderDashboard() {

  const { user } = useUser();

  return (
    <header className="flex sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center w-full justify-start mx-3">
        <Breadcrumbs />
      </div>
      <nav className="flex w-full justify-end items-center p-2 px-1 mx-2 gap-2">
        <DarkModeToggle />
        <NotificationsButton />
        <div className="flex rounded-xl bg-blue-200 text-blue-600 bg-opacity-30 dark:bg-blue-900 dark:text-blue-500 dark:bg-opacity-30 p-2 items-center gap-2">
          <UserButton />
          <p className="font-bold">{user?.username}</p>
        </div>
      </nav>
    </header>
  )
}
