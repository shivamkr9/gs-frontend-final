import { ChangeEvent, FormEvent, useState } from "react";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";


export default function useRegister() {
    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, mobile, email, password, password2 } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        register({ name, mobile, email, password, password2 })
            .unwrap()
            .then(() => {
                toast.success('Your account has been created successfully.');
                router.push('/auth/login');
            })
            .catch(() => {
                toast.error('Failed to register account');
            });
    };

    return {

        name,
        mobile,
        email,
        password,
        password2,
        isLoading,
        onChange,
        onSubmit
    }

}