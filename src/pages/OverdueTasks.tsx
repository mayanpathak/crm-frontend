
import React from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/AppSidebar';
import TaskKanbanBoard from '../components/TaskKanbanBoard';

const OverdueTasks = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-red-600">Overdue Tasks</h1>
              <p className="text-sm text-slate-600">Tasks that are past their due date</p>
            </div>
          </header>
          <div className="flex-1 p-4 bg-gradient-to-br from-red-50 to-red-100">
            <TaskKanbanBoard taskType="overdue" />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default OverdueTasks;
