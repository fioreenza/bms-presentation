import { Body } from "../component/Body";
import { Title } from "../component/Title";

export default function HTML() {
  return (
  <div className="h-full flex flex-col justify-center items-center max-w-[630px] text-justify space-y-8">
    <Title size="4xl">
        HTML
    </Title>
    <Body size="2xl">
      HTML (HyperText Markup Language) adalah bahasa markup untuk menyusun struktur dasar halaman web, seperti teks, gambar, link, dan tabel. HTML bukan bahasa pemrograman, tapi fondasi dari semua website.
    </Body>
  </div>
  );
}
