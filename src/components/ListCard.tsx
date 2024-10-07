import React, { Dispatch, SetStateAction, useState } from 'react'
import BinIcon from '../icons/binIcon';
import CheckIcon from "@/icons/checkIcon";
import { Button } from "@/components/ui/button";
import { ListItem } from '@/app/types/listType';

type Props = {
    item: ListItem,
    handleCheck: Function,
    handleDel: Function
}

function ShapeShift({quantity, shift}: {quantity: number, shift: boolean}){
    if(shift) return <input type="number" value={quantity} />
    else return <p>{quantity}</p>
}
export default function ListCard({item, handleCheck, handleDel}: Props) {
  
    const [shift, setShift] = useState(false)

    function handleShapeShift(){
        setShift(true)
    }
    return (
        <div key={item.id} className={`flex justify-between border ${item.checked ? "item_checked" : ''}`}>
            <div>
                <p>Title: {item.title}</p>
                <div onDoubleClick={handleShapeShift} >Quantity: <ShapeShift quantity={item.quantity} shift={shift}/> </div>
            </div>
            <div className="flex flex-col">
                <Button type="button" onClick={()=>handleCheck(item.id)} > <CheckIcon /> </Button>
                <Button type="button" onClick={()=>handleDel(item.id)} > <BinIcon /> </Button>
            </div>
        </div>
     )
}