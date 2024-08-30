'use server'
 
 
 
import ConsultSchema from "@/components/schema/ConsultSchema";
import { db } from "@/lib/db";
 
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
 
import z from "zod"
 
 
export const   SavedUser = async (values :z.infer <typeof ConsultSchema>)=>{
      
    try {
        const validatedFields =  ConsultSchema.safeParse(values);

         if(!validatedFields.success){
            return   {error: "Invlaid Fields"}
         };

const {name,email,description,phone,area,address} = validatedFields.data;

  
   
       await db.user.create({

        data: {
          name,  
          email ,
          phone,
          address,
          description,
          intrest:area
           
        }
      })
       
      return {success:"We Send Quatation to you via whatsapp "} 
 
      } catch (error) {
        console.log(error); 
  
      }
}