
import React, { useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';

interface AutoResizeInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const AutoResizeInput = ({ value, onChange, className }: AutoResizeInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = Math.max(100, value.length * 8 + 20) + 'px';
    }
  }, [value]);

  return (
    <Input
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border-none bg-transparent text-xs min-w-[100px] ${className}`}
      style={{ width: Math.max(100, value.length * 8 + 20) + 'px' }}
    />
  );
};

export default AutoResizeInput;
