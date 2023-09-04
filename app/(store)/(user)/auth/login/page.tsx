import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <section className='bg-background flex h-screen'>
            <div className='m-auto'>
                <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                    <p className='flex items-center mb-6 text-2xl font-semibold text-foreground'>
                        <Image
                            width='32'
                            height='32'
                            className='w-8 h-8 mr-2'
                            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
                            alt='logo'
                        />
                        Flowbite
                    </p>
                    <div className='w-full bg-foreground/5 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 '>
                        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                            <h1 className='text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl '>
                                Welcome back :{")"}
                            </h1>
                            <form className='space-y-4 md:space-y-6' action='#'>
                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block mb-2 text-sm font-medium text-foreground/80 '
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='bg-background border border-foreground/30 text-foreground/90 sm:text-sm rounded-sm focus:ring-foreground/60 focus:border-foreground/60 block w-full p-2.5 placeholder:text-foreground/80'
                                        placeholder='user@example.com'
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='password'
                                        className='block mb-2 text-sm font-medium text-foreground/80'
                                    >
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='••••••••'
                                        className='bg-background border border-foreground/30 text-foreground/90 sm:text-sm rounded-sm focus:ring-foreground/60 focus:border-foreground/60 block w-full p-2.5 placeholder:text-foreground/80'
                                        required
                                    />
                                </div>
                                <div className='flex items-end justify-end'>
                                    <Link
                                        href='/password-reset'
                                        className='text-sm font-medium text-action/80 hover:underline '
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <button
                                    type='submit'
                                    className='w-full text-background bg-action hover:bg-action/90 focus:ring-4 focus:outline-none focus:ring-action/30 font-medium rounded-sm text-sm px-5 py-2.5 text-center transition'
                                >
                                    Login
                                </button>
                                <p className='text-sm font-normal text-foreground/80 '>
                                    Don’t have an account yet?{" "}
                                    <Link
                                        href='/auth/register'
                                        className='font-semibold text-action/80 hover:underline '
                                    >
                                        Register.
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
