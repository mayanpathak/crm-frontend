
import React, { useState } from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/AppSidebar';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CancelledTableRow from '../components/cancelled/CancelledTableRow';
import { CancelledRow } from '../types/cancelled';

const initialData: CancelledRow[] = [
  {
    id: '1',
    dateOfConsultation: 'Saturday, 1 March 2025',
    client: 'Panchal',
    strategist: 'Marc',
    consultant: 'Josh',
    creditAnalyst: 'No',
    broker: 'No',
    bcCompleted: '07/03 - Some docs received\nSAB is going to speak with James about this deal. What we are proposing is the client comes in for an initial strategy without a BC and then James can build trust/ collect docs in that appt',
    dateOfPvfReview: '18/03/2025 - Cancelled',
  },
  {
    id: '2',
    dateOfConsultation: 'Wednesday, 14 May 2025',
    client: 'Rahman',
    strategist: 'James',
    consultant: 'Josh',
    creditAnalyst: 'Not allocated',
    broker: 'Not allocated',
    bcCompleted: '15/05/2025 - No docs received\n\nMiss / cancelled as clients did not want to proceed',
    dateOfPvfReview: 'Tuesday, 20 May 2025',
  },
];

const staffOptions = ['Mitch', 'Josh', 'Tim', 'Spencer', 'Dereje', 'Tahmid', 'Zim', 'Rik', 'Kim', 'Marc', 'James', 'N/A'];

const Cancelled = () => {
  const [data, setData] = useState<CancelledRow[]>(initialData);

  const updateCell = (id: string, field: keyof CancelledRow, value: string) => {
    setData(prev => prev.map(row => 
      row.id === id ? { ...row, [field]: value } : row
    ));
  };

  const getStaffColor = (staff: string) => {
    const colors: { [key: string]: string } = {
      'Mitch': 'bg-pink-200',
      'Josh': 'bg-purple-200',
      'Tim': 'bg-green-200',
      'Spencer': 'bg-blue-200',
      'Dereje': 'bg-purple-300',
      'Tahmid': 'bg-green-300',
      'Zim': 'bg-yellow-200',
      'Rik': 'bg-orange-200',
      'Kim': 'bg-blue-300',
      'Marc': 'bg-blue-400',
      'James': 'bg-orange-300',
      'N/A': 'bg-gray-200',
    };
    return colors[staff] || 'bg-gray-100';
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-600">Cancelled</h1>
              <p className="text-sm text-slate-600">Cancelled property consultations and appointments</p>
            </div>
          </header>
          <div className="flex-1 p-4 bg-gradient-to-br from-slate-50 to-slate-100 overflow-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow className="bg-purple-100">
                    <TableHead className="font-semibold text-purple-800 min-w-[150px]">Date of In-Home Consultation</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[120px]">Client</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[100px]">Strategist</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[100px]">Consultant</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[100px]">Credit Analyst</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[100px]">Broker</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[200px]">BC Completed</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[150px]">Date of PVF Strategy Session / Review</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row) => (
                    <CancelledTableRow
                      key={row.id}
                      row={row}
                      updateCell={updateCell}
                      staffOptions={staffOptions}
                      getStaffColor={getStaffColor}
                    />
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Cancelled;
