import { Title } from "../component/Title";
import Image from "next/image";

export default function Meme2() {
  return (
  <div className="h-full flex flex-col justify-center items-center text-justify">
    <Image
      src="/meme.gif"
      alt="Meme2"
      width={800}
      height={800}
      className="rounded-lg shadow-lg"
    />
  </div>
  );
}
