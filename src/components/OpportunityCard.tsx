// import React, { useState } from "react";
// import { Clock, User, CheckSquare, Calendar, DollarSign } from "lucide-react";
// import { Opportunity } from "../types/crm";
// import OpportunityModal from "./OpportunityModal";
// import OverdueTasks from "@/pages/OverdueTasks";

// interface OpportunityCardProps {
//   opportunity: Opportunity;
//   isDragging: boolean;
// }

// const OpportunityCard = ({ opportunity, isDragging }: OpportunityCardProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const calculateStageTime = () => {
//     const currentStage =
//       opportunity.stageHistory[opportunity.stageHistory.length - 1];
//     if (!currentStage) return "0d";

//     const stageDate = new Date(currentStage.timestamp);
//     const now = new Date();
//     const diffTime = Math.abs(now.getTime() - stageDate.getTime());
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     return `${diffDays}d`;
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

//   const getUpcomingTasks = () => {
//     return opportunity.tasks.filter((task) => !task.completed).slice(0, 3); // Show only first 3 upcoming tasks
//   };
//   const getOverdueTasks = () => {
//     return opportunity.tasks.filter((task) => !task.completed).slice(0, 3); // Show only first 3 upcoming tasks
//   };

//   const formatTaskDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
//   };

//   const upcomingTasks = getUpcomingTasks();
//   const OverdueTasks = getOverdueTasks();

//   return (
//     <>
//       <div
//         className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-3 cursor-pointer hover:shadow-md transition-all duration-200 ${
//           isDragging ? "shadow-lg ring-2 ring-blue-300" : ""
//         }`}
//         onClick={() => setIsModalOpen(true)}>
//         <div className="flex justify-between items-start mb-3">
//           <h4 className="font-semibold text-gray-800 text-sm leading-tight">
//             {opportunity.clientName}
//           </h4>
//           <span
//             className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(
//               opportunity.priority
//             )}`}>
//             {opportunity.priority}
//           </span>
//         </div>
//         <div className="space-y-2 text-xs text-gray-600 mb-3">
//           <div className="flex items-center gap-2">
//             <DollarSign className="w-3 h-3" />
//             <span>${opportunity.loanAmount.toLocaleString()}</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <User className="w-3 h-3" />
//             <span>{opportunity.assignedTo}</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Clock className="w-3 h-3" />
//             <span>In stage: {calculateStageTime()}</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <CheckSquare className="w-3 h-3" />
//             <span>
//               {opportunity.tasks.filter((t) => t.completed).length}/
//               {opportunity.tasks.length} tasks
//             </span>
//           </div>

//           {opportunity.nextMeeting && (
//             <div className="flex items-center gap-2">
//               <Calendar className="w-3 h-3" />
//               <span>
//                 {new Date(opportunity.nextMeeting).toLocaleDateString()}
//               </span>
//             </div>
//           )}
//         </div>
//         {OverdueTasks.length > 0 && (
//           <div className="border-t border-gray-100 pt-3 mb-3">
//             <div className="text-xs font-bold text-red-600 mb-2">
//               Overdue Tasks:
//             </div>
//             <div className="space-y-1">
//               {OverdueTasks.map((task) => (
//                 <div
//                   key={task.id}
//                   className="flex justify-between items-center text-xs">
//                   <span className="text-gray-600 truncate flex-1 mr-2">
//                     {task.title}
//                   </span>
//                   <div className="flex items-center gap-1 text-gray-500 shrink-0">
//                     <Calendar className="w-3 h-3" />
//                     <span>{formatTaskDate(task.createdAt)}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         <div className="border-t border-gray-100 pt-3 mb-3">
//           <div className="text-xs font-bold text-green-600 mb-2">
//             Upcoming Tasks:
//           </div>
//           <div className="space-y-1">
//             {upcomingTasks.map((task) => (
//               <div
//                 key={task.id}
//                 className="flex justify-between items-center text-xs">
//                 <span className="text-gray-600 truncate flex-1 mr-2">
//                   {task.title}
//                 </span>
//                 <div className="flex items-center gap-1 text-gray-500 shrink-0">
//                   <Calendar className="w-3 h-3" />
//                   <span>{formatTaskDate(task.createdAt)}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="pt-2 border-t border-gray-100">
//           <p className="pt-2 text-sm">
//             Mercury Link:{" "}
//             <strong className="text-blue-500">https:mercury.com.au</strong>
//           </p>
//         </div>
//       </div>

//       <OpportunityModal
//         opportunity={opportunity}
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </>
//   );
// };

// export default OpportunityCard;


import React, { useState } from "react";
import { 
  Clock, 
  User, 
  CheckSquare, 
  Calendar, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  TrendingUp,
  Target,
  Timer
} from "lucide-react";
import { Opportunity } from "../types/crm";
import OpportunityModal from "./OpportunityModal";

interface OpportunityCardProps {
  opportunity: Opportunity;
  isDragging: boolean;
}

const OpportunityCard = ({ opportunity, isDragging }: OpportunityCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateStageTime = () => {
    const currentStage =
      opportunity.stageHistory[opportunity.stageHistory.length - 1];
    if (!currentStage) return "0d";

    const stageDate = new Date(currentStage.timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - stageDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return `${diffDays}d`;
  };

  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case "high":
        return {
          bg: "bg-gradient-to-r from-red-500 to-red-600",
          text: "text-white",
          icon: <AlertTriangle className="w-3 h-3" />
        };
      case "medium":
        return {
          bg: "bg-gradient-to-r from-yellow-500 to-orange-500",
          text: "text-white",
          icon: <Target className="w-3 h-3" />
        };
      case "low":
        return {
          bg: "bg-gradient-to-r from-green-500 to-green-600",
          text: "text-white",
          icon: <CheckCircle className="w-3 h-3" />
        };
      default:
        return {
          bg: "bg-gradient-to-r from-gray-500 to-gray-600",
          text: "text-white",
          icon: <Timer className="w-3 h-3" />
        };
    }
  };

  const getUpcomingTasks = () => {
    return opportunity.tasks.filter((task) => !task.completed).slice(0, 3);
  };

  const getOverdueTasks = () => {
    return opportunity.tasks.filter((task) => !task.completed).slice(0, 3);
  };

  const formatTaskDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const upcomingTasks = getUpcomingTasks();
  const overdueTasks = getOverdueTasks();
  const priorityConfig = getPriorityConfig(opportunity.priority);
  const completedTasks = opportunity.tasks.filter((t) => t.completed).length;
  const totalTasks = opportunity.tasks.length;
  const taskProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <>
      <div
        className={`bg-white rounded-xl shadow-md border border-gray-200/50 p-4 mb-3 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden h-[400px] flex flex-col ${
          isDragging ? "shadow-2xl ring-2 ring-blue-400 scale-105" : ""
        }`}
        onClick={() => setIsModalOpen(true)}>
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-800 text-sm leading-tight mb-1 truncate">
                {opportunity.clientName}
              </h4>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-green-600" />
                <span className="text-green-700 font-semibold text-xs">
                  ${opportunity.loanAmount.toLocaleString()}
                </span>
              </div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-semibold ${priorityConfig.bg} ${priorityConfig.text} shadow-sm flex items-center gap-1 flex-shrink-0`}>
              {priorityConfig.icon}
              {opportunity.priority.toUpperCase()}
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2 border border-blue-100">
              <div className="flex items-center gap-1 mb-1">
                <User className="w-3 h-3 text-blue-600" />
                <span className="text-xs font-medium text-blue-700">Assigned</span>
              </div>
              <span className="text-xs font-semibold text-blue-800 truncate block">{opportunity.assignedTo}</span>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-2 border border-purple-100">
              <div className="flex items-center gap-1 mb-1">
                <Clock className="w-3 h-3 text-purple-600" />
                <span className="text-xs font-medium text-purple-700">In stage</span>
              </div>
              <span className="text-xs font-semibold text-purple-800">{calculateStageTime()}</span>
            </div>
          </div>

          {/* Task progress */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">Progress</span>
              </div>
              <span className="text-xs font-semibold text-gray-800">
                {completedTasks}/{totalTasks}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div 
                className="h-1.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${taskProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Next meeting */}
          {opportunity.nextMeeting && (
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-2 border border-orange-100 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-orange-600" />
                <span className="text-xs font-medium text-orange-700">Next Meeting:</span>
                <span className="text-xs font-semibold text-orange-800">
                  {new Date(opportunity.nextMeeting).toLocaleDateString()}
                </span>
              </div>
            </div>
          )}

          {/* Scrollable tasks section */}
          <div className="flex-1 overflow-y-auto">
            {/* Overdue tasks */}
            {overdueTasks.length > 0 && (
              <div className="border border-red-200 rounded-lg p-2 mb-2 bg-gradient-to-r from-red-50 to-red-100">
                <div className="flex items-center gap-1 mb-1">
                  <AlertTriangle className="w-3 h-3 text-red-600" />
                  <span className="text-xs font-bold text-red-700">Overdue ({overdueTasks.length})</span>
                </div>
                <div className="space-y-1">
                  {overdueTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex justify-between items-center bg-white/60 rounded-md p-1">
                      <span className="text-xs text-red-700 truncate flex-1 mr-1 font-medium">
                        {task.title}
                      </span>
                      <span className="text-xs text-red-500 shrink-0">
                        {formatTaskDate(task.createdAt)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming tasks */}
            {upcomingTasks.length > 0 && (
              <div className="border border-green-200 rounded-lg p-2 mb-2 bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex items-center gap-1 mb-1">
                  <CheckSquare className="w-3 h-3 text-green-600" />
                  <span className="text-xs font-bold text-green-700">Upcoming ({upcomingTasks.length})</span>
                </div>
                <div className="space-y-1">
                  {upcomingTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex justify-between items-center bg-white/60 rounded-md p-1">
                      <span className="text-xs text-green-700 truncate flex-1 mr-1 font-medium">
                        {task.title}
                      </span>
                      <span className="text-xs text-green-500 shrink-0">
                        {formatTaskDate(task.createdAt)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mercury link - Fixed at bottom */}
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex items-center gap-1 p-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
              <ExternalLink className="w-3 h-3 text-blue-600" />
              <span className="text-xs text-blue-700">Mercury:</span>
              <a 
                href="https://mercury.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold text-xs hover:underline transition-colors truncate"
                onClick={(e) => e.stopPropagation()}
              >
                mercury.com.au
              </a>
            </div>
          </div>
        </div>
      </div>

      <OpportunityModal
        opportunity={opportunity}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default OpportunityCard;