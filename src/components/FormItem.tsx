import React, { ReactNode } from 'react';

interface FormItemProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
}


const FormItem = ({ label, htmlFor, children }: FormItemProps) => (
  <div>
    <label htmlFor={htmlFor}>{label}</label>
    {children}
  </div>
);

export default FormItem;