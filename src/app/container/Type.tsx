import Image from "next/image";

export default function Type() {
  return (
  <div className="h-full flex flex-col justify-center items-center text-justify">
    <Image
      src="/type.jpeg"
      alt="type"
      width={600}
      height={600}
      className="rounded-lg shadow-lg"
    />
  </div>
  );
}
