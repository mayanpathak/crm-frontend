
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import AutoResizeInput from '../allocation/AutoResizeInput';
import StaffSelect from '../allocation/StaffSelect';

interface DNQRow {
  id: string;
  dateOfConsultation: string;
  client: string;
  strategist: string;
  consultant: string;
  creditAnalyst: string;
  broker: string;
  bcCompleted: string;
  dateOfPvfReview: string;
}

interface DNQTableRowProps {
  row: DNQRow;
  updateCell: (id: string, field: keyof DNQRow, value: string) => void;
  staffOptions: string[];
  getStaffColor: (staff: string) => string;
}

const DNQTableRow = ({ row, updateCell, staffOptions, getStaffColor }: DNQTableRowProps) => {
  return (
    <TableRow key={row.id} className="border-b">
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.dateOfConsultation}
          onChange={(value) => updateCell(row.id, 'dateOfConsultation', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.client}
          onChange={(value) => updateCell(row.id, 'client', value)}
          className="font-medium"
        />
      </TableCell>
      <TableCell className="p-2">
        <StaffSelect
          value={row.strategist}
          onChange={(value) => updateCell(row.id, 'strategist', value)}
          staffOptions={staffOptions}
          getStaffColor={getStaffColor}
        />
      </TableCell>
      <TableCell className="p-2">
        <StaffSelect
          value={row.consultant}
          onChange={(value) => updateCell(row.id, 'consultant', value)}
          staffOptions={staffOptions}
          getStaffColor={getStaffColor}
        />
      </TableCell>
      <TableCell className="p-2">
        <StaffSelect
          value={row.creditAnalyst}
          onChange={(value) => updateCell(row.id, 'creditAnalyst', value)}
          staffOptions={staffOptions}
          getStaffColor={getStaffColor}
        />
      </TableCell>
      <TableCell className="p-2">
        <StaffSelect
          value={row.broker}
          onChange={(value) => updateCell(row.id, 'broker', value)}
          staffOptions={staffOptions}
          getStaffColor={getStaffColor}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.bcCompleted}
          onChange={(value) => updateCell(row.id, 'bcCompleted', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.dateOfPvfReview}
          onChange={(value) => updateCell(row.id, 'dateOfPvfReview', value)}
        />
      </TableCell>
    </TableRow>
  );
};

export default DNQTableRow;
