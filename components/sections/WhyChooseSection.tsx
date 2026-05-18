import {
  MdMarkChatUnread,
  MdPhoneAndroid,
  MdVerifiedUser,
} from "react-icons/md";
import type { IconType } from "react-icons";

type Feature = {
  Icon: IconType;
  iconClassName: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    Icon: MdMarkChatUnread,
    iconClassName: "text-[#fe2121]",
    title: "Information som når fram",
    description:
      "Med notiser och fästa inlägg kan du vara säker på att dina grannar får viktig info på sin mobiltelefon, enkelt och direkt!",
  },
  {
    Icon: MdPhoneAndroid,
    iconClassName: "text-[#1e88e5]",
    title: "Smidig ärendehantering",
    description:
      "Boende rapporterar ärenden direkt i appen. Styrelsen kan enkelt tilldela ansvar, anta uppgifter, chatta med boende och vid behov skicka ärendet vidare till rätt aktör.",
  },
  {
    Icon: MdVerifiedUser,
    iconClassName: "text-grannsam-green",
    title: "Tryggare än sociala medier",
    description:
      "Slipp algoritmer och annonser. Grannsam är ett slutet och lokalt system där du pratar med dina riktiga grannar som är verifierade med BankID.",
  },
];

function FeatureCard({ Icon, iconClassName, title, description }: Feature) {
  return (
    <article className="relative flex flex-col rounded-2xl bg-white px-6 pb-8 pt-14 shadow-[0_8px_30px_rgba(38,43,46,0.08)] sm:px-7 sm:pb-9 sm:pt-16">
      <div
        className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(38,43,46,0.1)] sm:-top-9 sm:h-[4.5rem] sm:w-[4.5rem]"
        aria-hidden
      >
        <Icon className={`h-10 w-10 sm:h-11 sm:w-11 ${iconClassName}`} />
      </div>

      <h3 className="text-center text-lg font-bold leading-snug text-foreground sm:text-xl">
        {title}
      </h3>
      <p className="mt-4 text-center text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]">
        {description}
      </p>
    </article>
  );
}

export function WhyChooseSection() {
  return (
    <section
      id="appen"
      className="scroll-mt-20 border-b border-grannsam-border/30 bg-[#f5f1e1]"
      aria-labelledby="appen-heading"
    >
      <div className="mx-auto max-w-7xl px-6 pt-14 md:px-10 md:pt-20">
        <h2
          id="appen-heading"
          className="text-center text-2xl font-semibold text-foreground sm:text-3xl"
        >
          Därför väljer bostadsrättsföreningar oss
        </h2>

        <div className="mt-12 grid gap-8 sm:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <hr className="mt-14 border-0 border-t-2 border-grannsam-green sm:mt-16 md:mt-20" />
      </div>
    </section>
  );
}
