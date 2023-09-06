
import Link from "next/link";

export default function NotFound() {
    return (
        <div className='flex h-screen'>
            <div className='m-auto'>
                <main className='grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8'>
                    <div className='text-center'>
                        <p className='text-base font-semibold text-foreground/80'>
                            404
                        </p>
                        <h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl'>
                            Page not found
                        </h1>

                        <div className='mt-10 flex items-center justify-center gap-x-6'>
                            <Link
                                href='/'
                                className='rounded-md bg-foreground/95 px-3.5 py-2.5 text-sm font-semibold text-background shadow-sm hover:bg-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forbg-foreground/95'
                            >
                                Go back home
                            </Link>

                            <Link
                                href='/'
                                className='text-sm font-semibold text-foreground'
                            >
                                Contact support{" "}
                                <span aria-hidden='true'>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
