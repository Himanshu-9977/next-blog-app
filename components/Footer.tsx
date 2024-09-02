// components/Footer.tsx
import Link from 'next/link'
import { Twitter, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-background text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">DevBlog</h3>
            <p className="text-muted-foreground">Empowering developers through knowledge sharing.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/blogs" className="text-muted-foreground hover:text-primary">Blogs</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://x.com/bhatta_him_07" className="text-muted-foreground hover:text-primary">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github size={24} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 DevBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer