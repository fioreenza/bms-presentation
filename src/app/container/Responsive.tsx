import { Title } from "../component/Title";

export default function Responsive() {
  const code = `
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .box {
      background: purple;
      height: 100px;
    }

    @media (max-width: 768px) {
        .container {
            grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .container {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  </style>

  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
    <div class="box">Box 4</div>
  </div>
  `;

  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="3xl">Responsive Design</Title>

      <div className="flex gap-6 w-full h-[500px] pb-20">
        {/* Kode */}
        <pre className="bg-gray-900 text-green-200 p-6 w-full rounded-xl text-sm overflow-y-scroll">
          <code>{code}</code>
        </pre>

        {/* Hasil */}
        <iframe
          srcDoc={code}
          className="w-full h-full border rounded-xl bg-white"
          sandbox=""
        />
      </div>
    </div>
  );
}
