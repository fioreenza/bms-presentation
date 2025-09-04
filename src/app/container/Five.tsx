import { Title } from "../component/Title";
import Image from "next/image";

export default function Five() {
  return (
  <div className="h-full flex flex-col justify-center items-center text-justify">
    <Image
      src="/tokopedia.png"
      alt="Tokopedia Website"
      width={700}
      height={500}
      className="mb-8 rounded-lg shadow-lg"
    />
    <Title size="3xl">
      Ex: Website Sekarang (2025)
    </Title>
  </div>
  );
}
