
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
import DNQTableRow from '../components/dnq/DNQTableRow';
import { DNQRow } from '../types/dnq';

const initialData: DNQRow[] = [
  {
    id: '1',
    dateOfConsultation: 'Friday, 10 January 2025',
    client: 'Ferencdy',
    strategist: 'Marc',
    consultant: 'Josh',
    creditAnalyst: 'Zim',
    broker: 'Mitch',
    bcCompleted: '24/01/2025 - DNQ',
    dateOfPvfReview: '14/01/2025 - Cancelled as DNQ',
  },
  {
    id: '2',
    dateOfConsultation: 'Tuesday, 14 January 2025',
    client: 'Abraham, Harveen',
    strategist: 'Marc',
    consultant: 'Spencer',
    creditAnalyst: 'Zim',
    broker: 'N/A',
    bcCompleted: '16/01/2025 - DNQ',
    dateOfPvfReview: '16/01/2025 - Cancelled as DNQ',
  },
];

const staffOptions = ['Mitch', 'Josh', 'Tim', 'Spencer', 'Dereje', 'Tahmid', 'Zim', 'Rik', 'Kim', 'Marc', 'N/A'];

const DNQ = () => {
  const [data, setData] = useState<DNQRow[]>(initialData);

  const updateCell = (id: string, field: keyof DNQRow, value: string) => {
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
      'Marc': 'bg-pink-300',
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
              <h1 className="text-2xl font-bold text-slate-600">DNQ</h1>
              <p className="text-sm text-slate-600">Did Not Qualify - Property consultation outcomes</p>
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row) => (
                    <DNQTableRow
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

export default DNQ;
