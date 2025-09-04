import { Body } from "../component/Body";
import { Title } from "../component/Title";

export default function CSS() {
  return (
  <div className="h-full flex flex-col justify-center items-center max-w-[630px] text-justify space-y-8">
    <Title size="4xl">
        CSS
    </Title>
    <Body size="2xl">
      CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk memberi gaya (warna, ukuran, posisi) pada elemen HTML, sehingga tampilan website lebih menarik.
    </Body>
  </div>
  );
}
