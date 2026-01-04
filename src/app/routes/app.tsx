import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-4">
      <h1 className="mb-4 text-4xl font-bold text-white">React Template</h1>
      <p className="mb-8 text-center text-neutral-400">
        Production-ready React starter with TypeScript, Tailwind, and modern
        tooling
      </p>
      <Button asChild>
        <Link to="/stack">Tech Stack</Link>
      </Button>
    </div>
  );
}
