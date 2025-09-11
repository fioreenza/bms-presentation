/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import Image from "next/image";
import { Body } from "../component/Body";
import { Title } from "../component/Title";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Porto() {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8 mt-10">
            {/* Bagian utama: foto + info */}
            <div className="flex justify-center items-center text-start space-x-20 w-full max-w-5xl">
                {/* Foto */}
                <div className="w-72 h-72 relative">
                    <Image
                        src="/profile.jpg"
                        alt="Foto Porto"
                        fill
                        className="rounded-full object-cover"
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex flex-col items-start">
                        <Title size="4xl">Fiorenza Adelia Nalle</Title>
                        <Title size="2xl">Teknologi Informasi 2023</Title>
                    </div>

                    <Body size="lg" center={false}>
                            Experiences: <br />
                            ⦁ IT Dev ARA 5.0 - ARA 6.0 - ARA 7.0 :D <br />
                            ⦁ IT Dev Frontend SRE 2024/2025 - 2025/2026 <br />
                            ⦁ IT Dev BEM ITS <br />
                            ⦁ IT Dev Frontend Futurest <br />
                            ⦁ IT Dev Frontend Petrolida <br />
                            ⦁ IT Dev Frontend ILITS
                    </Body>
                </div>
            </div>

            {/* Bagian social links */}
            <div className="flex items-center justify-center gap-6 h-20 w-full">
                <a
                    href="https://instagram.com/blurrybassist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex px-4 py-2 text-lg justify-center items-center gap-3 text-white bg-blue-900 rounded-3xl hover:bg-blue-800 transition"
                >
                    <Instagram size={24} />
                    @blurrybassist
                </a>

                <a
                    href="https://linkedin.com/in/fiorenzanalle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex px-4 py-2 text-lg justify-center items-center gap-3 text-white bg-blue-900 rounded-3xl hover:bg-blue-800 transition"
                >
                    <Linkedin size={24} />
                    linkedin.com/in/fiorenzanalle
                </a>

                <a
                    href="https://github.com/fioreenza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex px-4 py-2 text-lg justify-center items-center gap-3 text-white bg-blue-900 rounded-3xl hover:bg-blue-800 transition"
                >
                    <Github size={24} />
                    @fioreenza
                </a>
            </div>
        </div>
    );
}
