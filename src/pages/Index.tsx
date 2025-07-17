// import React from "react";
// import {
//   SidebarProvider,
//   SidebarInset,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import { AppSidebar } from "../components/AppSidebar";
// import KanbanBoard from "../components/KanbanBoard";

// const Index = () => {
//   return (
//     <SidebarProvider>
//       <div className="min-h-screen flex w-full">
//         <AppSidebar />
//         <SidebarInset className="flex flex-col">
//           <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
//             <SidebarTrigger className="-ml-1" />
//             <div className="flex-1">
//               <h1 className="text-2xl font-bold text-slate-800">
//                 PWF Property & CC Finanace
//               </h1>
//               <p className="text-sm text-slate-600">
//                 Track applications through the entire process
//               </p>
//             </div>
//           </header>
//           <div className="flex-1 p-4 bg-gradient-to-br from-slate-50 to-slate-100">
//             <KanbanBoard />
//           </div>
//         </SidebarInset>
//       </div>
//     </SidebarProvider>
//   );
// };

// export default Index;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "../components/AppSidebar";
import KanbanBoard from "../components/KanbanBoard";
import { 
  FileText, 
  Clock, 
  Search, 
  CheckCircle, 
  XCircle, 
  Users, 
  TrendingUp,
  Building,
  CreditCard,
  LogIn
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <AppSidebar />
        <SidebarInset className="flex flex-col overflow-x-hidden">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-indigo-200/50 px-4 bg-white/80 backdrop-blur-sm shadow-sm">
            <SidebarTrigger className="-ml-1 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-all duration-200 rounded-md" />
            <div className="flex-1 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                    PWF Property & CC Finance
                  </h1>
                  <p className="text-sm text-indigo-600/70 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Track applications through the entire process
                  </p>
                </div>
              </div>
            </div>
            
            {/* Login Button */}
            <Button
              onClick={handleLoginClick}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 transition-all duration-200"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </header>
          <div className="flex-1 p-4 bg-gradient-to-br from-indigo-50/30 via-white/20 to-purple-50/40 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            {/* Pipeline Stage Icons */}
            <div className="relative z-10 mb-4">
              <div className="flex items-center gap-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-indigo-100/50">
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white shadow-md">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-medium">New Applications</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white shadow-md">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">In Review</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white shadow-md">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">Due Diligence</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg text-white shadow-md">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Committee Review</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white shadow-md">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Approved</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white shadow-md">
                  <XCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Declined</span>
                </div>
              </div>
            </div>
            
            {/* Content with subtle animation */}
            <div className="relative z-10 h-full animate-fade-in">
              <KanbanBoard />
            </div>
          </div>
        </SidebarInset>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </SidebarProvider>
  );
};

export default Index;