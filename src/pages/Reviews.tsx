
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
import ReviewsTableRow from '../components/reviews/ReviewsTableRow';
import { ReviewsRow } from '../types/reviews';

const initialData: ReviewsRow[] = [
  {
    id: '1',
    dateOfConsultation: 'Friday, 2 May 2025',
    client: 'Ah Sam & Kendall',
    strategist: 'Tim',
    consultant: 'Josh',
    creditAnalyst: 'Not allocated',
    broker: 'Not allocated',
    typeOfReview: 'Handover Review',
    dateOfReview: '07/05/2025 - Completed',
    outcome: '17/06 - Ronald still on work cover until end of July. Rebecca started her new job last week, gets first payslip on 24/6 and will send to me to assess BC based on Ronalds work cover. If that doesnt BC, will need to wait until he is back PFT.',
    submittedForBC: '',
  },
  {
    id: '2',
    dateOfConsultation: 'N/A',
    client: 'Colmer',
    strategist: 'Tim',
    consultant: 'Tim',
    creditAnalyst: 'Not allocated',
    broker: 'Not allocated',
    typeOfReview: 'Annual Review',
    dateOfReview: '12/05/2025 - Completed',
    outcome: '17/06 - Clients still havent sent the BC docs, despite repeated requests. Have marked the Review as Complete and set a task for annual review in 12 months. NFA',
    submittedForBC: 'Miss. Task set for 12 months to follow up',
  },
];

const staffOptions = ['Mitch', 'Josh', 'Tim', 'Spencer', 'Dereje', 'Tahmid', 'Zim', 'Rik', 'Kim', 'Marc', 'N/A'];

const Reviews = () => {
  const [data, setData] = useState<ReviewsRow[]>(initialData);

  const updateCell = (id: string, field: keyof ReviewsRow, value: string) => {
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
              <h1 className="text-2xl font-bold text-slate-600">Reviews</h1>
              <p className="text-sm text-slate-600">Client reviews and assessment outcomes</p>
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
                    <TableHead className="font-semibold text-purple-800 min-w-[120px]">Type of Review</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[120px]">Date of Review</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[200px]">Outcome</TableHead>
                    <TableHead className="font-semibold text-purple-800 min-w-[150px]">Submitted for BC</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row) => (
                    <ReviewsTableRow
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

export default Reviews;
