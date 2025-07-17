
import React from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../components/AppSidebar';
import TaskKanbanBoard from '../components/TaskKanbanBoard';

const AgentCapacity = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-green-600">Agent Capacity</h1>
              <p className="text-sm text-slate-600">Current workload by agent</p>
            </div>
          </header>
          <div className="flex-1 p-4 bg-gradient-to-br from-green-50 to-green-100">
            <TaskKanbanBoard taskType="capacity" />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AgentCapacity;
