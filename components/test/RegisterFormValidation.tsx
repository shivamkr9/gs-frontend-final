"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChangeEvent } from "react";
import { FormField } from "@/components/test";

interface FormValues {
    name: string;
    mobile: string;
    email: string;
    password: string;
    password2: string;
    terms: boolean;
}

export default function RegisterFormValidation() {
    const formik = useFormik<FormValues>({
        initialValues: {
            name: "",
            mobile: "",
            email: "",
            password: "",
            password2: "",
            terms: false,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(20, "Name must be 20 characters or less.")
                .required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            mobile: Yup.string()
                .matches(/^[0-9]{10}$/, "Invalid mobile number")
                .required("Mobile number is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            password2: Yup.string()
                .oneOf([Yup.ref("password"), ""], "Passwords must match")
                .required("Confirm Password is required"),
            terms: Yup.boolean().oneOf([true], "Terms of service must be checked"),
        }),
        onSubmit: (values: FormValues) => {
            console.log("Form submitted");
            console.log(values);
            // Handle form submission logic here
        },
    });

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
            <FormField name="name" label="Name" type="text" formik={formik} />
            <FormField name="mobile" label="Mobile" type="text" formik={formik} />
            <FormField name="email" label="Email" type="email" formik={formik} />
            <FormField name="password" label="Password" type="password" formik={formik} />
            <FormField name="password2" label="Confirm Password" type="password" formik={formik} />

            <div className="mb-4">
                <label htmlFor="terms" className="flex items-center">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="mr-2"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.terms}
                    />
                    <span className="text-sm font-medium text-gray-700">I accept the Terms of Service</span>
                </label>
                {formik.touched.terms && formik.errors.terms && (
                    <p className="mt-2 text-sm text-red-600">{formik.errors.terms}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none transition"
            >
                Submit
            </button>
        </form>
    );
}

