import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from './ui/button';
import ConsultForm from './Consultationform';
import { ScrollArea } from './ui/scroll-area';

const QuoteDialog = () => {
  const [open, setOpen] = React.useState(false); 
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)}>Get Free Quote</Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[550px] pt-4 pb-1"
          onPointerDownOutside={(e) => e.preventDefault()} // Prevent closing on outside click
          onEscapeKeyDown={(e) => e.preventDefault()} // Prevent closing on ESC key
        >
          <DialogHeader>
            <DialogTitle>Athare Interiors</DialogTitle>
            <DialogDescription>Get Free Consultation</DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[480px] w-full rounded-md">
            <ConsultForm />
          </ScrollArea> 
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuoteDialog;
