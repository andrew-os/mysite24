import { useEffect, useState } from 'react';
import Image from 'next/image';
import HamburgerMenu from './Hamburger';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from "./Nav"

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useRouter();

  useEffect(() => {
    setOpen(false); // close menu if path changes!
    }, [ pathname ]);
  return (
    <>
      <Nav open={open} />
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  )
}