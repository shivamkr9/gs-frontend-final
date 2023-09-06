"use client";
import { useResetPasswordConfirm } from '@/hooks';
import { Form } from "@/components/forms"

interface Props {
    uid: string;
    token: string;
}


export default function ResetPassConfirm({ uid, token }: Props) {

    const { new_password, re_new_password, isLoading, onChange, onSubmit } =
        useResetPasswordConfirm(uid, token);

    const config = [
        {
            labelText: 'New password',
            labelId: 'new_password',
            type: 'text',
            value: new_password,
            required: true,
            placeholder: "********",
        },

        {
            labelText: 'Confirm new password',
            labelId: 're_new_password',
            type: 'password',
            value: re_new_password,
            required: true,
            placeholder: "********",
        },

    ];
    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Log in'
            onChange={onChange}
            onSubmit={onSubmit}
        />

    )
}