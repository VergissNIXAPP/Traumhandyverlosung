import * as React from 'react';
export function Label({className='', ...props}:{className?:string, children?:React.ReactNode}){
  return <label className={`text-sm font-medium ${className}`} {...props}/>;
}
