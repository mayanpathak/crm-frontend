
import React, { useState } from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/AppSidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import AllocationTableRow from '../components/allocation/AllocationTableRow';
import { AllocationRow } from '../types/allocation';

const initialData: AllocationRow[] = [
  {
    id: '1',
    dateOfConsultation: 'Wednesday, 21 May 2025',
    client: 'Buckley SMSF',
    strategist: 'Mitch',
    consultant: 'Josh',
    creditAnalyst: 'Tahmid',
    broker: 'Rik',
    bcCompleted: 'BC Property: $1,000,000.00\nBC SMSF: $390,000.00',
    dateOfPvfReview: '3/06/2025 - Completed',
    dateOfPropertySelection: '16/06/2025 - Sale',
    updateOnContractSigning: '23/06 - More questions from clients\nMitch has made it clear if IDs and deposit\nnot received by CDB we will have to pull\nthe package',
    dateOfFinanceAppointment: '',
  },
  {
    id: '2',
    dateOfConsultation: 'Friday, 6 June 2025',
    client: 'Kasturi & Rampalli',
    strategist: 'Mitch',
    consultant: 'Josh',
    creditAnalyst: 'Zim',
    broker: 'N/A',
    bcCompleted: 'BC Property: $1,200,000.00\nBC SMSF:',
    dateOfPvfReview: '12/06/2025 - Completed',
    dateOfPropertySelection: '19/06/2025 - Sale',
    updateOnContractSigning: '23/06 - Clients have gone to ground.\nMitch still working on re-engaging',
    dateOfFinanceAppointment: 'N/A - Own finance as employee of ANZ',
  },
];

const staffOptions = ['Mitch', 'Josh', 'Tim', 'Spencer', 'Dereje', 'Tahmid', 'Zim', 'Rik', 'Kim', 'N/A'];

const Allocation = () => {
  const [data, setData] = useState<AllocationRow[]>(initialData);

  const updateCell = (id: string, field: keyof AllocationRow, value: string | Date) => {
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
              <h1 className="text-2xl font-bold text-slate-600">Allocation</h1>
              <p className="text-sm text-slate-600">Manage upcoming appointments and staff allocation</p>
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
                    <TableHead className="font-semibold text-purple-800 min-w-[200px]">Update on Contract Signing</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[150px]">Date of Finance Appointment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row) => (
                    <AllocationTableRow
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

export default Allocation;
