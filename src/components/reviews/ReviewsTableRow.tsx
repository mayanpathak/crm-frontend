
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import AutoResizeInput from '../allocation/AutoResizeInput';
import AutoResizeTextarea from '../allocation/AutoResizeTextarea';
import StaffSelect from '../allocation/StaffSelect';

interface ReviewsRow {
  id: string;
  dateOfConsultation: string;
  client: string;
  strategist: string;
  consultant: string;
  creditAnalyst: string;
  broker: string;
  typeOfReview: string;
  dateOfReview: string;
  outcome: string;
  submittedForBC: string;
}

interface ReviewsTableRowProps {
  row: ReviewsRow;
  updateCell: (id: string, field: keyof ReviewsRow, value: string) => void;
  staffOptions: string[];
  getStaffColor: (staff: string) => string;
}

const ReviewsTableRow = ({ row, updateCell, staffOptions, getStaffColor }: ReviewsTableRowProps) => {
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
        <AutoResizeInput
          value={row.typeOfReview}
          onChange={(value) => updateCell(row.id, 'typeOfReview', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.dateOfReview}
          onChange={(value) => updateCell(row.id, 'dateOfReview', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeTextarea
          value={row.outcome}
          onChange={(value) => updateCell(row.id, 'outcome', value)}
        />
      </TableCell>
      <TableCell className="p-2">
        <AutoResizeInput
          value={row.submittedForBC}
          onChange={(value) => updateCell(row.id, 'submittedForBC', value)}
        />
      </TableCell>
    </TableRow>
  );
};

export default ReviewsTableRow;
