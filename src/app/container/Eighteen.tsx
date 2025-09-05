import { Title } from "../component/Title";

export default function Eighteen() {
  const code = `<head>
  <style>
    .box {
      background: lightblue;
      width: 150px;
      height: 150px;
    }

    .padding {
      width: 100px;
      height: 100px;
      background: orange;
      padding: 10px;
    }

    .margin {
      width: 100px;
      height: 100px;
      margin: 10px;
      background: pink;
    }
  </style>
</head>
<body>
  <h2>Padding vs Margin</h2>

  <div class="box">
    <div class="padding">Padding 10px</div>
  </div>

  <div class="box">
    <div class="margin">Margin 10px</div>
  </div>
</body>`;

  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="3xl">Padding vs Margin</Title>

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
