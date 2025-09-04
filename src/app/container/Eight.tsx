import { Body } from "../component/Body";
import { Title } from "../component/Title";
import Image from "next/image";

export default function Eight() {
  return (
  <div className="h-full flex flex-col justify-center items-center max-w-[630px] text-justify space-y-6">
    <Title size="4xl">
        Kita akan belajar
    </Title> 
    <div className="grid grid-cols-2 gap-20 mt-4">
    <div>
    <Image
        src="/html.jpg"
        alt="HTML Logo"
        width={200}
        height={200}
        className="mb-4"
    />
    <Body size="2xl">
      HTML
    </Body>
    </div>
    <div>
    <Image
        src="/css.jpg"
        alt="CSS Logo"
        width={200}
        height={200}
        className="mb-4"
    />
    <Body size="2xl">
      CSS
    </Body>
    </div>
    </div>
  </div>
  );
}
