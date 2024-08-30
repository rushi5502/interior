"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FaBusinessTime, FaClipboardList } from "react-icons/fa";
import { LiaHandshakeSolid } from "react-icons/lia";
import { TbCheck } from "react-icons/tb";
import { PiCheck } from "react-icons/pi";
const Services = () => {
  return (
    <div
      id="Services"
      className="flex w-full justify-center items-center flex-col"
    >
      <div className="py-4 mt-8 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl">Services</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            accusantium.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 w-full">
      <Card className="p-6 flex flex-col gap-3  w-[400px]    rounded-xl  hover:border-primary/30 shadow-sm  transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Consultancy basis

            </span>
            <div className="  p-2 rounded-full">
              <LiaHandshakeSolid size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
       <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla vel sapiente, dicta harum voluptatibus ipsum ea nostrum omnis, accusamus natus dolor a vero excepturi facere recusandae culpa consequuntur nesciunt. Corporis at dolorum labore possimus minima quae quam sit?
       </p>
          </CardContent>
        </Card>
        <Card className="p-6 flex flex-col gap-3  w-[400px] bg-gradient-to-br  rounded-xl hover:border-primary/30 shadow-sm transform transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Consultancy basis

            </span>
            <div className="  p-2 rounded-full">
              <LiaHandshakeSolid size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
       <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla vel sapiente, dicta harum voluptatibus ipsum ea nostrum omnis, accusamus natus dolor a vero excepturi facere recusandae culpa consequuntur nesciunt. Corporis at dolorum labore possimus minima quae quam sit?
       </p>
          </CardContent>
        </Card>
      
        <Card className="p-6 flex flex-col gap-3  w-[400px] bg-gradient-to-br  rounded-xl hover:border-primary/30 shadow-sm transform  transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Consultancy basis

            </span>
            <div className="  p-2 rounded-full">
              <LiaHandshakeSolid size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
       <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla vel sapiente, dicta harum voluptatibus ipsum ea nostrum omnis, accusamus natus dolor a vero excepturi facere recusandae culpa consequuntur nesciunt. Corporis at dolorum labore possimus minima quae quam sit?
       </p>
          </CardContent>
        </Card>
      </div>

      <div className=" mt-5 py-2 flex flex-wrap items-center justify-center gap-5 w-full">
        <Card className="p-6 flex flex-col gap-3  w-[400px]  rounded-xl shadow-sm transform hover:translate-y-1 hover:shadow-md transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Consultancy basis

            </span>
            <div className=" bg-primary/10  border-primary  border  p-2 rounded-full">
              <LiaHandshakeSolid size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
            <span className=" flex items-start gap-2 flex-col text-sm">
              <span className=" flex items-start justify-start gap-2"> <PiCheck  size={17}  className="text-gray-600" />Furniture Layout options.</span>
              <span className=" flex items-start justify-start gap-2"> <PiCheck  size={17}  className="text-gray-600" />Concept presentation to understand your long.
              </span>
              <span className=" flex items-start justify-start gap-2"> <PiCheck  size={17}  className="text-gray-600" />3D designs as per your choice </span>
            </span>
          </CardContent>
        </Card>

        <Card className="p-6 flex flex-col gap-3  w-[400px]  rounded-xl shadow-sm transform hover:translate-y-1 hover:shadow-md transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Consultancy basis

            </span>
            <div className=" bg-primary/10  border-primary  border  p-2 rounded-full">
              <LiaHandshakeSolid size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
            <span className=" flex items-start gap-2 flex-col text-sm">
              <span className=" flex items-start justify-start gap-2"> <PiCheck  size={17}  className="text-gray-600" />Furniture Layout options.</span>
              <span className=" flex items-start justify-start gap-2"> <PiCheck  size={17}  className="text-gray-600" />Concept presentation to understand your long.
              </span>
              <span className=" flex items-start justify-start gap-2"> <PiCheck  size={17}  className="text-gray-600" />3D designs as per your choice </span>
            </span>
          </CardContent>
        </Card>


        <Card className="p-6 flex flex-col gap-3  w-[400px]    rounded-xl shadow-sm transform hover:translate-y-1 hover:shadow-md transition-transform duration-300 ease-in-out">
          <div className="p-0 mb-2  pb-2 border-b border-gray-200  w-full flex justify-between   items-center">
            <span className="text-lg font-medium text-gray-800">
            Consultancy basis

            </span>
            <div className=" bg-primary/10   border-primary  border  p-2 rounded-full">
              <LiaHandshakeSolid size={22} className="text-primary" />
            </div>
          </div>
          <CardContent className="p-0 flex-1 ">
            <span className=" flex items-start gap-2 flex-col text-sm">
              <span className=" flex items-start justify-start gap-2"> <PiCheck  size={17}  className="text-gray-600" />Furniture Layout options.</span>
              <span className=" flex items-start justify-start gap-2"> <PiCheck  size={17}  className="text-gray-600" />Concept presentation to understand your long.
              </span>
              <span className=" flex items-start justify-start gap-2"> <PiCheck  size={17}  className="text-gray-600" />3D designs as per your choice </span>
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
