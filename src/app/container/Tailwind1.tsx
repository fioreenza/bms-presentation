import { Body } from "../component/Body"
import { Title } from "../component/Title"

export default function Tailwind1() {
  const cssCode = `
    <style>
      .card {
        padding: 1.5rem;
        background-color: blue;
        border-radius: 0.5rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        color: white;
        font-family: sans-serif;
      }
    </style>
    <div class="card">Hello, World!</div>
  `;

  const tailwindCode = `
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <div class="p-6 bg-blue-400 rounded-lg shadow-md text-white font-sans">
      Hello, World!
    </div>
  `;

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8 mt-10">
      <Title size="5xl">Utility first approach</Title>
      <div className="flex gap-10">
        {/* --- Bagian CSS tradisional --- */}
        <div className="flex flex-col space-y-4">
          <Body size="xl">Instead of this</Body>
          <pre className="bg-gray-900 text-green-200 p-4 rounded-xl text-md overflow-x-auto">
            <code>{`<style>
  .card {
    padding: 1.5rem;
    background-color: blue;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
</style>
<body>
  <div class="card">
    Hello, World!
  </div>
</body>`}</code>
          </pre>

          {/* preview hasil CSS tradisional */}
          <iframe
            srcDoc={cssCode}
            sandbox=""
          />
        </div>

        {/* --- Bagian Tailwind --- */}
        <div className="flex flex-col space-y-4">
          <Body size="xl">We can do this</Body>
          <pre className="bg-gray-900 text-green-200 p-4 rounded-xl text-lg overflow-x-auto">
            <code>{`<div class="p-6 bg-blue-600 rounded-lg shadow-md">
  Hello, World!
</div>`}</code>
          </pre>

          {/* preview hasil Tailwind */}
          <iframe
            srcDoc={tailwindCode}
            sandbox=""
          />
        </div>
      </div>
    </div>
  )
}
