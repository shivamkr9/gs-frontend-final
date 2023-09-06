import { ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/forms";
import Spinner from "@/components/common/Spinner";
import Link from "next/link";

interface Config {
    labelId: string;
    labelText: string;
    type: string;
    value: string;
    required?: boolean;
    placeholder: string;
}


interface Prop {
    config: Config[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    btnText: string;
    link?: {
        linkTitle: string;
        linkText: string;
        linkUrl: string;
    }
}

export default function Form({ onChange, onSubmit, config, isLoading, btnText, link }: Prop) {
    return (
        <form className='space-y-4 md:space-y-6' onSubmit={onSubmit} >
            {config.map(input => (

                <Input
                    key={input.labelId}
                    labelId={input.labelId}
                    type={input.type}
                    onChange={onChange}
                    value={input.value}
                    required={input.required}
                    placeholder={input.placeholder}
                >
                    {input.labelText}
                </Input>
            ))}

            <button
                type='submit'
                className='w-full text-background bg-action hover:bg-action/90 focus:ring-4 focus:outline-none focus:ring-action/30 font-medium rounded-sm text-sm px-5 py-2.5 text-center transition'
            >
                {isLoading ? <Spinner sm /> : `${btnText}`}
            </button>
            {link ? <p className='text-sm font-normal text-foreground/80 '>
                {link.linkTitle}{" "}
                <Link
                    href={link.linkUrl}
                    className='font-semibold text-action/80 hover:underline '
                >
                    {link.linkText}
                </Link>
            </p> : <></>}
        </form>
    )
}