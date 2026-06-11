import Link from "next/link";

export type HeroSocialNetworkProps = {
  link: string;
  icon: React.ReactNode;
};

export default function HeroSocialNetworkComponent({
  link,
  icon,
}: HeroSocialNetworkProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="border p-2 rounded-full bg-primary/10 text-orange-600 dark:text-orange-400 inline-flex items-center justify-center"
    >
      {icon}
    </Link>
  );
}
