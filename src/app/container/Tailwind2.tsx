import { Body } from "../component/Body"
import { Title } from "../component/Title"

export default function Tailwind2() {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-10">
            <Title size="5xl">Easy to costumize</Title>
                    <div className="flex flex-col space-y-6">
                        <Body size="2xl">
                            Costumize menggunakan @theme di file CSS 
                        </Body>
                        <pre className="bg-gray-900 text-green-200 p-4 rounded-xl text-lg overflow-x-auto">
                            <code>{`@theme {
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  --color-avocado-400: oklch(0.92 0.19 114.08);
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --color-avocado-600: oklch(0.53 0.12 118.34);
  /* ... */
}`}</code>
                        </pre>
                    </div>
        </div>
    )
}