import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen md:p-24">
      <div className="flex flex-col items-center justify-center">
        <span className="text-6xl font-bold md:text-9xl">Hello World!</span> <br />
        <span className="flex flex-row items-center gap-2 text-xl md:gap-4 md:text-2xl">
          <Image src="/team37-logo.svg" alt="Team 37 white logo" height={128} width={128} />
          will be launching soon.
        </span> <br />
        <span className="text-gray-400">Stay tuned :&#41;</span> <br />
      </div>
    </main>
  )
}
