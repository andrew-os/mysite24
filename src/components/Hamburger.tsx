import { useCallback, useState } from 'react';

interface HamburgerProps{
  open: boolean
  setOpen: (open: boolean) => void
}

const HamburgerMenu: React.FC<HamburgerProps> = ({ setOpen, open }) => {
    return(
        <>
            <button
                data-open={open}
                onClick={() => setOpen (!open)}
                className="lg:hidden hamburger focus:outline-none"
                type="button">
                <span className="hamburger__inner hamburger__inner--top"></span>
                <span className="hamburger__inner hamburger__inner--mid"></span>
                <span className="hamburger__inner hamburger__inner--bot"></span>

            </button>

            <style jsx>{
                `.hamburger{
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                    width: 2rem;
                    height: 2rem;
                    overflow:hidden;
                }
                .hamburger__inner{
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 7px;
                    background-color: #6696A8;
                    position: relative;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }
                .hamburger__inner--top{
                    transform: ${ open ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .hamburger__inner--mid{
                    transform: ${open ? 'translateX(20px)' : 'translateX(0)'};
                    opacity: ${ open ? 0 : 1};
                }
                .hamburger__inner--bot{
                    transform: ${ open ? 'rotate(-45deg)' : 'rotate(0)'};
                }
                @media (min-width: 1024px) {
                  .hamburger{
                    display: none;
                  }
                }
                `
            }</style>
        </>
    )

}


export default HamburgerMenu;