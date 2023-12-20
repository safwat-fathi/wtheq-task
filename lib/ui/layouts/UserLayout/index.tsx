"use client";

import { useState, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";
import SidebarLoader from "../../components/Loaders/SidebarLoader";
import HeaderLoader from "../../components/Loaders/HeaderLoader";

const Sidebar = dynamic(() => import("@/lib/ui/components/Sidebar"), {
  ssr: false,
  loading: () => <SidebarLoader />,
});

const Header = dynamic(() => import("@/lib/ui/components/Header"), {
  ssr: false,
  loading: () => <HeaderLoader />,
});

export default function UserLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {children}
        </div>
      </div>
    </div>
  );
}
