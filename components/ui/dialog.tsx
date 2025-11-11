import * as React from 'react';
export function Dialog({open,onOpenChange,children}:{open?:boolean,onOpenChange?:(v:boolean)=>void,children:React.ReactNode}){ return <div>{children}</div>}
export function DialogTrigger({asChild,children}:{asChild?:boolean,children:React.ReactNode}){ return <>{children}</>}
export function DialogContent({children}:{children:React.ReactNode}){ return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"><div className="mx-4 w-full max-w-md rounded-2xl bg-white p-4">{children}</div></div>}
export function DialogHeader({children}:{children:React.ReactNode}){ return <div className="mb-2">{children}</div>}
export function DialogTitle({children}:{children:React.ReactNode}){ return <h3 className="text-lg font-semibold">{children}</h3>}
export function DialogDescription({children}:{children:React.ReactNode}){ return <p className="text-sm text-gray-600">{children}</p>}
