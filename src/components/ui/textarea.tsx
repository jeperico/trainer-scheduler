/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form'; // Import the necessary types

import { cn } from '@/lib/utils';

interface TextAreaProps extends React.ComponentProps<'textarea'> {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  errors: FieldError | undefined;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, name, register, errors, ...props }, ref) => {
    return (
      <>
        <textarea
          className={cn(
            'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
          )}
          {...register(name)}
          {...props}
        />
        {errors && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
