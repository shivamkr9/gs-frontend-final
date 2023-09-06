import { ChangeEvent, FormEvent, useState } from "react";
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";


export default function useLogin() {
    const router = useRouter();
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const [formData, setFormData] = useState({
        email: '',
    });

    const { email } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        resetPassword({ email })
            .unwrap()
            .then(() => {
                toast.success('Password reset link has been sent on you email. Please check.');
                router.push('/auth/login');
            })
            .catch(() => {
                toast.error('Failed to reset password');
            });
    };

    return {
        email,
        isLoading,
        onChange,
        onSubmit
    }

}