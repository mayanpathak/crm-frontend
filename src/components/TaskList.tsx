
// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { CheckSquare, Square, Plus, Clock } from 'lucide-react';
// import { Opportunity, Task } from '../types/crm';

// interface TaskListProps {
//   opportunity: Opportunity;
// }

// const TaskList = ({ opportunity }: TaskListProps) => {
//   const [tasks, setTasks] = useState(opportunity.tasks);
//   const [newTask, setNewTask] = useState('');

//   const toggleTask = (taskId: string) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId 
//         ? { ...task, completed: !task.completed, completedAt: !task.completed ? new Date().toISOString() : undefined }
//         : task
//     ));
//   };

//   const addTask = () => {
//     if (newTask.trim()) {
//       const task: Task = {
//         id: `task-${Date.now()}`,
//         title: newTask.trim(),
//         completed: false,
//         createdAt: new Date().toISOString(),
//         priority: 'medium'
//       };
//       setTasks([...tasks, task]);
//       setNewTask('');
//     }
//   };

//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case 'high': return 'text-red-600';
//       case 'medium': return 'text-yellow-600';
//       case 'low': return 'text-green-600';
//       default: return 'text-gray-600';
//     }
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="text-lg flex items-center gap-2">
//           <CheckSquare className="w-5 h-5" />
//           Tasks ({tasks.filter(t => t.completed).length}/{tasks.length})
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-3 mb-4">
//           {tasks.map((task) => (
//             <div key={task.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
//               <button
//                 onClick={() => toggleTask(task.id)}
//                 className="mt-0.5 text-blue-600 hover:text-blue-800"
//               >
//                 {task.completed ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
//               </button>
//               <div className="flex-1">
//                 <div className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
//                   {task.title}
//                 </div>
//                 <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
//                   <span className={getPriorityColor(task.priority)}>
//                     {task.priority} priority
//                   </span>
//                   <div className="flex items-center gap-1">
//                     <Clock className="w-3 h-3" />
//                     <span>{new Date(task.createdAt).toLocaleDateString()}</span>
//                   </div>
//                   {task.completedAt && (
//                     <span className="text-green-600">
//                       Completed {new Date(task.completedAt).toLocaleDateString()}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//             placeholder="Add a new task..."
//             className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onKeyPress={(e) => e.key === 'Enter' && addTask()}
//           />
//           <Button onClick={addTask} size="sm">
//             <Plus className="w-4 h-4" />
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default TaskList;


import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckSquare, Square, Plus, Clock } from 'lucide-react';
import { Opportunity, Task } from '../types/crm';

interface TaskListProps {
  opportunity: Opportunity;
}

const TaskList = ({ opportunity }: TaskListProps) => {
  const [tasks, setTasks] = useState(opportunity.tasks);
  const [newTask, setNewTask] = useState('');

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed, completedAt: !task.completed ? new Date().toISOString() : undefined }
        : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: `task-${Date.now()}`,
        title: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
        priority: 'medium'
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPriorityDot = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-amber-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;

  return (
    <Card className="shadow-lg border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
        <CardTitle className="flex items-center justify-between text-gray-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <CheckSquare className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-lg font-semibold">Tasks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white px-3 py-1 rounded-full shadow-sm border">
              <span className="text-sm font-medium text-gray-600">
                {completedCount}/{totalTasks}
              </span>
            </div>
            {totalTasks > 0 && (
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(completedCount / totalTasks) * 100}%` }}
                />
              </div>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-3 mb-6">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className={`group relative p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                task.completed 
                  ? 'bg-gray-50 border-gray-200 opacity-75' 
                  : 'bg-white border-gray-200 hover:border-blue-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="mt-0.5 text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:scale-105"
                >
                  {task.completed ? (
                    <CheckSquare className="w-5 h-5" />
                  ) : (
                    <Square className="w-5 h-5 hover:bg-blue-50 rounded" />
                  )}
                </button>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`font-medium text-gray-900 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                      {task.title}
                    </h3>
                    <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                      <div className={`w-2 h-2 rounded-full ${getPriorityDot(task.priority)}`} />
                      {task.priority}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Created {new Date(task.createdAt).toLocaleDateString()}</span>
                    </div>
                    
                    {task.completedAt && (
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckSquare className="w-3 h-3" />
                        <span>Completed {new Date(task.completedAt).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors duration-200">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-700 transition-all duration-200"
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <Button 
            onClick={addTask}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Task
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskList;