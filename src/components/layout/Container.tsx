import { ReactNode } from "react";
import { cn } from "../../utils/utils";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("w-full max-w-[1220px] mx-auto px-[20px]", className)}>
      {children}
    </div>
  );
};

export default Container;
