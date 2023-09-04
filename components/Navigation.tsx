import Link from "next/link";
import NavMenu from "./navMenu";

export default function Navigation() {
    return (
        <div className='shadow'>
            <div className='container flex justify-between m-auto h-16 items-center'>
                <div>
                    <Link href='/'>Logo</Link>
                </div>
                <div>
                    <NavMenu />
                </div>
            </div>
        </div>
    );
}
