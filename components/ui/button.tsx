import * as React from 'react';
export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: 'outline'|'default', size?: 'sm'|'lg'}>(
  ({ className='', variant='default', size, ...props }, ref) => {
    const base='inline-flex items-center justify-center rounded-2xl border text-sm font-medium transition focus:outline-none px-4 py-2 shadow-sm';
    const v = variant==='outline' ? 'border-gray-300 bg-white hover:bg-gray-50' : 'border-transparent bg-black text-white hover:bg-gray-800';
    const s = size==='sm' ? 'h-9 px-3' : size==='lg' ? 'h-11 px-5 text-base' : 'h-10';
    return <button ref={ref} className={`${base} ${v} ${s} ${className}`} {...props} />;
  }
);
Button.displayName='Button';
export default Button;
