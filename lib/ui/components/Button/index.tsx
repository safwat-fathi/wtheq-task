import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: TVariant;
  color?: TColor;
  size?: TSize;
  loading?: boolean;
};

const sizes = {
  sm: "py-2 px-4 lg:px-6 xl:px-8",
  md: "py-3 px-6 lg:px-8 xl:px-10",
  lg: "py-4 px-10 lg:px-8 xl:px-10",
};

const variants: Record<TVariant, Record<TColor, string>> = {
  contained: {
    primary: "bg-primary text-white",
    success: "bg-meta-3 text-white",
    secondary: "bg-black text-white",
    error: "bg-danger text-white",
  },
  outlined: {
    primary: "border border-primary text-primary hover:shadow-1",
    success: "border border-meta-3 text-meta-3 hover:shadow-1",
    secondary:
      "border border-stroke text-black dark:border-strokedark dark:text-white hover:shadow-1",
    error: "border border-r-meta-1 text-danger hover:shadow-1",
  },
};

const baseClasses =
  "inline-flex items-center justify-center rounded-md text-center font-medium hover:bg-opacity-90 transition-all duration-200";

const loadingClasses = "pointer-events-none";

const LoadingSpinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const Button = ({
  children,
  variant = "contained",
  color = "primary",
  size = "sm",
  className,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={loading}
      className={`${baseClasses} ${variants[variant][color]} ${
        sizes[size]
      } ${className} ${loading && loadingClasses}`}
      {...props}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default Button;
