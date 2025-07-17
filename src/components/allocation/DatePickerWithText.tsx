
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DatePickerWithTextProps {
  date?: Date;
  text: string;
  onDateChange: (date?: Date) => void;
  onTextChange: (text: string) => void;
}

const DatePickerWithText = ({ 
  date, 
  text, 
  onDateChange, 
  onTextChange 
}: DatePickerWithTextProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.max(40, textareaRef.current.scrollHeight) + 'px';
    }
  }, [text]);

  return (
    <div className="space-y-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal text-xs h-8",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-3 w-3" />
            {date ? format(date, "dd/MM/yyyy") : <span>Select date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            initialFocus
            className="p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
      <Textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        className="border-none bg-transparent text-xs min-h-[40px] resize-none overflow-hidden"
        rows={1}
        placeholder="Add notes..."
      />
    </div>
  );
};

export default DatePickerWithText;
