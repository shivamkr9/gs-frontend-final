"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Prop {
    className?: any[]
}

export default function NavMenu({ className, ...props }: Prop) {
    const pathname = usePathname();

    const routes = [
        {
            href: `/auth/login`,
            label: "Login",
            active: pathname === `/auth/login`,
        },
        {
            href: `/auth/register`,
            label: "Register",
            active: pathname === `/auth/register`,
        },

        {
            href: `/profile`,
            label: "Profile",
            active: pathname === `/profile`,
        },
        {
            href: `#`,
            label: "Logout",
            active: pathname === `#`,
        },
        {
            href: `/search`,
            label: `Search`,
        },
    ];

    return (
        <nav
            className={cn(
                "flex items-center space-x-4 lg:space-x-6",
                className
            )}
            {...props}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active
                            ? "text-foreground border-b-2 border-foreground "
                            : "text-foreground"
                    )}
                >
                    {route.label !== "Search" ? (
                        route.label
                    ) : (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                            />
                        </svg>
                    )}
                </Link>
            ))}
        </nav>
    );
}
