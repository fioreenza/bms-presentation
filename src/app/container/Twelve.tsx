import { Title } from "../component/Title";

export default function Twelve() {
const code = `<h2>Data Mahasiswa</h2>
<table border="1" cellpadding="5">
  <tr>
    <th>Nama</th>
    <th>Umur</th>
  </tr>
  <tr>
    <td>Ani</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Budi</td>
    <td>22</td>
  </tr>
</table>
`;

  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="3xl">Table HTML</Title>

      <div className="flex gap-6 w-full h-fit">
        {/* KODE */}
        <pre className="bg-gray-900 text-green-200 p-6 w-full rounded-xl text-[15px]">
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
