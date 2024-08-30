import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import ConsultForm from './Consultationform'
const QuoteDiloag = () => {
  return (
    <div>
        
        
        <Dialog>
      <DialogTrigger asChild>
        <Button >Get Free Quote</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] pt-4 pb-1">
        <DialogHeader className='bg-red-500 '>
          <DialogTitle>Athare Interiors </DialogTitle>
          <DialogDescription>
            Get Free Consultation 
          </DialogDescription>
        </DialogHeader>
       <ConsultForm/>
       
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default QuoteDiloag