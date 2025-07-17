
import { KanbanData } from '../types/crm';

export const initialData: KanbanData = {
  opportunities: {
    'opp-1': {
      id: 'opp-1',
      clientName: 'John & Sarah Smith',
      clientEmail: 'john.smith@email.com',
      clientPhone: '+61 400 123 456',
      propertyAddress: '123 Main Street, Sydney NSW 2000',
      loanAmount: 750000,
      stageId: 'awaiting-docs',
      assignedTo: 'Michael Johnson',
      priority: 'high',
      nextMeeting: '2024-12-30T10:00:00',
      tasks: [
        { id: 't1', title: 'Collect income statements', completed: false, createdAt: '2024-12-26T09:00:00', priority: 'high' },
        { id: 't2', title: 'Property valuation', completed: true, createdAt: '2024-12-25T14:00:00', completedAt: '2024-12-26T16:00:00', priority: 'medium' }
      ],
      stageHistory: [
        { stage: 'awaiting-docs', timestamp: '2024-12-20T09:00:00', duration: 0 }
      ]
    },
    'opp-2': {
      id: 'opp-2',
      clientName: 'Emma Wilson',
      clientEmail: 'emma.wilson@email.com',
      clientPhone: '+61 400 789 012',
      propertyAddress: '456 Oak Avenue, Melbourne VIC 3000',
      loanAmount: 520000,
      stageId: 'bc',
      assignedTo: 'Sarah Connor',
      priority: 'medium',
      tasks: [
        { id: 't3', title: 'Credit check complete', completed: true, createdAt: '2024-12-24T11:00:00', completedAt: '2024-12-25T09:00:00', priority: 'high' },
        { id: 't4', title: 'Bank statements review', completed: false, createdAt: '2024-12-25T15:00:00', priority: 'medium' }
      ],
      stageHistory: [
        { stage: 'awaiting-docs', timestamp: '2024-12-18T09:00:00', duration: 2 },
        { stage: 'bc', timestamp: '2024-12-20T14:00:00', duration: 0 }
      ]
    },
    'opp-3': {
      id: 'opp-3',
      clientName: 'David & Lisa Chen',
      clientEmail: 'david.chen@email.com',
      clientPhone: '+61 400 345 678',
      propertyAddress: '789 Elm Road, Brisbane QLD 4000',
      loanAmount: 680000,
      stageId: 'conditional',
      assignedTo: 'Michael Johnson',
      priority: 'medium',
      nextMeeting: '2025-01-05T14:00:00',
      tasks: [
        { id: 't5', title: 'Final property inspection', completed: false, createdAt: '2024-12-26T10:00:00', priority: 'high' },
        { id: 't6', title: 'Insurance arranged', completed: true, createdAt: '2024-12-24T16:00:00', completedAt: '2024-12-25T12:00:00', priority: 'medium' }
      ],
      stageHistory: [
        { stage: 'awaiting-docs', timestamp: '2024-12-15T09:00:00', duration: 3 },
        { stage: 'bc', timestamp: '2024-12-18T14:00:00', duration: 2 },
        { stage: 'bc-completed', timestamp: '2024-12-20T11:00:00', duration: 1 },
        { stage: 'conditional', timestamp: '2024-12-21T16:00:00', duration: 0 }
      ]
    },
    'opp-4': {
      id: 'opp-4',
      clientName: 'Robert Taylor',
      clientEmail: 'robert.taylor@email.com',
      clientPhone: '+61 400 567 890',
      propertyAddress: '321 Pine Street, Perth WA 6000',
      loanAmount: 450000,
      stageId: 'settlement-q1-2025',
      assignedTo: 'Sarah Connor',
      priority: 'low',
      tasks: [
        { id: 't7', title: 'Settlement date confirmed', completed: true, createdAt: '2024-12-20T09:00:00', completedAt: '2024-12-22T14:00:00', priority: 'high' },
        { id: 't8', title: 'Final documents prepared', completed: false, createdAt: '2024-12-26T11:00:00', priority: 'medium' }
      ],
      stageHistory: [
        { stage: 'awaiting-docs', timestamp: '2024-12-10T09:00:00', duration: 5 },
        { stage: 'conditional', timestamp: '2024-12-15T14:00:00', duration: 3 },
        { stage: 'unconditional', timestamp: '2024-12-18T11:00:00', duration: 2 },
        { stage: 'settlement-q1-2025', timestamp: '2024-12-20T16:00:00', duration: 0 }
      ]
    }
  },
  columns: {
    'awaiting-docs': {
      id: 'awaiting-docs',
      title: 'Awaiting Docs',
      opportunityIds: ['opp-1']
    },
    'bc': {
      id: 'bc',
      title: 'BC',
      opportunityIds: ['opp-2']
    },
    'bc-completed': {
      id: 'bc-completed',
      title: 'BC Completed',
      opportunityIds: []
    },
    'strategy-meeting-booked': {
      id: 'strategy-meeting-booked',
      title: 'Strategy Meeting Booked',
      opportunityIds: []
    },
    'finance-meeting-booked': {
      id: 'finance-meeting-booked',
      title: 'Finance Meeting Booked',
      opportunityIds: []
    },
    'pre-lodgement': {
      id: 'pre-lodgement',
      title: 'Pre-Lodgement',
      opportunityIds: []
    },
    'lodged': {
      id: 'lodged',
      title: 'Lodged',
      opportunityIds: []
    },
    'conditional': {
      id: 'conditional',
      title: 'Conditional',
      opportunityIds: ['opp-3']
    },
    'unconditional': {
      id: 'unconditional',
      title: 'Unconditional',
      opportunityIds: []
    },
    'pending-settlement': {
      id: 'pending-settlement',
      title: 'Pending Settlement',
      opportunityIds: []
    },
    'settlement-q1-2025': {
      id: 'settlement-q1-2025',
      title: 'Settlement Q1 2025',
      opportunityIds: ['opp-4']
    },
    'settlement-q2-2025': {
      id: 'settlement-q2-2025',
      title: 'Settlement Q2 2025',
      opportunityIds: []
    },
    'settlement-q3-2025': {
      id: 'settlement-q3-2025',
      title: 'Settlement Q3 2025',
      opportunityIds: []
    },
    'settlement-q4-2025': {
      id: 'settlement-q4-2025',
      title: 'Settlement Q4 2025',
      opportunityIds: []
    },
    'inactive': {
      id: 'inactive',
      title: 'Inactive',
      opportunityIds: []
    },
    'dnq': {
      id: 'dnq',
      title: 'DNQ',
      opportunityIds: []
    }
  },
  columnOrder: [
    'awaiting-docs',
    'bc',
    'bc-completed',
    'strategy-meeting-booked',
    'finance-meeting-booked',
    'pre-lodgement',
    'lodged',
    'conditional',
    'unconditional',
    'pending-settlement',
    'settlement-q1-2025',
    'settlement-q2-2025',
    'settlement-q3-2025',
    'settlement-q4-2025',
    'inactive',
    'dnq'
  ]
};
