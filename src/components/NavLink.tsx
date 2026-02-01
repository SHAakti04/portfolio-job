import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AppNavLinkProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, AppNavLinkProps>(
  ({ className, activeClassName, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        {...props}
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors",
            className,
            isActive && activeClassName
          )
        }
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
