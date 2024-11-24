"use client"
import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { signOut } from 'next-auth/react'
import { IMenuItem } from './DashboardNavbar'
import { Avatar, AvatarImage } from './ui/avatar'


function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ')
}
interface Dropdown {
   menu: { label: string, href: string }[],
   img: string | undefined
}

export default function IconDropdown({ menu, img }: Dropdown) {
   return (
      <Menu as="div" className="relative inline-block text-left">
         <div>
            <MenuButton className="flex items-center justify-center rounded-full focus:outline-none focus:ring-1 focus:ring-accent   ">
               <span className="sr-only">Open options</span>
               <Avatar className='w-8 h-8 bg-white'>
                  <AvatarImage src={img} />

               </Avatar>
            </MenuButton>
         </div>

         <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
         >
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none bg-background border border-border">
               <div className="py-1">
                  {menu?.map((link) => {
                     return (
                        <MenuItem key={link.label}>
                           {({ focus }) => (
                              <a
                                 href={link.href}
                                 className={classNames(
                                    focus ? 'bg-primary ' : ' ',
                                    'block px-4 py-2 text-sm'
                                 )}
                              >
                                 {link.label}
                              </a>
                           )}
                        </MenuItem>
                     )
                  })}


                  <MenuItem>
                     {({ focus }) => (
                        <button
                           type="submit"
                           className={classNames(
                              focus ? 'bg-primary' : ' ',
                              'block w-full px-4 py-2 text-left text-sm'
                           )}
                           onClick={() => signOut()}
                        >
                           Sign out
                        </button>
                     )}
                  </MenuItem>

               </div>
            </MenuItems>
         </Transition>
      </Menu>
   )
}
