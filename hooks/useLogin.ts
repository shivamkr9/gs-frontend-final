
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";
import { useAppDispatch } from '@/redux/hooks';
import { setAuth } from '@/redux/features/authSlice';
import { useFormik } from "formik";
import * as Yup from "yup";

interface LoginFormProp {
    mobile: string;
    password: string;
}

export default function useLogin() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [login, { isLoading }] = useLoginMutation();

    const formik = useFormik<LoginFormProp>({
        initialValues: {
            mobile: "",
            password: "",
        },
        validationSchema: Yup.object({
            mobile: Yup.string()
                .matches(/^[0-9]{10}$/, "Invalid mobile number")
                .required("Mobile number is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
        }),
        onSubmit: (values: LoginFormProp) => {
            console.log("Form submitted");
            console.log(values);
            // Handle form submission logic here
            login(values)
                .unwrap()
                .then(() => {
                    dispatch(setAuth());
                    toast.success('Logged in');
                    router.push('/');
                })
                .catch(() => {
                    toast.error('Failed to log in');
                });
        },
    });

    return {
        formik,
        isLoading
    };

}