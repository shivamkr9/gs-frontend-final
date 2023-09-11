"use client";
import { useResetPasswordConfirm } from '@/hooks';
import { Spinner } from '../common';
import { Input } from "@/components/forms";

interface Props {
    uid: string;
    token: string;
}

interface Config {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}


export default function ResetPassConfirm({ uid, token }: Props) {

    const {
        formik,
        isLoading,
    } = useResetPasswordConfirm(uid, token);

    const config: Config[] = [
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
                {isLoading ? <Spinner sm /> : `Update Password`}
            </button>
        </form>

    )
}