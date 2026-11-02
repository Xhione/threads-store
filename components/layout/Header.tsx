import Link from "next/link";
import { UserRound, ShoppingCart } from "lucide-react";
const navigation = [
  { label: "Головна", href: "/" },
  { label: "Каталог", href: "/catalog" },
  { label: "Новинки", href: "/new" },
  { label: "Розпродаж", href: "/sale" },
  { label: "Про нас", href: "/about" },
];

const userActions = [
  { label: "Профіль", href: "/profile", icon: UserRound },
  { label: "Кошик", href: "/cart", icon: ShoppingCart },
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
        <div className="flex gap-8">
          {userActions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.href}
                href={action.href}
                aria-label={action.label}
                title={action.label}
                className="flex border rounded-full h-10 w-10  items-center justify-center hover:bg-neutral-200"
              >
                <Icon size={26} strokeWidth={1.6} />
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
