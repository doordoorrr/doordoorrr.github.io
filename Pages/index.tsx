import { useState } from 'react'
import { Heart, Star, Code, Github, Mail, FileText, Home, Briefcase, Sparkles, Maximize2, Minimize2, X, Menu } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-pink-100">
      {/* Sprinkle Header */}
      <div className="h-8 bg-pink-200 relative overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: Math.random() > 0.5 ? '#FFC0CB' : '#ADD8E6',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
<nav className="bg-pink-300 p-4 relative">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold text-white">Cutesy CS Portfolio</div>
    <div className="hidden md:flex items-center justify-end space-x-4 flex-grow">
      <NavItem href="/" icon={<Home className="w-4 h-4" />} text="Home" />
      <NavItem href="/resume" icon={<FileText className="w-4 h-4" />} text="Resume" />
      <NavItem href="/projects" icon={<Code className="w-4 h-4" />} text="Projects" />
      <NavItem href="/github" icon={<Github className="w-4 h-4" />} text="My GitHub" />
      <NavItem href="/contact" icon={<Mail className="w-4 h-4" />} text="Contact Me" />
      <NavItem href="/experience" icon={<Briefcase className="w-4 h-4" />} text="Experience" />
      <NavItem href="/skills" icon={<Sparkles className="w-4 h-4" />} text="Skills" />
    </div>
    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <Menu className="w-6 h-6 text-white" />
    </button>
  </div>
  {isMenuOpen && (
    <div className="md:hidden mt-4 space-y-2 absolute right-0 top-full bg-pink-300 p-4 rounded-bl-lg shadow-lg z-10">
      <NavItem href="/" icon={<Home className="w-4 h-4" />} text="Home" />
      <NavItem href="/resume" icon={<FileText className="w-4 h-4" />} text="Resume" />
      <NavItem href="/projects" icon={<Code className="w-4 h-4" />} text="Projects" />
      <NavItem href="/github" icon={<Github className="w-4 h-4" />} text="My GitHub" />
      <NavItem href="/contact" icon={<Mail className="w-4 h-4" />} text="Contact Me" />
      <NavItem href="/experience" icon={<Briefcase className="w-4 h-4" />} text="Experience" />
      <NavItem href="/skills" icon={<Sparkles className="w-4 h-4" />} text="Skills" />
    </div>
  )}
</nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4 sm:mb-6">About Me</h1>
        <div className="bg-pink-200 rounded-lg shadow-lg p-4 sm:p-6 relative overflow-hidden">
          {/* Retro Computer Window Overlay */}
          <div className="absolute inset-0 border-8 border-pink-300 rounded-lg pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-pink-400 to-pink-300 flex items-center justify-between px-4">
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-red-400 mr-2" />
                <Heart className="w-4 h-4 text-yellow-400 mr-2" />
                <Heart className="w-4 h-4 text-green-400 mr-2" />
                <div className="ml-2 text-white font-bold">About_Me.exe</div>
              </div>
              <div className="flex items-center space-x-2">
                <Minimize2 className="w-4 h-4 text-white" />
                <Maximize2 className="w-4 h-4 text-white" />
                <X className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white rounded p-4 border-2 border-pink-300 shadow-inner">
            <p className="text-lg text-gray-700 mb-4">
              Hello there! 👋 I'm a passionate computer scientist with a love for all things cute and coding. My journey in
              the world of technology is filled with colorful algorithms, adorable data structures, and kawaii coding
              projects.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              When I'm not busy debugging with my trusty rubber duck 🐤, you can find me creating pixel art 👾, attending
              virtual tea parties with my favorite IDEs ☕, or dreaming up the next big app that'll make the digital world a
              cuter place.
            </p>
            <p className="text-lg text-gray-700">
              Let's connect and create some magical code together! Don't forget to check out my projects and drop me a
              line. Remember, in my world, every bug is just a misunderstood feature waiting to be loved. 💖
            </p>
          </div>
        </div>
        {/* Kawaii Desktop Icons */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <DesktopIcon icon={<Code className="w-8 h-8 text-pink-500" />} text="My Projects" />
          <DesktopIcon icon={<FileText className="w-8 h-8 text-blue-500" />} text="Resume.doc" />
          <DesktopIcon icon={<Mail className="w-8 h-8 text-purple-500" />} text="Contact Me" />
          <DesktopIcon icon={<Github className="w-8 h-8 text-gray-700" />} text="GitHub" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-200 p-4 sm:p-6 border-t-4 border-pink-300">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <FooterLink href="/" icon={<Home className="w-4 h-4" />} text="Home" />
            <FooterLink href="/resume" icon={<FileText className="w-4 h-4" />} text="Resume" />
            <FooterLink href="/projects" icon={<Code className="w-4 h-4" />} text="Projects" />
            <FooterLink href="/github" icon={<Github className="w-4 h-4" />} text="GitHub" />
            <FooterLink href="/contact" icon={<Mail className="w-4 h-4" />} text="Contact" />
          </div>
          <div className="text-pink-600 text-sm">
            Made with <Heart className="w-4 h-4 inline-block text-red-500" /> and lots of <Star className="w-4 h-4 inline-block text-yellow-400" />
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavItem({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link href={href} className="flex items-center space-x-1 text-white hover:text-pink-100 transition duration-150 ease-in-out">
      {icon}
      <span>{text}</span>
    </Link>
  )
}

function FooterLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link href={href} className="flex items-center space-x-1 text-pink-600 hover:text-pink-700 transition duration-150 ease-in-out p-2">
      {icon}
      <span>{text}</span>
    </Link>
  )
}

function DesktopIcon({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white bg-opacity-50 rounded-lg p-4 hover:bg-opacity-75 transition-all duration-300 cursor-pointer">
      {icon}
      <span className="mt-2 text-sm font-medium text-gray-700">{text}</span>
    </div>
  )
}