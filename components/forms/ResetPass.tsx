"use client";
import { usePassReset } from '@/hooks';
import { Form } from "@/components/forms"


export default function ResetPass() {

    const {
        email,
        isLoading,
        onChange,
        onSubmit,
    } = usePassReset();

    const config = [
        {
            labelText: 'Mobile',
            labelId: 'mobile',
            type: 'number',
            value: email,
            required: true,
            placeholder: "9999999999",
        },
    ];
    const footerLink = {
        linkTitle: `Do you have an account? `,
        linkText: "Login.",
        linkUrl: '/auth/login',
    }

    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Reset Password'
            onChange={onChange}
            onSubmit={onSubmit}
            link={footerLink}
        />

    )
}