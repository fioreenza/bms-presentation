import { Body } from "../component/Body"
import { Title } from "../component/Title"

export default function Tailwind3() {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8 mt-10">
            <Title size="5xl">Easier Responsive Design</Title>
            <div className="w-5xl flex gap-10">
                
                {/* Versi CSS manual */}
                <div className="flex flex-col w-1/2 max-h-[480px]">
                    <Body size="xl">
                        Instead of this 
                    </Body>
                    <pre className="bg-gray-900 text-green-200 p-4 rounded-xl text-md overflow-x-auto">
                        <code>{`<style>
.box {
  font-size: 16px;
}
@media (min-width: 768px) {
  .box {
    font-size: 20px;
  }
}
@media (min-width: 1024px) {
  .box {
    font-size: 24px;
  }
}
</style>

<div class="box">Hello World</div>`}</code>
                    </pre>
                </div>

                {/* Versi Tailwind */}
                <div className="flex flex-col w-1/2">
                    <Body size="xl">
                        We can do this
                    </Body>
                    <pre className="bg-gray-900 text-green-200 p-4 rounded-xl text-md overflow-x-auto">
                        <code>{`<div class="text-base md:text-lg lg:text-xl">
  Hello World
</div>`}</code>
                    </pre>
                </div>
            </div>
        </div>
    )
}
