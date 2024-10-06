'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ListItem } from '@/app/types/listType';
import ListCard from "@/components/ListCard";



const LIST_TEST = [
  {
    id: `item-${Date.now() * Math.random()}`,
    title: "Verdure",
    checked: false,
    quantity: 12,
  },
  {
    id: `item-${Date.now() * Math.random()}`,
    title: "Latte",
    checked: false,
    quantity: 12,
  },
  {
    id: `item-${Date.now() * Math.random()}`,
    title: "Formaggio",
    checked: false,
    quantity: 12,
  }
]
export default function Home() {
  const [list, setList] = useState<ListItem[]>(LIST_TEST); // Initialize as an empty array
  const [item, setItem] = useState<ListItem>({
    id: `item-${Date.now()}`,
    title: "",
    checked: false,
    quantity: 0,
  });

  function handleAddToList() {
    if (item.title.trim() !== "") { // Ensure title is not empty
      
      setList((prevList) => [...prevList, item]); // Add item to the list


      // Reset the item state after adding to the list
      setItem({
        id: `item-${Date.now()}`,
        title: "",
        checked: false,
        quantity: 0,
      });
    }
  }


  function handleDel(id: string | number){
    setList((prevList) => 
      prevList?.filter((l) => l.id !== id) // Use filter to exclude the item by ID
    );
  }

function handleCheck(id: string | number) {
    setList((prevList) => 
      prevList.map((l) => {
        if (l.id === id) {
          return { ...l, checked: !l.checked }; // Toggle checked state for the item with the matching id
        }
        return l; // Return the item as is if the id does not match
      })
    );
}

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex w-full max-w-lg items-center space-x-2">
        <Input 
          type="text"
          className="flex-auto"
          onChange={(e) => setItem((prevItem) => ({
            ...prevItem,
            title: e.target.value,
          }))}
          value={item.title}
          placeholder="What you want to add?"
        />
        <Input 
          type="number"
          className="flex-auto w-1/3"
          onChange={(e) => setItem((prevItem) => ({
            ...prevItem,
            quantity: Number(e.target.value), // Parse to number
          }))}
          value={item.quantity > 0 ? item.quantity : ''}
          placeholder="Qty" 
        />
        <Button type="button" onClick={handleAddToList}>
          Add
        </Button>
      </div>
      {list.length > 0 ? 
      <div className="w-full mt-4 p-2 space-y-5">
        {list?.map((item) => (
          <ListCard item={item} handleDel={handleDel} handleCheck={handleCheck}/>
        ))}
      </div> : ''}
    </div>
  );
}