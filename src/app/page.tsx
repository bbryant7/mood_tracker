import Image from "next/image";
import Week from './components/mood_week'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>
      <div>
        { [...Array(52)].map(() => (
            <Week />
        ))}
      </div>
    </main>
  );
}
