import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';




interface NavProps{
  open: boolean
}




export default function Nav({open}: NavProps) {
  const router = useRouter();
  return (
    <nav className={`menu ${open ? `menu--open`: ``} lg:px-9 `}>
      <ul className='menu__list lg:flex lg:flex-row lg:justify-end'>
        <li className='menu__list--item px-4 py-5'>
           <Link legacyBehavior={true} href="/">
            <a className={`${router.pathname == "/" ? "active" : ""} `}>Home</a>
         </Link>
      </li>
       <li className='menu__list--item px-4 py-5'>
           <Link legacyBehavior={true} href="/design">
              <a className={`${router.pathname == "/design" ? "active" : ""} `}>Design</a>
          </Link>
      </li>
       <li className='menu__list--item px-4 py-5'>
           <Link legacyBehavior={true} href="/dev">
              <a className={`${router.pathname == "/dev" ? "active" : ""} `}>Dev</a>
          </Link>
      </li>
          <li className='menu__list--item px-4 py-5'>
            <Link legacyBehavior={true} href="/contact">
               <a className={`${router.pathname == "/contact" ? "active" : ""} `}>Contact</a>
           </Link>
         </li>
      </ul>
    </nav>
  )
}