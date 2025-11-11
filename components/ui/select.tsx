import * as React from 'react';
export function Select({value,onValueChange,children}:{value?:string,onValueChange?:(v:string)=>void,children:React.ReactNode}){ return <div>{children}</div>}
export function SelectTrigger({children}:{children:React.ReactNode}){ return <div className="h-10 rounded-xl border px-3 flex items-center justify-between">{children}</div>}
export function SelectValue({placeholder}:{placeholder?:string}){ return <span className="text-sm text-gray-600">{placeholder}</span>}
export function SelectContent({children}:{children:React.ReactNode}){ return <div className="mt-2 space-y-1">{children}</div>}
export function SelectItem({value,children,onSelect}:{value:string,children:React.ReactNode,onSelect?:(v:string)=>void}){
  return <div onClick={()=>onSelect?.(value)} className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100">{children}</div>
}
