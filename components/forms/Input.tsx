import { ChangeEvent } from "react";

interface Prop {
    labelId: string;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    children: React.ReactNode;
    required?: boolean;
    placeholder: string;
}

export default function Input({ labelId, type, onChange, value, children, required = false, placeholder }: Prop) {
    return (
        <div>
            <label
                htmlFor={labelId}
                className='block mb-2 text-sm font-medium text-foreground/80 '
            >
                {children}
            </label>
            <input
                type={type}
                name={labelId}
                id={labelId}
                className='bg-background border border-foreground/30 text-foreground/90 sm:text-sm rounded-sm focus:ring-foreground/60 focus:border-foreground/60 block w-full p-2.5 placeholder:text-foreground/80'
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required={required}
            />
        </div>
    )
}