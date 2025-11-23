import { useState } from "react";
import { checkHealth } from "../api"; 

export default function Home() {
  const [status, setStatus] = useState<string>("");

  const handleCheck = async () => {
    setStatus("Checking backend...");
    try {
      const result = await checkHealth();
      setStatus(`Backend says: ${result.message}`);
    } catch (err) {
      setStatus("❌ Cannot reach backend");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <section className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full space-y-4">
        <header>
          <h1 className="text-3xl font-bold text-emerald-700">
            GardenCircle
          </h1>
          <p className="mt-2 text-slate-600">
            A cozy place to grow, share, and swap plants 🌱
          </p>
        </header>

        <div className="border-t border-slate-100 pt-4 space-y-2">
          <p className="text-sm text-slate-500">
            This is your{" "}
            <span className="font-semibold">frontend skeleton</span>.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Vite + React + TypeScript</li>
            <li>TailwindCSS wired in</li>
            <li>Ready to talk to your Node.js API</li>
          </ul>
        </div>

        <footer className="pt-2">
          <button
            onClick={handleCheck}
            className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition"
          >
            Check backend health
          </button>

          {status && (
            <p className="mt-4 text-sm text-slate-700">{status}</p>
          )}
        </footer>
      </section>
    </main>
  );
}
