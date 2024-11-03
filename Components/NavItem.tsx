import Link from 'next/link';

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

export default function NavItem({ href, icon, text }: NavItemProps) {
  return (
    <Link href={href} className="flex items-center space-x-1 text-white hover:text-pink-100 transition duration-150 ease-in-out">
      {icon}
      <span>{text}</span>
    </Link>
  );
}