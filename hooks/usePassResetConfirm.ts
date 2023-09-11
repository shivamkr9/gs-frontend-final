
import { useRouter } from 'next/navigation';
import { useResetPasswordConfirmMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from "yup";

interface PassResetConfirmFormProp {
    password: string;
    password2: string;
}
export default function useResetPasswordConfirm(uid: string, token: string) {
    const router = useRouter();

    const [resetPasswordConfirm, { isLoading }] =
        useResetPasswordConfirmMutation();

    const formik = useFormik<PassResetConfirmFormProp>({
        initialValues: {
            password: "",
            password2: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            password2: Yup.string()
                .oneOf([Yup.ref("password"), ""], "Passwords must match")
                .required("Confirm Password is required"),
        }),
        onSubmit: (values: PassResetConfirmFormProp) => {
            console.log("Form submitted");
            // console.log(values);

            const { password, password2 } = values;
            // Handle form submission logic here
            resetPasswordConfirm({ uid, token, password, password2 })
                .unwrap()
                .then(() => {
                    toast.success('Password reset successful');
                    router.push('/auth/login');
                })
                .catch(() => {
                    toast.error('Password reset failed');
                });
        },
    });

    return {
        formik,
        isLoading
    };
}
