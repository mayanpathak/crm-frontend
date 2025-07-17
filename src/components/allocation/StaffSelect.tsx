
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface StaffSelectProps {
  value: string;
  onChange: (value: string) => void;
  staffOptions: string[];
  getStaffColor: (staff: string) => string;
}

const StaffSelect = ({ value, onChange, staffOptions, getStaffColor }: StaffSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`border-none text-xs h-8 ${getStaffColor(value)}`}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {staffOptions.map((staff) => (
          <SelectItem key={staff} value={staff} className={`text-xs ${getStaffColor(staff)}`}>
            {staff}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default StaffSelect;
