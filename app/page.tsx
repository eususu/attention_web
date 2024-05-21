import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        A
      </div>
      <div className="grow w-full flex flex-row items-center justify-between bg-slate-100">
        <div className="grow bg-slate-300">
        B list
        </div>
        <div className="grow bg-slate-400">
          detail info
        </div>
      </div>
      <div>
        C
      </div>
    </main>
  );
}
