import Link from 'next/link';
import { cn } from "@/lib/utils";

interface Props {
    isActive?: boolean;
    isMobile?: boolean;
    isBanner?: boolean;
    href?: string;
    children: React.ReactNode;
    [rest: string]: any;
}

export default function NavLink({
    isActive,
    isMobile,
    isBanner,
    href,
    children,
    ...rest
}: Props) {

    const className = cn(
        rest.className,

        {
            "text-sm font-medium transition-colors hover:text-primary": !isBanner,
            "text-foreground border-b-2 border-foreground": isActive,
            "text-foreground": !isActive,
        }
    );
    if (!href) {
        return (
            <span className={className} role='button' onClick={rest.onClick}>
                {children}
            </span>
        );
    }

    return (
        <Link className={className} href={href}>
            {children}
        </Link >
    )
}