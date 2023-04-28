import { Roboto } from "next/font/google";
import { Button } from "./components/library-components";
import NavBar from "./components/navbar";

const inter = Roboto({
    weight: ["100", "300", "400", "500"],
    subsets: ["latin"],
    fallback: ["sans-serif"],
});

export default function Home() {
    return (
        <main>
            <NavBar />
            <Button>Hi</Button>
        </main>
    );
}
