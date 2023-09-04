"use client";
import { ChangeEvent, FormEvent, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";
import Spinner from "@/components/common/Spinner";

export default function Page() {

    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, mobile, email, password, password2 } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        register({ name, mobile, email, password, password2 })
            .unwrap()
            .then(() => {
                toast.success('Please check email to verify account');
                router.push('/auth/login');
            })
            .catch(() => {
                toast.error('Failed to register account');
            });
    };

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
                                Create your account
                            </h1>
                            <form className='space-y-4 md:space-y-6' onSubmit={onSubmit}>
                                <div>
                                    <label
                                        htmlFor='name'
                                        className='block mb-2 text-sm font-medium text-foreground/80 '
                                    >
                                        Your name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        className='bg-background border border-foreground/30 text-foreground/90 sm:text-sm rounded-sm focus:ring-foreground/60 focus:border-foreground/60 block w-full p-2.5 placeholder:text-foreground/80'
                                        placeholder='Name'
                                        onChange={onChange}
                                        value={name}
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='mobile'
                                        className='block mb-2 text-sm font-medium text-foreground/80 '
                                    >
                                        Mobile no
                                    </label>
                                    <input
                                        type='number'
                                        name='mobile'
                                        id='mobile'
                                        className='bg-background border border-foreground/30 text-foreground/90 sm:text-sm rounded-sm focus:ring-foreground/60 focus:border-foreground/60 block w-full p-2.5 placeholder:text-foreground/80'
                                        placeholder='9999999999'
                                        onChange={onChange}
                                        value={mobile}
                                        required
                                    />
                                </div>
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
                                        onChange={onChange}
                                        value={email}
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
                                        value={password}
                                        onChange={onChange}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='password2'
                                        className='block mb-2 text-sm font-medium text-foreground/80'
                                    >
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        name='password2'
                                        id='password2'
                                        placeholder='••••••••'
                                        className='bg-background border border-foreground/30 text-foreground/90 sm:text-sm rounded-sm focus:ring-foreground/60 focus:border-foreground/60 block w-full p-2.5 placeholder:text-foreground/80'
                                        onChange={onChange}
                                        value={password2}
                                        required
                                    />
                                </div>


                                <button
                                    type='submit'
                                    className='w-full text-background bg-action hover:bg-action/90 focus:ring-4 focus:outline-none focus:ring-action/30 font-medium rounded-sm text-sm px-5 py-2.5 text-center transition'
                                >
                                    {isLoading ? <Spinner sm /> : "Sign up"}
                                </button>
                                <p className='text-sm font-normal text-foreground/80 '>
                                    Do you have an account yet?{" "}
                                    <Link
                                        href='/auth/login'
                                        className='font-semibold text-action/80 hover:underline '
                                    >
                                        Login
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
