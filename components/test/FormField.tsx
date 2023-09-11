import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChangeEvent } from "react";

interface FormFieldProps {
    name: string;
    label: string;
    type: string;
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

export default function FormField({ name, label, type, formik }: FormFieldProps) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className="mt-1 p-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                placeholder={label}
                {...formik.getFieldProps(name)}
            />
            {formik.touched[name] && formik.errors[name] && (
                <p className="mt-2 text-sm text-red-600">{formik.errors[name]}</p>
            )}
        </div>
    );
}

