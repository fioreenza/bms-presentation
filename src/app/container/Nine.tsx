import { Title } from "../component/Title";

export default function Eight() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-justify space-y-6 px-10">
      <Title size="3xl">Struktur Dasar HTML</Title>
          <pre className="bg-gray-900 text-green-200 p-3 rounded-xl text-lg mt-2 overflow-x-auto">
            <code>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`}</code>
          </pre>
    </div>
  );
}
