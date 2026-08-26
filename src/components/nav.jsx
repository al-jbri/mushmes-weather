import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex items-center justify-between text-sm sticky top-0 bg-white dark:bg-stone-900 dark:text-stone-50">
      <Link href="/" className="font-bold text-lg tracking-tight">
        ⛅ Mushmes
      </Link>

      <div className="flex items-center gap-3">
        <button className="px-2 py-1 rounded-xl hover:bg-amber-200 hover:text-stone-950 text-xs font-semibold">
          العربية
        </button>

        <button className="p-1 rounded-xl hover:bg-amber-200 ">🌙</button>
      </div>
    </nav>
  );
}
