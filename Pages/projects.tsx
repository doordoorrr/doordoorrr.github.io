import { useState } from 'react'
import { Heart, Star, Code, Github, Mail, FileText, Home, Briefcase, Sparkles, Maximize2, Minimize2, X, ChevronDown, ChevronUp, Plus, X as XIcon, Menu } from 'lucide-react'
import Link from 'next/link'

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kawaii Task Manager",
    description: "A cute and functional task management app",
    tags: ["React", "TypeScript", "Node.js"],
    details: "This adorable task manager helps you organize your work with cute animations and playful sounds. It features drag-and-drop functionality, priority levels represented by different cute animals, and a reward system that gives you virtual stickers for completing tasks!"
  },
  {
    id: 2,
    title: "Pixel Pet Simulator",
    description: "Take care of your very own digital pet",
    tags: ["JavaScript", "HTML5 Canvas", "CSS"],
    details: "Pixel Pet Simulator lets you adopt and care for a cute pixel art pet. Feed it, play mini-games, and watch it grow! The game features day/night cycles, various pet personalities, and even a pet social network where your pixel pets can make friends!"
  },
  {
    id: 3,
    title: "Coding Cafe",
    description: "A cozy IDE with a coffee shop atmosphere",
    tags: ["Electron", "React", "TypeScript"],
    details: "Coding Cafe brings the relaxing ambiance of a coffee shop to your coding environment. It features customizable backgrounds, ambient sounds, and even a virtual barista that offers coding tips. The IDE supports multiple languages and has a built-in pomodoro timer to boost productivity."
  },
  {
    id: 4,
    title: "Magical Girl Dress-Up Game",
    description: "Create your own magical girl character",
    tags: ["Unity", "C#", "Blender"],
    details: "This dress-up game allows players to create their own magical girl character with thousands of customization options. Features include a transformation sequence creator, a mission system where you can use your character in mini-games, and a gallery to showcase your creations."
  },
]

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project => selectedTags.every(tag => project.tags.includes(tag)))
    : projects

  const addTag = (tag: string) => {
    if (tag && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
      setNewTag('')
    }
  }

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag))
  }

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

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
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4 sm:mb-6">My Projects</h1>
        <div className="bg-pink-200 rounded-lg shadow-lg p-4 sm:p-6 relative overflow-hidden">
          {/* Retro Computer Window Overlay */}
          <div className="absolute inset-0 border-8 border-pink-300 rounded-lg pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-pink-400 to-pink-300 flex items-center justify-between px-4">
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-red-400 mr-2" />
                <Heart className="w-4 h-4 text-yellow-400 mr-2" />
                <Heart className="w-4 h-4 text-green-400 mr-2" />
                <div className="ml-2 text-white font-bold">Projects.exe</div>
              </div>
              <div className="flex items-center space-x-2">
                <Minimize2 className="w-4 h-4 text-white" />
                <Maximize2 className="w-4 h-4 text-white" />
                <X className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white rounded p-4 border-2 border-pink-300 shadow-inner">
            {/* Filter Section */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-pink-500 mb-2">Filter Projects</h2>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedTags.map(tag => (
                  <span key={tag} className="bg-pink-200 text-pink-700 px-2 py-1 rounded-full text-sm flex items-center">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="ml-1 text-pink-500 hover:text-pink-700">
                      <XIcon className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => addTag(tag)}
                    className={`px-2 py-1 rounded-full text-sm ${
                      selectedTags.includes(tag)
                        ? 'bg-pink-500 text-white'
                        : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a custom tag..."
                  className="border-2 border-pink-300 rounded-l px-2 py-1 focus:outline-none focus:border-pink-500"
                />
                <button
                  onClick={() => addTag(newTag)}
                  className="bg-pink-500 text-white px-2 py-1 rounded-r hover:bg-pink-600 transition duration-200"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
              {filteredProjects.map(project => (
                <div key={project.id} className="border-2 border-pink-300 rounded-lg p-4 hover:shadow-md transition duration-200">
                  <div
                    className="cursor-pointer flex justify-between items-center"
                    onClick={() => toggleProject(project.id)}
                  >
                    <h3 className="text-lg font-bold text-pink-600">{project.title}</h3>
                    {expandedProject === project.id ? (
                      <ChevronUp className="w-5 h-5 text-pink-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-pink-500" />
                    )}
                  </div>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {expandedProject === project.id && (
                    <div className="mt-4 p-4 bg-pink-50 rounded-lg">
                      <p className="text-gray-700">{project.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
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