// import React, { useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import {
//   Clock,
//   User,
//   CheckSquare,
//   ClipboardCheck,
//   Calendar,
//   DollarSign,
//   Phone,
//   Mail,
// } from "lucide-react";
// import { Opportunity } from "../types/crm";
// import TaskList from "./TaskList";

// interface OpportunityModalProps {
//   opportunity: Opportunity;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const OpportunityModal = ({
//   opportunity,
//   isOpen,
//   onClose,
// }: OpportunityModalProps) => {
//   const [activeTab, setActiveTab] = useState<"overview" | "tasks" | "timeline">(
//     "overview"
//   );

//   const calculateTotalStageTime = () => {
//     const firstStage = opportunity.stageHistory[0];
//     if (!firstStage) return "0 days";

//     const startDate = new Date(firstStage.timestamp);
//     const now = new Date();
//     const diffTime = Math.abs(now.getTime() - startDate.getTime());
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//     return `${diffDays} days`;
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-xl font-bold">
//             {opportunity.clientName}
//           </DialogTitle>
//         </DialogHeader>

//         <div className="flex gap-4 border-b">
//           <Button
//             variant={activeTab === "overview" ? "default" : "ghost"}
//             onClick={() => setActiveTab("overview")}
//             className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
//             Overview
//           </Button>
//           <Button
//             variant={activeTab === "tasks" ? "default" : "ghost"}
//             onClick={() => setActiveTab("tasks")}
//             className="rounded-none border-b-2 border-transparent">
//             Tasks
//           </Button>
//           <Button
//             variant={activeTab === "timeline" ? "default" : "ghost"}
//             onClick={() => setActiveTab("timeline")}
//             className="rounded-none border-b-2 border-transparent">
//             Timeline
//           </Button>
//         </div>

//         <div className="mt-4">
//           {activeTab === "overview" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-lg">Client 1</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <div className="flex items-center gap-2">
//                     <User className="w-4 h-4 text-gray-500" />
//                     <span>{opportunity.clientName}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Phone className="w-4 h-4 text-gray-500" />
//                     <span>{opportunity.clientPhone}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Mail className="w-4 h-4 text-gray-500" />
//                     <span>{opportunity.clientEmail}</span>
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     <strong>Property:</strong> {opportunity.propertyAddress}
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-lg">Client 2</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <div className="flex items-center gap-2">
//                     <User className="w-4 h-4 text-gray-500" />
//                     <span>{opportunity.clientName}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Phone className="w-4 h-4 text-gray-500" />
//                     <span>{opportunity.clientPhone}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Mail className="w-4 h-4 text-gray-500" />
//                     <span>{opportunity.clientEmail}</span>
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     <strong>Property:</strong> {opportunity.propertyAddress}
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="md:col-span-2">
//                 <CardHeader>
//                   <CardTitle className="text-lg">Loan Details</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <div className="flex items-center gap-2">
//                     <DollarSign className="w-4 h-4 text-gray-500" />
//                     <span>${opportunity.loanAmount.toLocaleString()}</span>
//                   </div>
//                   <div>
//                     <strong>Assigned to:</strong> {opportunity.assignedTo}
//                   </div>
//                   <div>
//                     <strong>Priority:</strong>
//                     <span
//                       className={`ml-2 px-2 py-1 rounded text-xs ${
//                         opportunity.priority === "high"
//                           ? "bg-red-100 text-red-800"
//                           : opportunity.priority === "medium"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : "bg-green-100 text-green-800"
//                       }`}>
//                       {opportunity.priority}
//                     </span>
//                   </div>
//                   {opportunity.nextMeeting && (
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4 text-gray-500" />
//                       <span>
//                         Next meeting:{" "}
//                         {new Date(opportunity.nextMeeting).toLocaleDateString()}
//                       </span>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>

//               <Card className="md:col-span-2">
//                 <CardHeader>
//                   <CardTitle className="text-lg">Time Tracking</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex items-center gap-2 mb-2">
//                     <Clock className="w-4 h-4 text-gray-500" />
//                     <span>
//                       Total time in pipeline: {calculateTotalStageTime()}
//                     </span>
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     Current stage:{" "}
//                     <strong>{opportunity.stageId.replace("-", " ")}</strong>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card className="md:col-span-2">
//                 <CardHeader>
//                   <CardTitle className="text-lg">Mercury Link</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex items-center gap-2 mb-2">
//                     <ClipboardCheck className="w-4 h-4 text-gray-500" />
//                     <span>
//                       Mercury Opportunity UID: <strong> 10124561238</strong>
//                     </span>
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     Current Stage In Mercury:{" "}
//                     <strong>{opportunity.stageId.replace("-", " ")}</strong>
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     Stage Match Check:
//                     <strong className="text-green-600"> TRUE</strong>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           )}

//           {activeTab === "tasks" && <TaskList opportunity={opportunity} />}

//           {activeTab === "timeline" && (
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">Stage Timeline</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {opportunity.stageHistory.map((stage, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-b-0">
//                       <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
//                       <div className="flex-1">
//                         <div className="font-medium">
//                           {stage.stage.replace("-", " ")}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           {new Date(stage.timestamp).toLocaleString()}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default OpportunityModal;



import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Clock,
  User,
  CheckSquare,
  ClipboardCheck,
  Calendar,
  DollarSign,
  Phone,
  Mail,
} from "lucide-react";
import { Opportunity } from "../types/crm";
import TaskList from "./TaskList";

interface OpportunityModalProps {
  opportunity: Opportunity;
  isOpen: boolean;
  onClose: () => void;
}

const OpportunityModal = ({
  opportunity,
  isOpen,
  onClose,
}: OpportunityModalProps) => {
  const [activeTab, setActiveTab] = useState<"overview" | "tasks" | "timeline">(
    "overview"
  );

  const calculateTotalStageTime = () => {
    const firstStage = opportunity.stageHistory[0];
    if (!firstStage) return "0 days";

    const startDate = new Date(firstStage.timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return `${diffDays} days`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-0 shadow-2xl">
        <DialogHeader className="pb-6 border-b border-gray-200 dark:border-gray-700">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {opportunity.clientName}
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-1 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg p-1 mb-6">
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            onClick={() => setActiveTab("overview")}
            className={`flex-1 rounded-md transition-all duration-200 ${
              activeTab === "overview"
                ? "bg-white dark:bg-gray-700 shadow-sm border-0 text-blue-600 dark:text-blue-400"
                : "hover:bg-white/50 dark:hover:bg-gray-700/50"
            }`}>
            Overview
          </Button>
          <Button
            variant={activeTab === "tasks" ? "default" : "ghost"}
            onClick={() => setActiveTab("tasks")}
            className={`flex-1 rounded-md transition-all duration-200 ${
              activeTab === "tasks"
                ? "bg-white dark:bg-gray-700 shadow-sm border-0 text-blue-600 dark:text-blue-400"
                : "hover:bg-white/50 dark:hover:bg-gray-700/50"
            }`}>
            Tasks
          </Button>
          <Button
            variant={activeTab === "timeline" ? "default" : "ghost"}
            onClick={() => setActiveTab("timeline")}
            className={`flex-1 rounded-md transition-all duration-200 ${
              activeTab === "timeline"
                ? "bg-white dark:bg-gray-700 shadow-sm border-0 text-blue-600 dark:text-blue-400"
                : "hover:bg-white/50 dark:hover:bg-gray-700/50"
            }`}>
            Timeline
          </Button>
        </div>

        <div className="mt-0">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-t-lg border-b border-blue-100 dark:border-blue-800">
                  <CardTitle className="text-lg font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Client 1
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <User className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">{opportunity.clientName}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Phone className="w-5 h-5 text-green-500" />
                    <span className="font-medium">{opportunity.clientPhone}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-500" />
                    <span className="font-medium">{opportunity.clientEmail}</span>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <span className="text-sm font-semibold text-amber-800 dark:text-amber-200">Property:</span>
                    <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">{opportunity.propertyAddress}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-t-lg border-b border-purple-100 dark:border-purple-800">
                  <CardTitle className="text-lg font-semibold text-purple-900 dark:text-purple-100 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Client 2
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <User className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">{opportunity.clientName}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Phone className="w-5 h-5 text-green-500" />
                    <span className="font-medium">{opportunity.clientPhone}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-500" />
                    <span className="font-medium">{opportunity.clientEmail}</span>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <span className="text-sm font-semibold text-amber-800 dark:text-amber-200">Property:</span>
                    <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">{opportunity.propertyAddress}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-t-lg border-b border-emerald-100 dark:border-emerald-800">
                  <CardTitle className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Loan Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <span className="text-xl font-bold text-green-800 dark:text-green-200">
                      ${opportunity.loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Assigned to:</span>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{opportunity.assignedTo}</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Priority:</span>
                      <div className="mt-1">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            opportunity.priority === "high"
                              ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                              : opportunity.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                          }`}>
                          {opportunity.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  {opportunity.nextMeeting && (
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-800 dark:text-blue-200">
                        Next meeting: {new Date(opportunity.nextMeeting).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-t-lg border-b border-indigo-100 dark:border-indigo-800">
                  <CardTitle className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Time Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800 mb-4">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium text-indigo-800 dark:text-indigo-200">
                      Total time in pipeline: <span className="font-bold">{calculateTotalStageTime()}</span>
                    </span>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Current stage:</span>
                    <p className="font-medium text-gray-900 dark:text-gray-100 capitalize">
                      {opportunity.stageId.replace("-", " ")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-t-lg border-b border-violet-100 dark:border-violet-800">
                  <CardTitle className="text-lg font-semibold text-violet-900 dark:text-violet-100 flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5" />
                    Mercury Link
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg border border-violet-200 dark:border-violet-800">
                    <ClipboardCheck className="w-5 h-5 text-violet-600" />
                    <span className="text-violet-800 dark:text-violet-200">
                      Mercury Opportunity UID: <span className="font-bold">10124561238</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Current Stage In Mercury:</span>
                      <p className="font-medium text-gray-900 dark:text-gray-100 capitalize">
                        {opportunity.stageId.replace("-", " ")}
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <span className="text-sm font-semibold text-green-700 dark:text-green-300">Stage Match Check:</span>
                      <p className="font-bold text-green-800 dark:text-green-200">TRUE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "tasks" && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-1">
              <TaskList opportunity={opportunity} />
            </div>
          )}

          {activeTab === "timeline" && (
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-t-lg border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Stage Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {opportunity.stageHistory.map((stage, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 pb-6 border-b border-gray-100 dark:border-gray-700 last:border-b-0 group">
                      <div className="relative">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200"></div>
                        {index < opportunity.stageHistory.length - 1 && (
                          <div className="absolute top-4 left-2 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="p-4 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="font-semibold text-slate-900 dark:text-slate-100 capitalize mb-2">
                            {stage.stage.replace("-", " ")}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {new Date(stage.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OpportunityModal;