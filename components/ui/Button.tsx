type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
};

interface ButtonSize {
  small: string;
  medium: string;
  large: string;
}
const sizes: ButtonSize = {
  small: "px-3 py-2 text-sm",
  medium: "px-5 py-3 text-base",
  large: "px-7 py-4 text-lg",
};

interface ButtonVariants {
  primary: string;
  secondary: string;
}
const variants: ButtonVariants = {
  primary:
    " border rounded-xl bg-neutral-900 text-white hover:bg-neutral-700 disabled:hover:bg-neutral-700",
  secondary:
    "border rounded-xl border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100 disabled:hover:bg-white",
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  className,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
