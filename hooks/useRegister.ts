
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

interface RegisterFormProp {
    name: string;
    mobile: string;
    email: string;
    password: string;
    password2: string;
}

export default function useRegister() {
    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();
    const formik = useFormik<RegisterFormProp>({
        initialValues: {
            name: "",
            mobile: "",
            email: "",
            password: "",
            password2: "",
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
        }),
        onSubmit: (values: RegisterFormProp) => {
            console.log("Form submitted");
            console.log(values);
            // Handle form submission logic here
            register(values)
                .unwrap()
                .then(() => {
                    toast.success('Your account has been created successfully.');
                    router.push('/auth/login');
                })
                .catch(() => {
                    toast.error('Failed to register account');
                });
        },
    });

    return {
        formik,
        isLoading
    };
};
