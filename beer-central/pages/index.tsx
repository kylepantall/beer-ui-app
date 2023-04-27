import { Playfair_Display } from "next/font/google";
import NavBar from "@/components/navbar";

const inter = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <NavBar/>
  );
}
  