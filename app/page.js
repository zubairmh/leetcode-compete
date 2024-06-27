import Image from "next/image";
import Cookies from "@/components/cookies";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Cookies/>
    </main>
  );
}
