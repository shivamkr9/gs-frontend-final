

import { RegisterForm } from "@/components/forms";
import Image from "next/image";

export default function Page() {

    return (
        <section className='bg-background flex h-screen'>
            <div className='m-auto'>
                <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                    <p className='flex items-center mb-6 text-2xl font-semibold text-foreground'>
                        <Image
                            width='32'
                            height='32'
                            className='w-8 h-8 mr-2'
                            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
                            alt='logo'
                        />
                        Flowbite
                    </p>
                    <div className='w-full bg-foreground/5 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 '>
                        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                            <h1 className='text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl '>
                                Create your account
                            </h1>
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
