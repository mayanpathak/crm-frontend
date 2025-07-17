
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import AutoResizeInput from '../allocation/AutoResizeInput';
import StaffSelect from '../allocation/StaffSelect';

interface SalesRow {
  id: string;
  dateOfConsultation: string;
  client: string;
  strategist: string;
  consultant: string;
  creditAnalyst: string;
  broker: string;
  bcCompleted: string;
  dateOfPvfReview: string;
  dateOfPropertySelection: string;
  dateOfContractSigning: string;
  dateOfFinanceAppointment: string;
}

interface SalesTableRowProps {
  row: SalesRow;
  updateCell: (id: string, field: keyof SalesRow, value: string) => void;
  staffOptions: string[];
  getStaffColor: (staff: string) => string;
}

const SalesTableRow = ({ row, updateCell, staffOptions, getStaffColor }: SalesTableRowProps) => {
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
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.dateOfPropertySelection}
          onChange={(value) => updateCell(row.id, 'dateOfPropertySelection', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.dateOfContractSigning}
          onChange={(value) => updateCell(row.id, 'dateOfContractSigning', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.dateOfFinanceAppointment}
          onChange={(value) => updateCell(row.id, 'dateOfFinanceAppointment', value)}
        />
      </TableCell>
    </TableRow>
  );
};

export default SalesTableRow;
