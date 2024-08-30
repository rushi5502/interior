'use client'
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BentoGrid } from "./ui/bendo-grid-";

export function Portfolio() {
  const demo = [
    {
      name: "Bungalow",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/94429673168243.5c0040643da5e.jpg", // Replace with actual image URL
      id: "1",
      category: "Residential",
    },
    {
      name: "Office Space",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/94429673168243.5c0040643da5e.jpg", // Replace with actual image URL
      id: "2",
      category: "Commercial",
    },
    {
      name: "Apartment",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/94429673168243.5c0040643da5e.jpg", // Replace with actual image URL
      id: "3",
      category: "Residential",
    },
    {
      name: "Shopping Mall",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/94429673168243.5c0040643da5e.jpg", // Replace with actual image URL
      id: "4",
      category: "Commercial",
    },
    {
      name: "Villa",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/94429673168243.5c0040643da5e.jpg", // Replace with actual image URL
      id: "5",
      category: "Residential",
    },
    {
      name: "Warehouse",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/94429673168243.5c0040643da5e.jpg", // Replace with actual image URL
      id: "6",
      category: "Commercial",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredDemo, setFilteredDemo] = useState(demo);

  useEffect(() => {
    const filtered = selectedCategory === "All"
      ? demo
      : demo.filter(item => item.category === selectedCategory);
    setFilteredDemo(filtered);
  }, [selectedCategory]);

  return (
    <div className='py-4 px-4 md:px-8 lg:px-16'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className="text-4xl  ">Portfolio</h1>
        <p className='mt-2 text-sm md:text-base lg:text-lg text-gray-600'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, accusantium.
        </p>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-4xl mt-5 bg-white  ">
          <TabsList className="flex flex-wrap items-center gap-3 justify-center w-full bg-white">
            <TabsTrigger value="All" className="text-sm md:text-base bg-white">All</TabsTrigger>
            <TabsTrigger value="Residential" className="text-sm md:text-base bg-white">Residential</TabsTrigger>
            <TabsTrigger value="Commercial" className="text-sm md:text-base bg-white">Commercial</TabsTrigger>
          </TabsList>
          <TabsContent value={selectedCategory} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDemo.map((item) => (
                <Card key={item.id} className="shadow-sm transition-opacity duration-500 ease-in-out opacity-0 animate-random-move">
                  <CardHeader className=" pt-2 pb-1">
                    <CardTitle className="text-lg font-medium">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="mb-0">
                    <img src={item.image} alt={item.name} className="w-full h-auto rounded-lg" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
