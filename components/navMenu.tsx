"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavLink from "@/components/NavLink"
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';

interface Prop {
    className?: string
}

export default function NavMenu({ className, ...props }: Prop) {
    const pathname = usePathname();
    const dispatch = useAppDispatch();

    const [logout] = useLogoutMutation();

    const { isAuthenticated } = useAppSelector(state => state.auth);

    const handleLogout = () => {
        logout(undefined)
            .unwrap()
            .then(() => {
                dispatch(setLogout());
            });
    };

    const isActive = (path: string) => (pathname === path ? true : false);

    const authLinks = (isMobile: boolean) => (
        <>
            <NavLink
                isActive={isActive('/profile')}
                isMobile={isMobile}
                href='/profile'
            >
                Profile
            </NavLink>
            <NavLink isMobile={isMobile} onClick={handleLogout}>
                Logout
            </NavLink>
        </>
    );

    const guestLinks = (isMobile: boolean) => (
        <>
            <NavLink
                isActive={isActive('/auth/login')}
                isMobile={isMobile}
                href='/auth/login'
            >
                Login
            </NavLink>
            <NavLink
                isActive={isActive('/auth/register')}
                isMobile={isMobile}
                href='/auth/register'
            >
                Register
            </NavLink>
        </>
    );

    return (
        <nav
            className={cn(
                "flex items-center space-x-4 lg:space-x-6",
                className
            )}
            {...props}
        >
            {isAuthenticated
                ? authLinks(false)
                : guestLinks(false)}
            <NavLink
                href="/search"
            >
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
            </NavLink>
        </nav>
    );
}
