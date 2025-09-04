import { Title } from "../component/Title";
import { Body } from "../component/Body";

export default function One() {
  return (
  <div className="h-full flex flex-col justify-center items-center text-center relative">
    <Title size="8xl">
      Pengenalan <br/> Website
    </Title>
    <div className="absolute -bottom-10">
    <Body size="xl">
      IT Junior Preps 
    </Body>
    </div>
  </div>
  );
}
