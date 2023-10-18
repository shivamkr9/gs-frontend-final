import Navigation from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Profile Page',
    description: 'Test Meta Data',
}


export default function Page() {
    return (
        <div>
            <Navigation />
            Profile
        </div>
    );
}
