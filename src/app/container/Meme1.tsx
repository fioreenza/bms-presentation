import { Title } from "../component/Title";
import Image from "next/image";

export default function Meme() {
  return (
  <div className="h-full flex flex-col justify-center items-center text-justify">
    <Image
      src="/meme1.jpg"
      alt="Meme1"
      width={500}
      height={500}
      className="rounded-lg shadow-lg"
    />
  </div>
  );
}
