"use client";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <div className='container mx-auto flex gap-2 align-middle px-2'>
            <button
                type='button'
                className='py-1.5'
                onClick={() => router.back()}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 text-action'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
                    />
                </svg>
            </button>
            <div className='relative mt-2 rounded-sm shadow-sm flex-1'>
                <form action='#'>
                    <input
                        type='text'
                        name='price'
                        id='price'
                        className='block w-full rounded-sm border-0 py-1.5  pr-12 text-foreground ring-1 ring-inset ring-foreground/50 placeholder:text-foreground/40 focus:ring-2 focus:ring-inset focus:ring-action/90 sm:text-sm sm:leading-6'
                        placeholder='Search...'
                    />
                    <button
                        type='submit'
                        className='absolute inset-y-0 right-0 flex items-center w-9 text-action'
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
                    </button>
                </form>
            </div>
        </div>
    );
}
