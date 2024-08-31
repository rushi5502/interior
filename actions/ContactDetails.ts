'use server'
 
 
 
 
import ContactSchema from "@/components/schema/contactformSchema";
import { db } from "@/lib/db";
 
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
 
import z from "zod"
 
 
export const   ContactDetails = async (values :z.infer <typeof ContactSchema>)=>{
      
    try {
        const validatedFields =  ContactSchema.safeParse(values);

         if(!validatedFields.success){
            return   {error: "Invlaid Fields"}
         };

const {name,email,message,phone, subject, } = validatedFields.data;

  
   
       await db.contactDetails.create({

        data: {
          name,  
          email ,
          phone,
          message:message,
          subject,  
           
        }
      })
       
      return {success:"We Contact with you within hours "} 
 
      } catch (error) {
        console.log(error); 
  
      }
}