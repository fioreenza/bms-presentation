import { Title } from "../component/Title";
import Image from "next/image";

export default function Seven() {
  return (
  <div className="h-full flex flex-col justify-center items-center text-justify space-y-8">
    <Title size="4xl">
      Cara Kerja Website
    </Title>
    <Image
      src="/cara-kerja.jpg"
      alt="Cara Kerja Website"
      width={800}
      height={600}
      className="rounded-lg shadow-lg"
    />
  </div>
  );
}
