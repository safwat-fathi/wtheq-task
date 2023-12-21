"use client";

import { useState, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";
import SidebarLoader from "../../components/Loaders/SidebarLoader";

const Sidebar = dynamic(() => import("@/lib/ui/components/Sidebar"), {
  ssr: false,
  loading: () => <SidebarLoader />,
});

export default function UserLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
