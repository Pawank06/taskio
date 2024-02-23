import { Github, Linkedin, LucideTwitter, } from "lucide-react"
import Container from "./Container"
import Link from "next/link"



const Footer = () => {
  return (
    <footer className="border-t border-transparent-white">
      <Container>
        <div className="p-12 pl-0 text-sm opacity-80">
        Built by <Link  href="#" className="underline font-semibold">pawan</Link>. The source code is available on <Link href="#" className="underline font-semibold" >GitHub</Link>.
        </div>

      </Container>
    </footer>
  )
}

export default Footer
