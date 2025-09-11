import { Title } from "../component/Title"
import Image from "next/image"

export default function LearnTailwind() {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8 mt-10">
            <Title size="5xl">Let's learn tailwind :D</Title>
            <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-blue-600 text-5xl underline">
                https://tailwindcss.com/docs
            </a>
            <div className="grid grid-cols-3 gap-4">
                <Image src="/flextailwind.png" alt="Tailwind CSS Logo" width={300} height={150} className="w-full h-full"/>
                <Image src="/fontsizetailwind.png" alt="Tailwind CSS Example" width={300} height={150} className="w-full h-full" />
                <Image src="/paddingtailwind.png" alt="Tailwind CSS Config" width={300} height={150} className="w-full h-full"/>
            </div>
        </div>
    )
}