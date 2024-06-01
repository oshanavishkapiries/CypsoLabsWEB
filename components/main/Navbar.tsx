import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { navbarLinks } from "@/data/navbarData"
import Image from "next/image"
export default function Component() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-950 shadow">
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
      <Image src={"/img/logo.png"} width={130} height={24} className="" alt={"logo"} />
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        
        {
          navbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))
        }
       
      </nav>
      <div className="flex items-center gap-4">
        <Button className="hidden md:inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none ">Contact us</Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
