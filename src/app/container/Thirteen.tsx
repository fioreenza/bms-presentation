import { Title } from "../component/Title";

export default function Thirteen() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="3xl">Cara Menulis CSS</Title>

      <ul className="list-disc space-y-4 text-xl text-gray-700">
        <li>
          <b>Inline CSS</b> → langsung di atribut elemen  
          <pre className="bg-gray-900 text-green-200 p-3 rounded-lg text-lg mt-2 overflow-x-auto">
            <code>{`<p style="color: red;">Teks merah</p>`}</code>
          </pre>
        </li>

        <li>
          <b>Internal CSS</b> → dalam tag <code>{`<style>`}</code> di file HTML  
          <pre className="bg-gray-900 text-green-200 p-3 rounded-lg text-lg mt-2 overflow-x-auto">
            <code>{`<style>
  p { color: blue; }
</style>`}</code>
          </pre>
        </li>

        <li>
          <b>External CSS</b> → file terpisah <code>.css</code>  
          <pre className="bg-gray-900 text-green-200 p-3 rounded-lg text-lg mt-2 overflow-x-auto">
            <code>{`<head>
    <title>Contoh External CSS</title>
    <link rel="stylesheet" href="style.css" />
</head>`}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
}
