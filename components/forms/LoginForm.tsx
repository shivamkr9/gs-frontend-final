"use client";
import { useLogin } from '@/hooks';
import { Input } from "@/components/forms";
import { Spinner } from '../common';
import Link from 'next/link';

interface Config {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

export default function LoginForm() {

    const {
        formik,
        isLoading,

    } = useLogin();

    const config: Config[] = [
        {
            label: 'Mobile',
            name: 'mobile',
            type: 'number',
            placeholder: "9999999999",
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: "********",
        },

    ];
    const footerLink = {
        linkTitle: `Don’t have an account yet? `,
        linkText: "Register.",
        linkUrl: '/auth/register',
    }

    return (
        <form className='space-y-4 md:space-y-6' onSubmit={formik.handleSubmit} >
            {config.map(input => (

                <Input
                    key={input.name}
                    label={input.label}
                    type={input.type}
                    name={input.name} // Provide a default name
                    placeholder={input.label} // Provide a default placeholder
                    formik={formik}
                />
            ))}

            <button
                type='submit'
                className='w-full text-background bg-action hover:bg-action/90 focus:ring-4 focus:outline-none focus:ring-action/30 font-medium rounded-sm text-sm px-5 py-2.5 text-center transition'
            >
                {isLoading ? <Spinner sm /> : `${footerLink.linkText}`}
            </button>
            {footerLink ? <p className='text-sm font-normal text-foreground/80 '>
                {footerLink.linkTitle}{" "}
                <Link
                    href={footerLink.linkUrl}
                    className='font-semibold text-action/80 hover:underline '
                >
                    {footerLink.linkText}
                </Link>
            </p> : null}
        </form>
    )
}