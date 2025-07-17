
import React, { useRef, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface AutoResizeTextareaProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const AutoResizeTextarea = ({ value, onChange, className }: AutoResizeTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.max(60, textareaRef.current.scrollHeight) + 'px';
    }
  }, [value]);

  return (
    <Textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border-none bg-transparent text-xs min-h-[60px] resize-none overflow-hidden ${className}`}
      rows={1}
    />
  );
};

export default AutoResizeTextarea;
