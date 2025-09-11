import { Title } from "../component/Title"
export default function ForkRepo() {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8 mt-10">
            <Title size="5xl">Fork this repo before we start learning :D</Title>
            <a href="https://github.com/fioreenza/BMS-IT-2025" target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-blue-600 text-5xl underline">
                https://github.com/fioreenza/BMS-IT-2025
            </a>
        </div>
    )
}
