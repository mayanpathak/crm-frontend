
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
import MissTableRow from '../components/miss/MissTableRow';
import { MissRow } from '../types/miss';

const initialData: MissRow[] = [
  {
    id: '1',
    dateOfConsultation: 'Wednesday, 6 November 2024',
    client: 'Nagel',
    strategist: 'Tim',
    consultant: 'Spencer',
    creditAnalyst: 'Zim',
    broker: 'Mitch',
    bcCompleted: 'Yes - BC $750k',
    dateOfPvfReview: '27/11/2024 - Completed',
    dateOfPropertySelection: '20/01/2025 - Completed\nOutcome: Miss',
    dateOfContractSigning: '',
    dateOfFinanceAppointment: '',
  },
  {
    id: '2',
    dateOfConsultation: 'Saturday, 14 December 2024',
    client: 'Leaman',
    strategist: 'Marc',
    consultant: 'Josh',
    creditAnalyst: 'Zim',
    broker: 'Jules',
    bcCompleted: 'Yes',
    dateOfPvfReview: '13/01/2025 - Completed',
    dateOfPropertySelection: '13/02/2025 - Completed\nOutcome: Miss',
    dateOfContractSigning: '06/02/2025 - Completed\n2nd Finance Appt - Friday, 14 Feb\n- Client not using CC',
    dateOfFinanceAppointment: '',
  },
];

const staffOptions = ['Mitch', 'Josh', 'Tim', 'Spencer', 'Dereje', 'Tahmid', 'Zim', 'Rik', 'Kim', 'Marc', 'Jules', 'N/A'];

const Miss = () => {
  const [data, setData] = useState<MissRow[]>(initialData);

  const updateCell = (id: string, field: keyof MissRow, value: string) => {
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
      'Jules': 'bg-orange-300',
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
              <h1 className="text-2xl font-bold text-slate-600">Miss</h1>
              <p className="text-sm text-slate-600">Property opportunities that were missed</p>
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
                    <TableHead className="font-semibold text-purple-800 min-w-[150px]">BC Completed</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[150px]">Date of PVF Strategy Session / Review</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[150px]">Date of Property Selection</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[200px]">Date of Contract Signing Appointment</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[150px]">Date of Finance Appointment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row) => (
                    <MissTableRow
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

export default Miss;
