import { useState } from 'react'
import { Heart, Star, Code, Github, Mail, FileText, Home, Briefcase, Sparkles, Maximize2, Minimize2, X, Menu } from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4 sm:mb-6">My Resume</h1>
        <div className="bg-pink-200 rounded-lg shadow-lg p-4 sm:p-6 relative overflow-hidden">
          {/* Retro Computer Window Overlay */}
          <div className="absolute inset-0 border-8 border-pink-300 rounded-lg pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-pink-400 to-pink-300 flex items-center justify-between px-4">
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-red-400 mr-2" />
                <Heart className="w-4 h-4 text-yellow-400 mr-2" />
                <Heart className="w-4 h-4 text-green-400 mr-2" />
                <div className="ml-2 text-white  font-bold">Resume.doc</div>
              </div>
              <div className="flex items-center space-x-2">
                <Minimize2 className="w-4 h-4 text-white" />
                <Maximize2 className="w-4 h-4 text-white" />
                <X className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white rounded p-4 border-2 border-pink-300 shadow-inner">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Kawaii Coder</h2>
            <p className="text-gray-700 mb-4">Turning caffeine into code and dreams into pixels! 💖</p>
            
            <h3 className="text-xl font-bold text-pink-500 mb-2">Education</h3>
            <p className="text-gray-700 mb-4">B.S. in Computer Science, Cute University, 20XX</p>
            
            <h3 className="text-xl font-bold text-pink-500 mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Fluent in Python, JavaScript, and Kawaii 🐍💛</li>
              <li>Expert in creating adorable user interfaces 🎨</li>
              <li>Master of debugging with rubber ducks 🐤</li>
              <li>Proficient in turning coffee into code ☕→💻</li>
            </ul>
            
            <h3 className="text-xl font-bold text-pink-500 mb-2">Experience</h3>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-pink-400">Senior Cuteness Engineer, Adorable Tech Inc.</h4>
              <p className="text-gray-700">Developed kawaii applications that made users squeal with delight! 😍</p>
            </div>
            
            <h3 className="text-xl font-bold text-pink-500 mb-2">Projects</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Created "Nyan Cat Code Editor" - Meow your way to bug-free code! 🐱‍💻</li>
              <li>Developed "Unicorn Debug" - Find magical solutions to coding problems! 🦄</li>
            </ul>
          </div>
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