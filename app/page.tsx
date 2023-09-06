import Navigation from "@/components/Navigation";
import { Card } from "@/components/card";
import Image from "next/image";
import nextImg from "@/public/img.jpg";

export default function Home() {
    return (
        <>
            <Navigation />
            <p>Home Page</p>
            <Card
                id={`2`}
                imgLink={nextImg}
                title={"Lorem Impum"}
                disc='lorem ipsun 1'
                price={100}
            />
        </>
    );
}
