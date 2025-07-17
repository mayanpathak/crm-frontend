// import React from "react";
// import { User, Clock, CheckSquare, Calendar } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { initialData } from "../data/initialData";

// interface TaskKanbanBoardProps {
//   taskType: "overdue" | "today" | "upcoming" | "capacity";
// }

// const TaskKanbanBoard = ({ taskType }: TaskKanbanBoardProps) => {
//   const agents = [
//     "Kim Edwards",
//     "Rik Taylor ",
//     "Zahirul Zim",
//     "Tahmid Hassan",
//     "Sajib Ahmed",
//   ];

//   const getTasksForAgent = (agent: string) => {
//     const allTasks = Object.values(initialData.opportunities).flatMap(
//       (opportunity) =>
//         opportunity.tasks.map((task) => ({
//           ...task,
//           clientName: opportunity.clientName,
//           opportunityId: opportunity.id,
//           assignedTo: opportunity.assignedTo,
//         }))
//     );

//     const agentTasks = allTasks.filter((task) => task.assignedTo === agent);

//     switch (taskType) {
//       case "overdue":
//         return agentTasks.filter((task) => {
//           const createdDate = new Date(task.createdAt);
//           const daysSinceCreated = Math.floor(
//             (Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
//           );
//           return !task.completed && daysSinceCreated > 3;
//         });
//       case "today":
//         return agentTasks.filter((task) => {
//           const createdDate = new Date(task.createdAt);
//           const isToday =
//             createdDate.toDateString() === new Date().toDateString();
//           return !task.completed && isToday;
//         });
//       case "upcoming":
//         return agentTasks.filter((task) => {
//           const createdDate = new Date(task.createdAt);
//           const daysSinceCreated = Math.floor(
//             (Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
//           );
//           return !task.completed && daysSinceCreated <= 3;
//         });
//       case "capacity":
//         return agentTasks.filter((task) => !task.completed);
//       default:
//         return agentTasks;
//     }
//   };

//   const getColumnColor = (taskType: string) => {
//     switch (taskType) {
//       case "overdue":
//         return "bg-red-500";
//       case "today":
//         return "bg-blue-500";
//       case "upcoming":
//         return "bg-orange-500";
//       case "capacity":
//         return "bg-green-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case "high":
//         return "bg-red-100 text-red-800 border-red-200";
//       case "medium":
//         return "bg-yellow-100 text-yellow-800 border-yellow-200";
//       case "low":
//         return "bg-green-100 text-green-800 border-green-200";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   return (
//     <div className="flex gap-4 overflow-x-auto pb-4">
//       {agents.map((agent) => {
//         const tasks = getTasksForAgent(agent);

//         return (
//           <div
//             key={agent}
//             className="bg-slate-100 rounded-md shadow-sm border border-gray-200 min-w-[300px] max-w-[300px]">
//             <div
//               className={`${getColumnColor(
//                 taskType
//               )} text-white p-3 rounded-t-lg`}>
//               <div className="flex items-center gap-2 mb-1">
//                 <User className="w-4 h-4" />
//                 <h3 className="font-semibold text-sm">{agent}</h3>
//               </div>
//               <span className="text-xs opacity-90">{tasks.length} tasks</span>
//             </div>
//             <div className="p-3 space-y-3">
//               {tasks.length === 0 ? (
//                 <div className="text-center text-gray-500 py-8">
//                   <CheckSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
//                   <p className="text-sm">No tasks</p>
//                 </div>
//               ) : (
//                 tasks.map((task) => (
//                   <Card
//                     key={task.id}
//                     className="hover:shadow-md transition-shadow cursor-pointer">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-sm font-medium">
//                         {task.title}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="pt-0">
//                       <div className="space-y-2 text-xs text-gray-600">
//                         <div className="flex items-center justify-between">
//                           <span className="text-gray-800 font-medium">
//                             {task.clientName}
//                           </span>
//                           <span
//                             className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(
//                               task.priority
//                             )}`}>
//                             {task.priority}
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Clock className="w-3 h-3" />
//                           <span>
//                             Created:{" "}
//                             {new Date(task.createdAt).toLocaleDateString()}
//                           </span>
//                         </div>
//                         {taskType === "overdue" && (
//                           <div className="text-red-600 text-xs font-medium">
//                             Overdue by{" "}
//                             {Math.floor(
//                               (Date.now() -
//                                 new Date(task.createdAt).getTime()) /
//                                 (1000 * 60 * 60 * 24)
//                             ) - 3}{" "}
//                             days
//                           </div>
//                         )}
//                         {taskType === "capacity" && (
//                           <div className="flex items-center gap-2">
//                             <Calendar className="w-3 h-3" />
//                             <span>
//                               {Math.floor(
//                                 (Date.now() -
//                                   new Date(task.createdAt).getTime()) /
//                                   (1000 * 60 * 60 * 24)
//                               )}{" "}
//                               days old
//                             </span>
//                           </div>
//                         )}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default TaskKanbanBoard;



import React from "react";
import { User, Clock, CheckSquare, Calendar, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { initialData } from "../data/initialData";

interface TaskKanbanBoardProps {
  taskType: "overdue" | "today" | "upcoming" | "capacity";
}

const TaskKanbanBoard = ({ taskType }: TaskKanbanBoardProps) => {
  const agents = [
    "Kim Edwards",
    "Rik Taylor ",
    "Zahirul Zim",
    "Tahmid Hassan",
    "Sajib Ahmed",
  ];

  const getTasksForAgent = (agent: string) => {
    const allTasks = Object.values(initialData.opportunities).flatMap(
      (opportunity) =>
        opportunity.tasks.map((task) => ({
          ...task,
          clientName: opportunity.clientName,
          opportunityId: opportunity.id,
          assignedTo: opportunity.assignedTo,
        }))
    );

    const agentTasks = allTasks.filter((task) => task.assignedTo === agent);

    switch (taskType) {
      case "overdue":
        return agentTasks.filter((task) => {
          const createdDate = new Date(task.createdAt);
          const daysSinceCreated = Math.floor(
            (Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
          );
          return !task.completed && daysSinceCreated > 3;
        });
      case "today":
        return agentTasks.filter((task) => {
          const createdDate = new Date(task.createdAt);
          const isToday =
            createdDate.toDateString() === new Date().toDateString();
          return !task.completed && isToday;
        });
      case "upcoming":
        return agentTasks.filter((task) => {
          const createdDate = new Date(task.createdAt);
          const daysSinceCreated = Math.floor(
            (Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
          );
          return !task.completed && daysSinceCreated <= 3;
        });
      case "capacity":
        return agentTasks.filter((task) => !task.completed);
      default:
        return agentTasks;
    }
  };

  const getColumnStyles = (taskType: string) => {
    switch (taskType) {
      case "overdue":
        return {
          header: "bg-gradient-to-r from-red-500 to-red-600",
          accent: "border-red-200 bg-red-50",
          shadow: "shadow-red-100"
        };
      case "today":
        return {
          header: "bg-gradient-to-r from-blue-500 to-blue-600",
          accent: "border-blue-200 bg-blue-50",
          shadow: "shadow-blue-100"
        };
      case "upcoming":
        return {
          header: "bg-gradient-to-r from-orange-500 to-orange-600",
          accent: "border-orange-200 bg-orange-50",
          shadow: "shadow-orange-100"
        };
      case "capacity":
        return {
          header: "bg-gradient-to-r from-green-500 to-green-600",
          accent: "border-green-200 bg-green-50",
          shadow: "shadow-green-100"
        };
      default:
        return {
          header: "bg-gradient-to-r from-gray-500 to-gray-600",
          accent: "border-gray-200 bg-gray-50",
          shadow: "shadow-gray-100"
        };
    }
  };

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-300 shadow-red-100";
      case "medium":
        return "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300 shadow-yellow-100";
      case "low":
        return "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300 shadow-green-100";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-300 shadow-gray-100";
    }
  };

  const getTaskTypeIcon = (taskType: string) => {
    switch (taskType) {
      case "overdue":
        return <AlertCircle className="w-4 h-4" />;
      case "today":
        return <Clock className="w-4 h-4" />;
      case "upcoming":
        return <Calendar className="w-4 h-4" />;
      case "capacity":
        return <CheckSquare className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getTaskTypeLabel = (taskType: string) => {
    switch (taskType) {
      case "overdue":
        return "Overdue Tasks";
      case "today":
        return "Today's Tasks";
      case "upcoming":
        return "Upcoming Tasks";
      case "capacity":
        return "All Active Tasks";
      default:
        return "Tasks";
    }
  };

  return (
    <div className="flex gap-6 overflow-x-auto pb-6 px-1">
      {agents.map((agent) => {
        const tasks = getTasksForAgent(agent);
        const columnStyles = getColumnStyles(taskType);

        return (
          <div
            key={agent}
            className={`bg-white rounded-xl shadow-lg border-0 min-w-[320px] max-w-[320px] ${columnStyles.shadow} hover:shadow-xl transition-shadow duration-300`}>
            <div
              className={`${columnStyles.header} text-white p-4 rounded-t-xl relative overflow-hidden`}>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{agent.trim()}</h3>
                    <p className="text-xs opacity-90">{getTaskTypeLabel(taskType)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
                  </span>
                  <div className="p-1 bg-white/20 rounded-lg backdrop-blur-sm">
                    {getTaskTypeIcon(taskType)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
                {tasks.length === 0 ? (
                  <div className="text-center text-gray-500 py-12">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${columnStyles.accent} flex items-center justify-center`}>
                      <CheckSquare className="w-8 h-8 opacity-60" />
                    </div>
                    <p className="text-sm font-medium">No tasks</p>
                    <p className="text-xs text-gray-400 mt-1">All caught up!</p>
                  </div>
                ) : (
                  tasks.map((task, index) => (
                    <Card
                      key={task.id}
                      className={`hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:scale-[1.02] hover:-translate-y-1 ${
                        taskType === "overdue" ? "hover:shadow-red-200" : 
                        taskType === "today" ? "hover:shadow-blue-200" :
                        taskType === "upcoming" ? "hover:shadow-orange-200" :
                        "hover:shadow-green-200"
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                          {task.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate max-w-[120px]">
                            {task.clientName}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold border shadow-sm ${getPriorityStyles(
                              task.priority
                            )}`}>
                            {task.priority.toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <div className="p-1 bg-gray-100 dark:bg-gray-700 rounded">
                              <Clock className="w-3 h-3" />
                            </div>
                            <span>
                              Created: {new Date(task.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          
                          {taskType === "overdue" && (
                            <div className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                              <AlertCircle className="w-4 h-4 text-red-500" />
                              <span className="text-red-700 dark:text-red-300 text-xs font-medium">
                                Overdue by{" "}
                                {Math.floor(
                                  (Date.now() - new Date(task.createdAt).getTime()) /
                                    (1000 * 60 * 60 * 24)
                                ) - 3}{" "}
                                {Math.floor(
                                  (Date.now() - new Date(task.createdAt).getTime()) /
                                    (1000 * 60 * 60 * 24)
                                ) - 3 === 1 ? 'day' : 'days'}
                              </span>
                            </div>
                          )}
                          
                          {taskType === "capacity" && (
                            <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                              <Calendar className="w-4 h-4 text-green-500" />
                              <span className="text-green-700 dark:text-green-300 text-xs font-medium">
                                {Math.floor(
                                  (Date.now() - new Date(task.createdAt).getTime()) /
                                    (1000 * 60 * 60 * 24)
                                )}{" "}
                                {Math.floor(
                                  (Date.now() - new Date(task.createdAt).getTime()) /
                                    (1000 * 60 * 60 * 24)
                                ) === 1 ? 'day' : 'days'} old
                              </span>
                            </div>
                          )}

                          {taskType === "today" && (
                            <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                              <Clock className="w-4 h-4 text-blue-500" />
                              <span className="text-blue-700 dark:text-blue-300 text-xs font-medium">
                                Due today
                              </span>
                            </div>
                          )}

                          {taskType === "upcoming" && (
                            <div className="flex items-center gap-2 p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                              <Calendar className="w-4 h-4 text-orange-500" />
                              <span className="text-orange-700 dark:text-orange-300 text-xs font-medium">
                                Within 3 days
                              </span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        );
      })}
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TaskKanbanBoard;