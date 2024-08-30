
'use client'
import { Component, useState } from 'react';

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"

  import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Grip } from "lucide-react";
 

import { Link, animateScroll as scroll } from 'react-scroll';
import QuoteDiloag from './Consultation-dilog';

 
 
 

     const  Header  = ()=> {
      const [isopen,setisopen] = useState(false);
    return ( 
      <> 
      <Menubar className="p-8 fixed top-0 left-0 w-full z-50 font-thin justify-center flex border-b-0">

      <div className="md:flex gap-3  hidden  ">
      <MenubarMenu>
          <MenubarTrigger  className="cursor-pointer   font-normal ">
            
          <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Home
      </Link>
            </MenubarTrigger> 
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer font-normal" >
            
          <Link
        activeClass="active"
        to="Services"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Services
      </Link>
            </MenubarTrigger> 
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer font-normal" >
            
          <Link
        activeClass="active"
        to="Portfolio"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Portfolio
      </Link>
      </MenubarTrigger> 
        </MenubarMenu>


        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer font-normal px-10" >
            
          <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        logo
      </Link>
      </MenubarTrigger> 
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer font-normal">

            
          <Link
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
         About Us
      </Link>
          </MenubarTrigger>
           
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer font-normal"  > 
          
          <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Contact Us
      </Link>
          </MenubarTrigger> 
        </MenubarMenu>  


        <MenubarMenu>
         

          <QuoteDiloag/>  
         
      
      
        </MenubarMenu>

      </div>
             
       

      <MenubarMenu> 
      <Sheet open={isopen} onOpenChange={setisopen}>
<SheetTrigger className="font-semibold  md:hidden block"> <Grip /></SheetTrigger>
<SheetContent>
  <SheetHeader className="mb-8 flex gap-4 flex-row">
  
    <SheetTitle  className="flex gap-2 items-center">  Athare interiorss
     </SheetTitle>  
  </SheetHeader>
  <Separator />
     <div className="flex flex-col gap-10 items-start mt-4">
      

     <MenubarMenu>
                
     <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
      >
          <MenubarTrigger  className="cursor-pointer   font-normal "  onClick={()=>{setisopen(false)}}> 
        Home 
            </MenubarTrigger> 
            </Link>
        </MenubarMenu>
        <MenubarMenu>
        <Link
        activeClass="active"
        to="Services"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
          <MenubarTrigger className="cursor-pointer font-normal" onClick={()=>{setisopen(false)}}> 
         Services
 
            </MenubarTrigger> 
            </Link>
        </MenubarMenu>
        <MenubarMenu>
        <Link
        activeClass="active"
        to="Portfolio"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
          <MenubarTrigger className="cursor-pointer font-normal" onClick={()=>{setisopen(false)}}> 
        Portfolio
      
      </MenubarTrigger> 
      </Link>
        </MenubarMenu>

        <MenubarMenu>
                
        <Link
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
          <MenubarTrigger className="cursor-pointer font-normal" onClick={()=>{setisopen(false)}}>

       
        About Us
  
          </MenubarTrigger>
          </Link>  
        </MenubarMenu>

        <MenubarMenu>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}  
      >
          <MenubarTrigger className="cursor-pointer font-normal"  onClick={()=>{setisopen(false)}}>  
      
        Contact Us
 
          </MenubarTrigger> 
          </Link>
        </MenubarMenu>  

     
           <Separator />
      </div>


</SheetContent>
</Sheet>
        </MenubarMenu>
 

      </Menubar>

 
 </>
      
    )
  }
  

  export default Header;