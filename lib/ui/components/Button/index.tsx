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

const loadingClasses = "pointer-events-none opacity-50";

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
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
