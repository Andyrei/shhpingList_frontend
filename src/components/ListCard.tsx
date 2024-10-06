import React, { Dispatch, SetStateAction } from 'react'
import BinIcon from '../icons/binIcon';
import CheckIcon from "@/icons/checkIcon";
import { Button } from "@/components/ui/button";
import { ListItem } from '@/app/types/listType';

type Props = {
    item: ListItem,
    handleCheck: Function,
    handleDel: Function
}

export default function ListCard({item, handleCheck, handleDel}: Props) {

  return (
    <div key={item.id} className={`flex justify-between border ${item.checked ? "item_checked" : ''}`}>
        <div>
            <p>Title: {item.title}</p>
            <div>Quantity: {item.quantity}</div>
        </div>
        <div className="flex flex-col">
            <Button type="button" onClick={()=>handleCheck(item.id)}> <CheckIcon /> </Button>
            <Button type="button" onClick={()=>handleDel(item.id)}> <BinIcon /> </Button>
        </div>
  </div>
  )
}