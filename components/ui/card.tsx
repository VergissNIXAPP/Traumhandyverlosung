import * as React from 'react';
export function Card({className='', ...props}:{className?:string, children?:React.ReactNode}){ return <div className={`rounded-2xl border bg-white ${className}`} {...props}/>}
export function CardHeader({className='', ...props}:{className?:string, children?:React.ReactNode}){ return <div className={`p-4 pb-0 ${className}`} {...props}/>}
export function CardContent({className='', ...props}:{className?:string, children?:React.ReactNode}){ return <div className={`p-4 ${className}`} {...props}/>}
export function CardFooter({className='', ...props}:{className?:string, children?:React.ReactNode}){ return <div className={`p-4 pt-0 ${className}`} {...props}/>}
export function CardTitle({className='', ...props}:{className?:string, children?:React.ReactNode}){return <h3 className={`text-lg font-semibold ${className}`} {...props}/>}
export function CardDescription({className='', ...props}:{className?:string, children?:React.ReactNode}){return <p className={`text-sm text-gray-500 ${className}`} {...props}/>}
