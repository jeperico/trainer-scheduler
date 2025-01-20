/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form'; // Import the necessary types

import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  errors: FieldError | undefined;
  required?: boolean; // Add the optional required prop
  isDate?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, name, register, errors, required, isDate, ...props },
    ref
  ) => {
    return (
      <div>
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
            errors ? 'border-red-500' : '' // Add a class if there are errors
          )}
          {...register(
            name,
            isDate ? { valueAsDate: true, required } : { required }
          )}
          {...props}
        />
        {errors && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
