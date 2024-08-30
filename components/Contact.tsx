
 'use client'
import Image from "next/image";
import React, { Component } from 'react'
 
 
import { Button } from "@/components/ui/button"
 
import { Input } from "@/components/ui/input"
 
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { IoLocationOutline, IoMail } from "react-icons/io5";
import { MdMail, MdOutlineLocalPhone, MdPin } from "react-icons/md";
 
 

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
 
import { Textarea } from "./ui/textarea";
import ContactSchema from "./schema/contactformSchema";
import { ContactDetails } from "@/actions/ContactDetails";
import { toast } from "./ui/use-toast";
 

 
   

 
 
     const  Contact  = ()=> {

    
      const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
          name: "",
          email:"",
          subject:"",
          phone:"",
          message:""
        },
      })
     
 
    
    async  function onSubmit(values: z.infer<typeof ContactSchema>) {
        
         const res =  await ContactDetails(values);

         if(res?.success){
          toast({
            title:"we contact with you"
          })
         }

         if(res?.error){
          toast({
            title:"something went wrong"
          }) 
        }

        
      }
    return (
  <>
    <section className="grid place-items-center w-full relative h-full  mt-20 py-20 " id="contact" >
    <h1 className="text-4xl  ">Contact Us</h1>
        <p className='mt-2 text-sm md:text-base lg:text-lg text-gray-600 text-center'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, accusantium.
        </p>
    <main className="flex  w-[90%]  md:w-[80%] h-full justify-center items-center  ">
 
   <div className="w-full  relative">
 
    
   <div className="mt-5  w-full  lg:grid-cols-2 grid  sm:grid-cols-1  gap-4   ">
              <div className="w-full"> 
                  <div className="flex flex-col gap-5 ">
                    <div className="p-5 border shadow-sm flex gap-4 items-center">
                    <MdOutlineLocalPhone size={23}/>
                           <div>
                           <h1 className="text-md"> Phone</h1>
                             <h3 className="text-sm">+91 1112223334</h3>
                           </div>
                      </div>
                      <div className="p-5 border shadow-sm flex gap-4 items-center">  
                      <IoMail size={23}/>
                      <div>
                      <h1 className="text-md"> Email</h1>
                      <h3 className="text-sm">athareinteriors@gmail.com</h3>   
                           </div>
              
                      </div>
                      <div className="p-5 border shadow-sm flex gap-4 items-center">
                      <IoLocationOutline size={23}/>
                      <div>
                      <h1 className="text-md">  location</h1>
                      <h3 className="text-sm">pimple gurav, pune</h3>     
                           </div>
                     
                      </div>
                  </div>
                 
              </div>


              <div className="w-full"> 
              <Card className="p-3 py-6 w-auto relative h-auto shadow-sm">
                <CardTitle className="text-xl font-medium">Send Message</CardTitle>
                <CardDescription className="mt-1">send message to connect with me.</CardDescription>
                <br />
                <CardContent>  
                <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
         <div className=" flex items-center gap-2 w-full">

         <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className=" w-full"> 
                <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Name" {...field} />
              </FormControl>  
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className=" w-full"> 
                <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
              </FormControl>  
            </FormItem>
          )}
        />
         </div>
              <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Enter phone" {...field} />
              </FormControl>  
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem> 
                <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Enter Subject" {...field} />
              </FormControl>  
            </FormItem>
          )}
        />
             <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl> 
                       <div className=" relative items-center">
                       <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />   
                     </div>
                    </FormControl>
                    
                  </FormItem>
                )}
              />
        <Button type="submit"> Send Message</Button>
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
