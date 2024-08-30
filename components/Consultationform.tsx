"use client";
 

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
 
 
import axios from "axios";
import { redirect, useRouter, useSearchParams } from "next/navigation";

import { Loader2 } from "lucide-react";
 
 
 
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
 
 
 
 
import { CiAt, CiPhone, CiUser } from "react-icons/ci";
import { PiLockKeyLight } from "react-icons/pi";
import { Card, CardFooter } from "./ui/card";
import ConsultSchema from "./schema/ConsultSchema";
import { Textarea } from "./ui/textarea";
 

 
const ConsultForm = () => {
 
 
  
  
  const {toast} = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof ConsultSchema>>({
    resolver: zodResolver(ConsultSchema),
    defaultValues: {
      email: "", 
      name: "",
      description:"",
       address:"",
     area:"",
      phone:""

    },
  });

  const isloding = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof ConsultSchema>) {

    alert("hii");
     console.log(values);
     
  }
 
  return (
    <>
   
   <Card className=" pt-0 py-5 w-full shadow-none border-none ">
        
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
           <div className="flex items-center gap-2 w-full ">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>name</FormLabel>
                    <FormControl>
                     <div className=" relative">
                     <Input placeholder="John Doe" {...field}  className="pl-8"/>
                     <CiUser  className=" absolute top-[9px] left-2"/>
                     </div>
                    </FormControl>
                  </FormItem>
                )}
              /> 
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                     <div className=" relative">
                     <Input placeholder="example@gmail.com" {...field}  className="pl-8"/>
                     <CiAt  className=" absolute top-[9px] left-2"/>
                     </div>
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
                     
                       <div className=" relative">
                       <Input
                        type="phone"
                        placeholder="Enter Mobile Number"
                        className="pl-8"
                        {...field}
                      />
                     <CiPhone   className=" absolute top-[9px] left-2"/>
                     </div>
                    </FormControl>
                    
                    
                  </FormItem>
                )}
              />

<FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                     
                       <div className=" relative">
                       <Textarea
                  placeholder="Enter your address"
                  className="resize-none"
                  {...field}
                />   
                     </div>
                    </FormControl>
                    
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                     
                       <div className=" relative">
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

<FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Choose interest</FormLabel>
                    <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
                     
                    </FormControl>
                  </FormItem>
                )}
              />
 

              

              <CardFooter className=" justify-between gap-3 flex-col w-full p-0">
                
              <Button  type="submit" className=" h-10 w-full">
                  {isloding ? <Loader2 className=" animate-spin" /> : "Get Quote"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
 
    </>
  );
};

export default ConsultForm;