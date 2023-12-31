import { ChangeEvent } from "react";

interface Prop {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    formik: {
        getFieldProps: (field: string) => {
            value: string;
            onChange: (e: ChangeEvent<any>) => void;
            onBlur: (e: ChangeEvent<any>) => void;
        };
        touched: { [field: string]: boolean };
        errors: { [field: string]: string | undefined };
    };
}

export default function Input({ name, label, type, placeholder, formik }: Prop) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className='block mb-2 text-sm font-medium text-foreground/80'>
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className='bg-background border border-foreground/30 text-foreground/90 sm:text-sm rounded-sm focus:ring-foreground/60 focus:border-foreground/60 block w-full p-2.5 placeholder:text-foreground/80'
                placeholder={placeholder}
                {...formik.getFieldProps(name)}
            />
            {formik.touched[name] && formik.errors[name] && (
                <p className="mt-2 text-sm text-red-600">{formik.errors[name]}</p>
            )}
        </div>
    )
}