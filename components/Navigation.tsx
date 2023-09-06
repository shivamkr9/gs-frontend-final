import NavLink from "@/components/NavLink"
import NavMenu from "./navMenu";

export default function Navigation() {
    return (
        <div className='shadow'>
            <div className='container flex justify-between m-auto h-16 items-center'>
                <div>
                    <NavLink isBanner href='/'>Logo</NavLink>
                </div>
                <div>
                    <NavMenu />
                </div>
            </div>
        </div>
    );
}
