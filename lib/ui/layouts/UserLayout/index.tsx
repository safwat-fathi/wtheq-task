"use client";

import { useState, ReactNode } from "react";
import dynamic from "next/dynamic";
import SidebarLoader from "../../components/Loaders/SidebarLoader";
import Header from "../../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = dynamic(() => import("@/lib/ui/components/Sidebar"), {
  ssr: false,
  loading: () => <SidebarLoader />,
});

export default function UserLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {children}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
