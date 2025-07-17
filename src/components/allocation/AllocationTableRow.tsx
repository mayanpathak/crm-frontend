
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import AutoResizeInput from './AutoResizeInput';
import AutoResizeTextarea from './AutoResizeTextarea';
import StaffSelect from './StaffSelect';
import DatePickerWithText from './DatePickerWithText';

interface AllocationRow {
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
  updateOnContractSigning: string;
  updateOnContractSigningDate?: Date;
  dateOfFinanceAppointment: string;
  dateOfFinanceAppointmentDate?: Date;
}

interface AllocationTableRowProps {
  row: AllocationRow;
  updateCell: (id: string, field: keyof AllocationRow, value: string | Date) => void;
  staffOptions: string[];
  getStaffColor: (staff: string) => string;
}

const AllocationTableRow = ({ row, updateCell, staffOptions, getStaffColor }: AllocationTableRowProps) => {
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
      <TableCell className="p-2 bg-pink-100">
        <AutoResizeInput
          value={row.dateOfPropertySelection}
          onChange={(value) => updateCell(row.id, 'dateOfPropertySelection', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <DatePickerWithText
          date={row.updateOnContractSigningDate}
          text={row.updateOnContractSigning}
          onDateChange={(date) => updateCell(row.id, 'updateOnContractSigningDate', date)}
          onTextChange={(text) => updateCell(row.id, 'updateOnContractSigning', text)}
        />
      </TableCell>
      <TableCell className="p-2">
        <DatePickerWithText
          date={row.dateOfFinanceAppointmentDate}
          text={row.dateOfFinanceAppointment}
          onDateChange={(date) => updateCell(row.id, 'dateOfFinanceAppointmentDate', date)}
          onTextChange={(text) => updateCell(row.id, 'dateOfFinanceAppointment', text)}
        />
      </TableCell>
    </TableRow>
  );
};

export default AllocationTableRow;
