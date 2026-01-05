import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: "default" | "narrow";
  className?: string;
};

export default function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  const width =
    size === "narrow" ? "max-w-4xl" : "max-w-6xl";

  return (
    <div className={`mx-auto ${width} px-6 ${className}`}>
      {children}
    </div>
  );
}
