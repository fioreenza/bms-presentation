import { Title } from "../component/Title";

export default function Six() {
  return (
    <div className="h-full flex flex-col justify-center items-center px-8">
      <Title size="4xl" center>
        Perbedaan Web Statis dan Dinamis
      </Title>

      <div className="mt-8 w-full max-w-4xl overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full border border-gray-300 divide-y text-left">
          <thead className="bg-blue-100 font-sans">
            <tr>
              <th className="px-6 py-3 font-semibold text-gray-700">Web Statis</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Web Dinamis</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700 font-sans divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Minim interaksi</td>
              <td className="px-6 py-4">Interaktif</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Tidak punya database</td>
              <td className="px-6 py-4">Punya database</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Relatif sulit menambah konten baru</td>
              <td className="px-6 py-4">Mudah menambah konten baru</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Website yang jarang diperbarui (company profile)</td>
              <td className="px-6 py-4">Website yang sering diperbarui (e-commerce)</td>
            </tr>
            <tr>
              <td className="px-6 py-4">HTML, CSS, JS</td>
              <td className="px-6 py-4">HTML, CSS, JS, MySQL, PHP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
