import { Title } from "../component/Title";
import Image from "next/image";

export default function Four() {
  return (
  <div className="h-full flex flex-col justify-center items-center text-justify">
    <Image
      src="/first-website.png"
      alt="First Website"
      width={700}
      height={500}
      className="mb-8 rounded-lg shadow-lg"
    />
    <Title size="3xl">
      Ex: Website Pertama di Dunia (1991)
    </Title>
  </div>
  );
}
