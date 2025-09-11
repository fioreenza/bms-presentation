import { Body } from "../component/Body";
import { Title } from "../component/Title";
import Image from "next/image";

export default function Eight() {
  return (
  <div className="h-full flex flex-col justify-center items-center max-w-[630px] text-justify space-y-6">
    <Title size="4xl">
        Frontend vs Backend
    </Title> 
    <div>
      <Image
            src="/frontend-backend.gif"
            alt="FEBE"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
    </div>
  </div>
  );
}
