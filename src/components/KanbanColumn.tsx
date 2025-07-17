// import React from "react";
// import { KanbanStage } from "../types/crm";

// interface KanbanColumnProps {
//   column: KanbanStage;
//   children: React.ReactNode;
// }

// const KanbanColumn = ({ column, children }: KanbanColumnProps) => {
//   const getColumnColor = (title: string) => {
//     const colorMap: Record<string, string> = {
//       "Awaiting Docs": "bg-red-500",
//       BC: "bg-orange-500",
//       "BC Completed": "bg-yellow-500",
//       "Strategy Meeting Booked": "bg-blue-500",
//       "Finance Meeting Booked": "bg-indigo-500",
//       "Pre-Lodgement": "bg-purple-500",
//       Lodged: "bg-pink-500",
//       Conditional: "bg-green-500",
//       Unconditional: "bg-emerald-500",
//       "Pending Settlement": "bg-teal-500",
//       "Settlement Q1 2025": "bg-cyan-500",
//       "Settlement Q2 2025": "bg-sky-500",
//       "Settlement Q3 2025": "bg-blue-600",
//       "Settlement Q4 2025": "bg-indigo-600",
//       Inactive: "bg-gray-500",
//       DNQ: "bg-red-600",
//     };
//     return colorMap[title] || "bg-gray-500";
//   };

//   return (
//     <div className="bg-slate-100 rounded-lg shadow-md border border-gray-200 min-w-[300px] max-w-[300px]">
//       <div
//         className={`${getColumnColor(
//           column.title
//         )} text-white p-3 rounded-t-lg`}>
//         <h3 className="font-semibold text-sm">{column.title}</h3>
//         <span className="text-xs opacity-90">
//           {column.opportunityIds.length} Opportunities
//         </span>
//       </div>
//       <div className="p-3">{children}</div>
//     </div>
//   );
// };

// export default KanbanColumn;


import React from "react";
import { KanbanStage } from "../types/crm";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  Calendar,
  Building,
  Briefcase,
  Upload,
  AlertCircle,
  CheckSquare,
  Shield,
  Home,
  TrendingUp,
  XCircle,
  Pause
} from "lucide-react";

interface KanbanColumnProps {
  column: KanbanStage;
  children: React.ReactNode;
}

const KanbanColumn = ({ column, children }: KanbanColumnProps) => {
  const getColumnConfig = (title: string) => {
    const configMap: Record<string, { color: string; icon: React.ReactNode; gradient: string }> = {
      "Awaiting Docs": {
        color: "from-red-500 to-red-600",
        icon: <FileText className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-red-50 to-red-100"
      },
      BC: {
        color: "from-orange-500 to-orange-600",
        icon: <Clock className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-orange-50 to-orange-100"
      },
      "BC Completed": {
        color: "from-yellow-500 to-yellow-600",
        icon: <CheckCircle className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-yellow-50 to-yellow-100"
      },
      "Strategy Meeting Booked": {
        color: "from-blue-500 to-blue-600",
        icon: <Calendar className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-blue-50 to-blue-100"
      },
      "Finance Meeting Booked": {
        color: "from-indigo-500 to-indigo-600",
        icon: <Briefcase className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-indigo-50 to-indigo-100"
      },
      "Pre-Lodgement": {
        color: "from-purple-500 to-purple-600",
        icon: <Upload className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-purple-50 to-purple-100"
      },
      Lodged: {
        color: "from-pink-500 to-pink-600",
        icon: <CheckSquare className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-pink-50 to-pink-100"
      },
      Conditional: {
        color: "from-green-500 to-green-600",
        icon: <AlertCircle className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-green-50 to-green-100"
      },
      Unconditional: {
        color: "from-emerald-500 to-emerald-600",
        icon: <Shield className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-emerald-50 to-emerald-100"
      },
      "Pending Settlement": {
        color: "from-teal-500 to-teal-600",
        icon: <Home className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-teal-50 to-teal-100"
      },
      "Settlement Q1 2025": {
        color: "from-cyan-500 to-cyan-600",
        icon: <TrendingUp className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-cyan-50 to-cyan-100"
      },
      "Settlement Q2 2025": {
        color: "from-sky-500 to-sky-600",
        icon: <TrendingUp className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-sky-50 to-sky-100"
      },
      "Settlement Q3 2025": {
        color: "from-blue-600 to-blue-700",
        icon: <TrendingUp className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-blue-50 to-blue-100"
      },
      "Settlement Q4 2025": {
        color: "from-indigo-600 to-indigo-700",
        icon: <TrendingUp className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-indigo-50 to-indigo-100"
      },
      Inactive: {
        color: "from-gray-500 to-gray-600",
        icon: <Pause className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-gray-50 to-gray-100"
      },
      DNQ: {
        color: "from-red-600 to-red-700",
        icon: <XCircle className="w-4 h-4" />,
        gradient: "bg-gradient-to-br from-red-50 to-red-100"
      },
    };
    return configMap[title] || {
      color: "from-gray-500 to-gray-600",
      icon: <Building className="w-4 h-4" />,
      gradient: "bg-gradient-to-br from-gray-50 to-gray-100"
    };
  };

  const config = getColumnConfig(column.title);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200/50 min-w-[300px] max-w-[300px] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`bg-gradient-to-r ${config.color} text-white p-4 rounded-t-xl relative overflow-hidden`}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-white/10 opacity-20">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full transform -translate-x-6 translate-y-6"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1 bg-white/20 rounded-md backdrop-blur-sm">
              {config.icon}
            </div>
            <h3 className="font-semibold text-sm flex-1">{column.title}</h3>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs opacity-90 font-medium">
              {column.opportunityIds.length} Opportunities
            </span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`p-4 ${config.gradient} min-h-[200px] rounded-b-xl`}>
        <div className="space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default KanbanColumn;