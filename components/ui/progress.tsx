import * as React from 'react';
export function Progress({value=0}:{value?:number}){ return <div className="h-2 w-full rounded-full bg-gray-200"><div className="h-2 rounded-full bg-black" style={{width: `${Math.min(100, Math.max(0, value))}%`}}/></div>}
