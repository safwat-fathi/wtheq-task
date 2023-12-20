import Link from "next/link";
interface BreadcrumbProps {
	list: {label: string; href?: string}[];
}
const Breadcrumb = ({ list }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2> */}

      <nav>
        <ol className="flex items-center gap-2">
          {list.map((item, index) =>
					<>
            {item.href ? (
              <li key={item.label}>
                <Link className="font-medium" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ) : (
              <li className="font-medium text-primary">{item.label}</li>
            )}

						{/* separator */}
						{index !== list.length - 1 && (
							<li>
								<span className="text-gray-400">/</span>
							</li>
						)}
						</>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
