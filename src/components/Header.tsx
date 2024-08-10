import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Image, Input, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, useDisclosure} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { TOKEN_SAMPLE as tokenData } from "../data/sampleData"

import images from '../assets/images';
import {TokenList,Model} from "./index"
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [openTokenBox, setOpenTokenBox] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [account,setAccount] = useState("")
  
  const menuItems = [
    {
      name: 'Swap',
      path: '/'
    },
    {
      name: 'Tokens',
      path: '/token'
    },{
      name: 'Pools',
      path: '/pool'
    },
  ]

  const toggleIsOpen = () => {
    setOpenTokenBox(prev => !prev)
  }

  
  return (
    <header>
      <Navbar isBlurred className='bg-black font-supadao -z-0' maxWidth='full' onMenuOpenChange={setIsMenuOpen}>
        <NavbarBrand>
          <Image src={images.icon2} alt='logo' width="100%" className='h-12 object-contain md:h-14' />{" "}
          <p className='hidden md:block text-xl text-secondary'>SupaDao</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((el) => (
            <NavbarItem key={menuItems.indexOf(el) + 1}>
              <Link  to={el.path} className='text-primary hover:text-lime-500'>{el.name}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
            base: "max-w-full sm:max-w-[15rem] h-10",
            mainWrapper: "h-full",
            inputWrapper:"bg-neutral-800 border-0 text-white overflow-hidden px-0 rounded-lg",
            input:"bg-neutral-800 px-4 text-white",
            innerWrapper:'bg-neutral-800 text-white',
            }}
                  variant="faded"
            placeholder="Type to search..."
            size="sm"
            endContent={<BsSearch size={18} />}
            type="search"
            className='hidden sm:block'
          />
          <NavbarItem>
            {account ? (
              <Button color="primary" variant="flat" onClick={toggleIsOpen}>
                {account.slice(0,3)}...{account.slice(-4)}
              </Button>
            ) : (
                <Button color="primary" variant="flat" onClick={onOpen}>
                  Connect
                </Button>
            )}
          </NavbarItem>
          <NavbarMenuToggle className='sm:hidden' aria-label={isMenuOpen ? "close menu" : "open menu"}/>
        </NavbarContent>
        <NavbarMenu className="bg-">
          <Input
            classNames={{
            base: "max-w-full sm:max-w-[15rem] h-10",
            mainWrapper: "h-full",
            inputWrapper:"bg-neutral-800 border-0 text-white overflow-hidden px-0 rounded-lg",
            input:"bg-neutral-800 px-4 text-white",
            innerWrapper:'bg-neutral-800 text-white',
            }}
                  variant="faded"
            placeholder="Type to search..."
            size="sm"
            endContent={<BsSearch size={18} />}
            type="search"
            className='sm:hidden'
          />
          {menuItems.map((el,i) => (
            <NavbarMenuItem key={i}>
              <Link  to={el.path} className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity border w-full text-primary hover:bg-primary hover:text-black py-2 px-4 rounded-2xl border-primary hover:border-neutral-800 hover:shadow-md hover:shadow-neutral-700 my-2 font-supadao'>{el.name}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <hr className="text-primary border-primary" />
      <Model isOpen={isOpen} onOpenChange={onOpenChange} connectWallet={()=>alert("Hello connection")} />
      {/* Token list component */}
        {openTokenBox && <TokenList tokenData={tokenData} toggleIsOpen={toggleIsOpen}/>}
    </header>
  )
}

export default Header;
