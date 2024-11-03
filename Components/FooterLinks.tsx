import Link from 'next/link';

type FooterLinkProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

export default function FooterLink({ href, icon, text }: FooterLinkProps) {
  return (
    <Link href={href} className="flex items-center space-x-1 text-pink-600 hover:text-pink-700 transition duration-150 ease-in-out p-2">
      {icon}
      <span>{text}</span>
    </Link>
  );
}
