import { Title } from "../component/Title";

export default function Fourteen() {
  const code = `<style>
  /* Selector by tag */
  p {
    color: blue;
  }

  /* Selector by class */
  .merah {
    color: red;
  }

  /* Selector by ID */
  #tebal {
    font-weight: bold;
  }
</style>

<p>Ini paragraf biru.</p>
<p class="merah">Ini paragraf merah.</p>
<p id="tebal">Ini paragraf tebal.</p>`;

  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="3xl">Selector CSS</Title>

      <div className="grid grid-cols-2 gap-6 w-full">
        {/* KODE */}
        <pre className="bg-gray-900 text-green-200 p-4 rounded-xl text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>

        {/* HASIL */}
        <iframe
          srcDoc={code}
          className="w-full min-h-[250px] border rounded-xl bg-white"
          sandbox=""
        />
      </div>
    </div>
  );
}
