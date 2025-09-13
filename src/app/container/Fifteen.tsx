import { Title } from "../component/Title";

export default function Fifteen() {
  const code = `  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #DFDFEE;
      }
      h1 {
        color: darkblue;
        text-align: center;
      }
      p {
        color: #333;
        font-size: 16px;
      }
      .highlight {
        font-weight: bold;
        background-color: aquamarine;
        border: 2px solid black;
        padding: 5px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <h1>Hello CSS!</h1>
    <p>Ini paragraf dengan <span class="highlight">highlight</span>.</p>
  </body>`;

  return (
    <div className="h-full flex flex-col justify-center items-center px-10 space-y-6">
      <Title size="3xl">Styling CSS</Title>

      <div className="flex gap-6 w-full  pb-20">
        {/* KODE */}
        <pre className="bg-gray-900 text-green-200 p-6 w-full rounded-xl text-sm overflow-y-scroll">
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
