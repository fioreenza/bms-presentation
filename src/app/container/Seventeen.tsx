import { Title } from "../component/Title";
import { Body } from "../component/Body";

export default function Seventeen() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="6xl">Thank you ^_^</Title>
      <Body size="3xl">Semoga materi yang disampaikan bermanfaat yaaaa</Body>
      <div className="absolute bottom-20">
      <Body size="lg">Mari berkawan hehe @blurrybassist</Body>
      </div>
    </div>
  );
}
