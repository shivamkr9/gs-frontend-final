"use client";
import { useRegister } from '@/hooks';
import Link from 'next/link';
import { Input } from "@/components/forms";
import { Spinner } from "@/components/common";
import { ChangeEvent, FormEvent } from "react";

interface Config {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}


export default function RegisterForm() {

    const {
        formik,
        isLoading,

    } = useRegister();

    const config: Config[] = [
        {
            label: 'Name',
            name: 'name',
            type: 'text',
            placeholder: "Name"
        },
        {
            label: 'Mobile',
            name: 'mobile',
            type: 'number',
            placeholder: "9999999999",
        },
        {
            label: 'Email address',
            name: 'email',
            type: 'email',
            placeholder: "user@example.com",
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: "********",
        },
        {
            label: 'Confirm password',
            name: 'password2',
            type: 'password',
            placeholder: "********",
        },
    ];
    const footerLink =
    {

        linkTitle: `Do you have an account yet? `,
        linkText: "Login.",
        linkUrl: '/auth/login',
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