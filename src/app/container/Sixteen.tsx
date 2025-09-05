import { Title } from "../component/Title";

export default function Sixteen() {
  const code = `<head>
  <style>
    .h2 {
      text-align: center;
    }
    .container1 {
      display: flex;
      background: blue;
    }
    p {
      border: 1px solid black;
      text-align: center;
      width: 50px;
      padding: 4px;
      background: white;
    }
    .container2 {
      display: flex;
      background: red;
      justify-content: center;
      gap: 4px;
    }
    .container3 {
      display: flex;
      background: purple;
      height: 80px;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
    .halfdiv {
      display: flex;
      height: 100px;
    }
    .yellow {
      background: yellow;
      width: 100%;
    }
    .green {
      background: green;
      width: 100%;
}

  </style>
</head>
<body>
  <h2>Flexbox Layout</h2>
  <div class="container1">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
  </div>
  <div class="container2">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
  </div>
  <div class="container3">
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
  </div>
  <div class="halfdiv">
    <div class="yellow"></div>
    <div class="green"></div>
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
