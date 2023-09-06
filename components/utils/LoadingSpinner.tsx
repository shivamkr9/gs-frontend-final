"use client";

import { Spinner } from "@/components/common";
import { useAppSelector } from "@/redux/hooks";

interface Prop {
    children: React.ReactNode;
}

export default function LoadingSpinner({ children }: Prop) {

    const { isLoading } = useAppSelector(state => state.auth);
    if (isLoading) {
        return (
            <div className="flex justify-center my-0">
                <Spinner lg />
            </div>
        )
    }
    return <>{children}</>
}