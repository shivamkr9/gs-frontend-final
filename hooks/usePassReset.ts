
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";


interface ResetFormProp {
    email: string;
}

export default function useLogin() {
    const router = useRouter();
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const formik = useFormik<ResetFormProp>({
        initialValues: {

            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
        }),
        onSubmit: (values: ResetFormProp) => {
            console.log("Form submitted");
            console.log(values);
            // Handle form submission logic here
            const { email } = values;
            resetPassword({ email })
                .unwrap()
                .then(() => {
                    toast.success('Password reset link has been sent on you email. Please check.');
                    router.push('/auth/login');
                })
                .catch(() => {
                    toast.error('Failed to reset password');
                });
        },
    });

    return {
        formik,
        isLoading
    };

}