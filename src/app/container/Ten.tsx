import { Title } from "../component/Title";

export default function Nine() {
  const code = `<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
<h3>Sub Sub Judul</h3>
<h4>Sub Sub Sub Judul</h4>
<h5>Sub Sub Sub Sub Judul</h5>
<h6>Sub Sub Sub Sub Sub Judul</h6>
<p>Ini paragraf pertama saya.</p>
<a href="https://example.com">Kunjungi Website</a>
<img src="https://placehold.co/60x60" alt="Contoh" width="300"/>
<div> Ini adalah sebuah div. </div>
<span> Ini adalah sebuah span. </span>
`;

  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="3xl">Tag Dasar HTML</Title>

      <div className="flex gap-6 w-full h-full">
        {/* KODE */}
        <pre className="bg-gray-900 text-green-200 p-6 w-full rounded-xl text-lg">
          <code>{code}</code>
        </pre>

        {/* HASIL */}
        <iframe
          srcDoc={code}
          className="w-full h-full border rounded-xl bg-white"
          sandbox=""
        />
      </div>
    </div>
  );
}
