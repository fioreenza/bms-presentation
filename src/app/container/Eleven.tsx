import { Title } from "../component/Title";

export default function Eleven() {
  const code = `<h2>Form Login</h2>
<form>
    <label>Username:</label><br />
    <input type="text" placeholder="Masukkan username" /><br /><br />
    <label>Password:</label><br />
    <input type="password" placeholder="Masukkan password" /><br /><br />
    <button type="submit">Login</button>
</form>`;

  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="3xl">Form HTML</Title>

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
