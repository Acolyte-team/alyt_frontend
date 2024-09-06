// import Landing from "@/components/landing";
import Image from "next/image";
// import Header from "@/components/header";
import dynamic from "next/dynamic";

const Landing = dynamic(() => import ("../components/landing"), {
  ssr: false,
})

const Header = dynamic(() => import("../components/header"),  {
  ssr: false
})

export default function Home() {
  return (
  <div className="w-full">
      <Header />

      <div
        className="p-4 w-full flex flex-row justify-center"
      >
        <Landing/>
      </div>
    </div>
  );
}

