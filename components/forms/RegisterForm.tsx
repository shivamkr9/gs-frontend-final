"use client";
import { useRegister } from '@/hooks';
import { Form } from "@/components/forms"


export default function RegisterForm() {

    const {
        name,
        mobile,
        email,
        password,
        password2,
        isLoading,
        onChange,
        onSubmit,
    } = useRegister();

    const config = [
        {
            labelText: 'Name',
            labelId: 'name',
            type: 'text',
            value: name,
            required: true,
            placeholder: "Name"
        },
        {
            labelText: 'Mobile',
            labelId: 'mobile',
            type: 'number',
            value: mobile,
            required: true,
            placeholder: "9999999999",
        },
        {
            labelText: 'Email address',
            labelId: 'email',
            type: 'email',
            value: email,
            required: true,
            placeholder: "user@example.com",
        },
        {
            labelText: 'Password',
            labelId: 'password',
            type: 'password',
            value: password,
            required: true,
            placeholder: "********",
        },
        {
            labelText: 'Confirm password',
            labelId: 'password2',
            type: 'password',
            value: password2,
            required: true,
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
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Sign up'
            onChange={onChange}
            onSubmit={onSubmit}
            link={footerLink}
        />

    )
}