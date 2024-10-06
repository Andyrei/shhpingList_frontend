'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";

type ListItem = {
  id: string | number
  title: string
  checked: boolean
  quantity: number
}

export default function Home() {
  const [list, setList] = useState<ListItem[]>()
  const [itemTitle, setItemTitle] = useState("")

  function handleAddToList(){
    let newItem: ListItem = {
      id: Date.now(),
      title: itemTitle,
      checked: false,
      quantity: 0,
    }
    setList([...list??[], newItem])
  }

  return (
    <div className="">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" onChange={e=>setItemTitle(e.target.value)} placeholder="What you want to add?" />
          <Button type="button" onClick={handleAddToList}>Subscribe</Button>
        </div>
        {list?.map((item)=>{
          return <>
              <p>{item.title}</p>
              <p>{item.quantity}</p>
              <p>{item.checked}</p>
          </>

        })}
    </div>
  );
}
