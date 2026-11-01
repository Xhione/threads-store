import Link from "next/link";

const navigation = [
  { label: "Головна", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "Новинки", href: "/new" },
  { label: "Розпродаж", href: "/sale" },
  { label: "Про нас", href: "/about" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-20 items-center justify-between px-2 max-w-7xl">
        <Link
          href="/"
          className="text-2xl font-black  tracking-[0.2em] text-neutral-900 hover:text-neutral-400"
        >
          THREADS
        </Link>
        <nav className=" text-lg flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-700 hover:text-neutral-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
