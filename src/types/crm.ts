
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
  priority: 'high' | 'medium' | 'low';
}

export interface StageHistory {
  stage: string;
  timestamp: string;
  duration: number;
}

export interface Opportunity {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  propertyAddress: string;
  loanAmount: number;
  stageId: string;
  assignedTo: string;
  priority: 'high' | 'medium' | 'low';
  tasks: Task[];
  stageHistory: StageHistory[];
  nextMeeting?: string;
  notes?: string;
}

export interface KanbanStage {
  id: string;
  title: string;
  opportunityIds: string[];
}

export interface KanbanData {
  opportunities: { [key: string]: Opportunity };
  columns: { [key: string]: KanbanStage };
  columnOrder: string[];
}
