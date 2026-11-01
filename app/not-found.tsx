import Link from "next/link";

export default function NotFound() {
  return (
    <main className=" flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className=" text-4xl text-red-400 font-medium tracking-widest text-neutral-500">
        Помилка 404
      </p>
      <h1 className="mt-4 text-4xl font-bold text-neutral-900">
        Сторінку не знайдено
      </h1>
      <p className="mt-4 text-neutral-600">
        Можливо сторінку перемістили або такої адреси не існує.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-48 mx-auto bg-black px-6 py-3 items-center justify-center text-sm font-medium text-white transition-colors hover:bg-neutral-800 rounded-md"
      >
        На головну
      </Link>
    </main>
  );
}
