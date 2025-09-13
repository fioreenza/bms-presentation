import { Body } from "../component/Body";
import { Title } from "../component/Title";
import Image from "next/image";

export default function Eight() {
  return (
  <div className="h-full flex flex-col justify-center items-center max-w-[630px] text-justify space-y-6">
    <Title size="4xl">
        Frontend vs Backend
    </Title> 
      <div className="w-5xl h-4xl grid gap-10 grid-cols-2 justify-center items-center">
  <div className="bg-white/20 h-full justify-center items-center flex p-6 rounded-xl shadow-lg text-center">
    <Body size="2xl">
      Frontend adalah bagian dari website yang dilihat dan digunakan langsung oleh pengguna. Frontend bertanggung jawab untuk menampilkan konten, mengatur layout, warna, dan tipografi, serta menangani interaksi.
    </Body>
  </div>
  <div className="bg-white/20 h-full justify-center items-center flex p-6 rounded-xl shadow-lg text-center">
    <Body size="2xl">
      Backend adalah bagian dari website yang tidak terlihat oleh pengguna. Backend bertugas menyimpan, mengambil, dan memproses data, menangani autentikasi, serta menghubungkan frontend dengan database.
    </Body>
  </div>
</div>

    </div>
  );
}
