
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import AutoResizeInput from '../allocation/AutoResizeInput';
import AutoResizeTextarea from '../allocation/AutoResizeTextarea';
import StaffSelect from '../allocation/StaffSelect';

interface CancelledRow {
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

interface CancelledTableRowProps {
  row: CancelledRow;
  updateCell: (id: string, field: keyof CancelledRow, value: string) => void;
  staffOptions: string[];
  getStaffColor: (staff: string) => string;
}

const CancelledTableRow = ({ row, updateCell, staffOptions, getStaffColor }: CancelledTableRowProps) => {
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
        <AutoResizeInput
          value={row.creditAnalyst}
          onChange={(value) => updateCell(row.id, 'creditAnalyst', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.broker}
          onChange={(value) => updateCell(row.id, 'broker', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeTextarea
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

export default CancelledTableRow;
