import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <span className="text-9xl font-bold">Hello World!</span> <br />
        <span className="text-2xl flex flex-row items-center gap-4">
          <Image src="/team37-logo.svg" alt="Team 37 white logo" height={128} width={128} />
          will be launching soon.
        </span> <br />
        <span className="text-gray-400">Stay tuned :&#41;</span> <br />
      </div>
    </main>
  )
}
