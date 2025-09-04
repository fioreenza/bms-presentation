import { Title } from "../component/Title";

export default function Fourteen() {
  const code = `<head>
  <style>
    .h2 {
      text-align: center;
    }
    .container {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    .box {
      width: 100px;
      height: 80px;
      background: lightgreen;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <h2>Flexbox Layout</h2>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>`;

  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="3xl">Layouting CSS</Title>

      <div className="grid grid-cols-2 gap-6 w-full h-[400px]">
        {/* KODE */}
        <pre className="bg-gray-900 text-green-200 w-full p-4 rounded-xl text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>

        {/* HASIL */}
       <iframe
          srcDoc={code}
          className="w-fit h-full border rounded-xl bg-white"
          sandbox=""
        />
      </div>
    </div>
  );
}
