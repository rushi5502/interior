
'use client'
import Image from "next/image";
import React, { Component } from 'react'
 
 
import { Button } from "@/components/ui/button"
import axios from "axios";
import { Input } from "@/components/ui/input"
 
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { IoLocationOutline, IoMail } from "react-icons/io5";
import { MdMail, MdOutlineLocalPhone, MdPin } from "react-icons/md";
 
import { Separator } from "./ui/separator";
import { FaDiscord ,FaSpotify} from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
 
  
 
  import { PiGraduationCap, PiTreeStructureLight } from "react-icons/pi";
 

  const formSchema = z.object({
         name: z.string().min(2).max(50),
         email:z.string().email(),
         subject:z.string().min(1,{message:"required"}).max(30),
         message:z.string().min(1,{message:"required"}).max(300),
         phone:z.string().min(10,{message:"Invaid phone"})
  }) 
   

 
 
     const  Contact  = ()=> {

      const { toast } = useToast();
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email:"",
          subject:"",
          phone:"",
          message:""
        },
      })
     
    const [isloding ,setisloding] = React.useState(false);
    
    async  function onSubmit(values: z.infer<typeof formSchema>) {
        
       console.log(values)

        
      }
    return (
  <>
    <section className="grid place-items-center w-full relative h-full  mt-20 py-20 " id="contact" >
     
    <main className="flex  w-[90%]  md:w-[80%] h-full justify-center items-center  ">
 
   <div className="w-full  relative">
   <h1 className="flex flex-row gap-2 text-xl font-normal"> <PiGraduationCap size={22}/> Contact Me</h1>
    
   <div className="mt-5  w-full  lg:grid-cols-2 grid  sm:grid-cols-1  gap-4   ">
              <div className="w-full">
                 <h3 className="text-xl">Contact Info</h3>
               
                  <div className="flex flex-col gap-5 mt-8">
                    <div className="p-5 border shadow-sm flex gap-4 items-center">
                    <MdOutlineLocalPhone size={23}/>
                           <div>
                           <h1 className="text-lg"> Phone</h1>
                             <h3>+91 8855964895</h3>
                           </div>
                      </div>
                      <div className="p-5 border shadow-sm flex gap-4 items-center">  
                      <IoMail size={23}/>
                      <div>
                      <h1 className="text-lg"> Email</h1>
                      <h3>mayurshinde4895@gmail.com</h3>   
                           </div>
              
                      </div>
                      <div className="p-5 border shadow-sm flex gap-4 items-center">
                      <IoLocationOutline size={23}/>
                      <div>
                      <h1 className="text-lg">  location</h1>
                      <h3>pimple gurav, pune</h3>     
                           </div>
                     
                      </div>
                  </div>
                 
              </div>


              <div className="w-full"> 
              <Card className="p-3 py-6 w-auto relative h-auto shadow-sm">
                <CardTitle>Send Message</CardTitle>
                <CardDescription className="mt-1">send message to connect with me.</CardDescription>
                <br />
                <CardContent>  
                <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
          
              <FormControl>
                <Input placeholder="Enter Name" {...field} />
              </FormControl> 
              <FormMessage  className="text-xs"/>
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
            
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
              </FormControl> 
              <FormMessage  className="text-xs"/>
            </FormItem>
          )}
        />
              <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter phone" {...field} />
              </FormControl> 
              <FormMessage  className="text-xs"/>
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem> 
              <FormControl>
                <Input placeholder="Enter Subject" {...field} />
              </FormControl> 
              <FormMessage  className="text-xs"/>
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>  
              <FormControl>
                <Input placeholder="Message" {...field} />
              </FormControl> 
              <FormMessage  className="text-xs"/>
            </FormItem>
          )}
        />
        <Button type="submit">{isloding ? "sending...":"Send Message"}</Button>
      </form>
    </Form>
        </CardContent>
              </Card>
              </div>
         </div>
</div>
 </main>
   
    </section>
     
  </>
    )
  }
  

  export default Contact;
