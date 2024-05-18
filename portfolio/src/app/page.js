import Image from "next/image";
import Main from "../components/Main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#192655]">
      <div class='container mx-auto px-12 py-4'>
        <Main/>
      </div>
    </main>
  );
}
