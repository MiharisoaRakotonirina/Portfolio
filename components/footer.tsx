import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-muted/50 border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground">
            © 2025 John Doe. Built with React, Next.js, ShadCN UI and Tailwind
            CSS.
          </p>
          <Link
            className="text-muted-foreground text-sm pt-4"
            href={"https://whois-radiantwizard.vercel.app/"}
          >
            Inspired by Radiant-Wizard , thanks to him 🙏
          </Link>
        </div>
      </div>
    </div>
  );
}
