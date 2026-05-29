import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  photo?: string;
};

const team: TeamMember[] = [
  {
    name: "Reibin Amin",
    role: "VD & grundare",
    photo: "/images/team/reibin-amin.png",
  },
  {
    name: "Bernard Liang",
    role: "Teknisk Chef",
    photo: "/images/team/bernard-liang.png",
  },
  { name: "Emil Er", role: "Fullstack utvecklare" },
  {
    name: "Aaron Håkansson",
    role: "Sälj & kundansvarig",
    photo: "/images/team/aaron-hakansson.png",
  },
];

function MemberAvatar({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return (
      <div className="relative h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
    );
  }

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div
      className="flex h-24 w-24 items-center justify-center rounded-full bg-grannsam-green-muted text-xl font-semibold text-grannsam-green sm:h-28 sm:w-28 sm:text-2xl"
      aria-hidden
    >
      {initials}
    </div>
  );
}

export function AboutSection() {
  return (
    <>
      <section className="border-b border-grannsam-border/30 bg-[#f5f1e1]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Om oss
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Grannsam grundades med visionen att stärka grannskapet i
            bostadsrättsföreningar. Vi kombinerar enkel kommunikation, trygg
            ärendehantering och verifierade grannar — så att styrelser kan fokusera
            på det som betyder mest och grannar känner sig hemma i sin förening.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
          <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
            Vårt team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-foreground/85">
            Ett litet team med stor passion för grannskap, teknik och
            bostadsrättsföreningar.
          </p>

          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {team.map((member) => (
              <li
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <MemberAvatar name={member.name} photo={member.photo} />
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-base text-grannsam-green">
                  {member.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
