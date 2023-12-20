const SidebarLoader = () => {
  return (
    <div className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
      {/* header */}
      <div className="animate-pulse flex flex-col">
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <div className="rounded bg-body h-16 w-full" />
        </div>

        {/* links */}
        <div className="flex flex-col gap-4 mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-body h-4 w-4"></div>
            <div className="h-4 bg-body rounded w-full"></div>
          </div>
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-body h-4 w-4"></div>
            <div className="h-4 bg-body rounded w-full"></div>
          </div>
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-body h-4 w-4"></div>
            <div className="h-4 bg-body rounded w-full"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-body h-4 w-4"></div>
            <div className="h-4 bg-body rounded w-full"></div>
          </div>
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-body h-4 w-4"></div>
            <div className="h-4 bg-body rounded w-full"></div>
          </div>
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-body h-4 w-4"></div>
            <div className="h-4 bg-body rounded w-full"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-body h-4 w-4"></div>
            <div className="h-4 bg-body rounded w-full"></div>
          </div>
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-body h-4 w-4"></div>
            <div className="h-4 bg-body rounded w-full"></div>
          </div>
          <div className="flex items-start gap-2">
            <div className="rounded-full bg-body h-4 w-4"></div>
            <div className="h-4 bg-body rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLoader;
