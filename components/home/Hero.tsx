import Image from "next/image";
import { Truck, RefreshCw, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

const mainFeatures = [
  { label: "Швидка доставка", icon: Truck },
  { label: "Легке повернення", icon: RefreshCw },
  { label: "Гарантія якості", icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[3/4] max-w-md overflow-hidden rounded-3xl">
          <Image
            src="/images/hero-fashion.png"
            alt="Колекція Threads"
            fill
            priority
            sizes="(max-width:740px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="border-b border-neutral-200 pb-3 text-sm font-semibold tracking-[0.2em] text-neutral-500">
            ОДЯГ · ВЗУТТЯ · АКСЕСУАРИ
          </p>
          <h1 className="text-5xl font-extrabold mt-10 mb-10 ">
            Стиль, який
            <br />
            <span className="text-neutral-500">підкреслює тебе</span>
          </h1>
          <p className="text-xl text-neutral-500">
            Брендовий одяг для тих, хто цінує комфорт, якість і власну
            індивідуальність
          </p>
          <div className="flex mt-8 flex-wrap gap-4">
            <Button>Перейти до каталогу →</Button>
            <Button variant="secondary">Новинки</Button>
          </div>
          <div className=" flex mt-17">
            {mainFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 mr-8"
                >
                  <Button
                    disabled={true}
                    variant="secondary"
                    className="flex items-center justify-center"
                  >
                    <Icon size={35} strokeWidth={1.6} />
                    <span className="text-md text-neutral-600">
                      {feature.label}
                    </span>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
