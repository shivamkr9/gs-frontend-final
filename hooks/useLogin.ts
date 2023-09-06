import { ChangeEvent, FormEvent, useState } from "react";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";
import { useAppDispatch } from '@/redux/hooks';
import { setAuth } from '@/redux/features/authSlice';


export default function useLogin() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [login, { isLoading }] = useLoginMutation();

    const [formData, setFormData] = useState({
        mobile: '',
        password: '',
    });

    const { mobile, password } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        login({ mobile, password })
            .unwrap()
            .then(() => {
                dispatch(setAuth());
                toast.success('Logged in');
                router.push('/');
            })
            .catch(() => {
                toast.error('Failed to log in');
            });
    };

    return {

        mobile,
        password,
        isLoading,
        onChange,
        onSubmit
    }

}