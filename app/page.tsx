import { Main, Sidebar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
	<main className="bg-gray-100 pb-[50px]" >
		<Sidebar />
		<Main />
	</main>
  );
}
