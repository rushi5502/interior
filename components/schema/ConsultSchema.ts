import { z } from "zod";

    const ConsultSchema = z.object({
    email: z
      .string()
      .email({
        message: "Invalid email address",
      }),
     name:z.string().min(1,{message:" required"}),

    phone:z.string().min(10,{message:"invalid phone"}).max(10,{message:"invalid phone"}),
    address:z.string().min(1,{message:"requied"}),
    area: z.string({
        required_error: "Please select an area",
      }),
      description: z.string().min(30, {
        message: " must be at least 30 characters.",
      }) 
  });


  export default ConsultSchema;