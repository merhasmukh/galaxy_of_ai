import {
      Bars3Icon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/react'

import { useState } from 'react'

  const projects = [
    { name: 'Python Roadmap', description: "Python Roadmap For AI, ML, DL ,GenAI,LLM Developer", href: '/roadmaps/python-developer',     icon: '/tech/svg/Python.svg' },
    { name: 'GenAI | LLM Roadmap', description: 'GenAI And LLM Roadmap For Developer', href: '/roadmaps/genai-llm-developer', icon: '/tech/svg/Brain.svg' },
    { name: 'AI | ML Roadmap', description: 'AI/ML Roadmap For Developer', href: '/roadmaps/ai-ml-developer', icon: '/globe.svg' },
    // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]

  // const frameworks = [
  //   { name: 'Flask', description: "Flask API", href: 'https://github.com/merhasmukh/Flask-API-Hub',     icon: './images/tech/svg/Flask.svg'},
  //   { name: 'FastAPI', description: "FastAPI", href: 'https://github.com/merhasmukh/FastAPI-API-Hub',     icon: './images/tech/svg/FastAPI.svg'},
  //   { name: 'Django', description: "Django", href: 'https://github.com/merhasmukh/Django-API-Hub',     icon: './images/tech/svg/Django.svg'},

  // ]
 

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-br from-[#0F172A] to-[#1E293B]-950 text-white mx-auto items-center justify-center ">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Galaxy Of AI</span>
            <Image
              alt="Galaxy Of AI Logo"
              src="/galaxy-of-ai-logo.png"
              className="h-8 w-auto"
              width={32} // Set appropriate width
              height={32} // Set appropriate height
            />
            </Link>
          
        </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center justify-center">
            <Link href="/" className="text-sm/6 font-semibold text-white-900">
              Home
            </Link>
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white-900">
                Roadmaps
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>
  
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-white-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
                  {projects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-800"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white">
                        <Image src={item.icon} alt={`${item.name} icon`} height={60} width={60} />

                        {/* <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" /> */}
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-white-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-white-900">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
              </PopoverPanel>
            </Popover>
  
  
           
            {/* <a href="/education" className="text-sm/6 font-semibold text-white-900">
              Education
            </a>
            <a href="/skills" className="text-sm/6 font-semibold text-white-900">
              Skills
            </a>
            <a href="/experience" className="text-sm/6 font-semibold text-white-900">
              Experience
            </a> */}
            <Link href="https://blog.galaxyofai.com" className="text-sm/6 font-semibold text-white-900">
              Blog
            </Link>
            <Link href="/about" className="text-sm/6 font-semibold text-white-900">
              About
            </Link>
           
            {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Company
            </a> */}
          </PopoverGroup>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-br from-[#0F172A] to-[#1E293B] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Galaxy Of AI</span>
                <Image
                  alt=""
                  src="/galaxy-of-ai-logo.png"
                  className="h-8 w-auto"
                  width={32}
                  height={32}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 bg-gray">
                    <Link
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white-900 hover:bg-white-50"
                    >
                      Home
                    </Link>
                  <Disclosure as="div" className="-mx-3">
                    
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white-900 hover:bg-white-50">
                      Roadmaps
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...projects].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white-900 hover:bg-white-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  
                 
                  {/* <a
                    href="/education"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white-900 hover:bg-white-50"
                  >
                    Education
                  </a>
                  <a
                    href="/skills"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white-900 hover:bg-white-50"
                  >
                    Skills
                  </a>
                  <a
                    href="/experience"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white-900 hover:bg-white-50"
                  >
                    Experience
                  </a> */}
                  <Link
                    href="https://blog.galaxyofai.com"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white-900 hover:bg-white-50"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white-900 hover:bg-white-50"
                  >
                    About
                  </Link>
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a> */}
                </div>
                {/* <div className="py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    );


};

export default Header;