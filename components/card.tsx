import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface Prop {
    id: string,
    imgLink: StaticImageData,
    title: string,
    disc: string,
    price: number
}

export function Card({ id, imgLink, title, disc, price }: Prop) {
    return (
        <>
            <div className='sm:max-w-xs max-w-[16rem] bg-background/0 border border-foreground/10 rounded-sm '>
                <Link href={id}>
                    <Image className='rounded-t-sm' src={imgLink} alt='Image' property="true" />
                    <div className='p-5'>
                        <h5 className='mb-2 text-base font-bold tracking-tight text-foreground/90 '>
                            {title}
                        </h5>

                        <p className='mb-3 font-medium text-foreground/75 text-xs '>
                            {disc}
                        </p>
                        <h1 className='text-sm font-bold'>
                            <span>Rs. </span>
                            {price}
                        </h1>
                    </div>
                </Link>
            </div>
        </>
    );
}
