"use client";
import { useLogin } from '@/hooks';
import { Form } from "@/components/forms"


export default function LoginForm() {

    const {
        mobile,
        password,
        isLoading,
        onChange,
        onSubmit,
    } = useLogin();

    const config = [
        {
            labelText: 'Mobile',
            labelId: 'mobile',
            type: 'number',
            value: mobile,
            required: true,
            placeholder: "9999999999",
        },

        {
            labelText: 'Password',
            labelId: 'password',
            type: 'password',
            value: password,
            required: true,
            placeholder: "********",
        },

    ];
    const footerLink = {
        linkTitle: `Don’t have an account yet? `,
        linkText: "Register.",
        linkUrl: '/auth/register',
    }

    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Log in'
            onChange={onChange}
            onSubmit={onSubmit}
            link={footerLink}
        />

    )
}