
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Allocation from "./pages/Allocation";
import OverdueTasks from "./pages/OverdueTasks";
import TodaysTasks from "./pages/TodaysTasks";
import UpcomingTasks from "./pages/UpcomingTasks";
import AgentCapacity from "./pages/AgentCapacity";
import DNQ from "./pages/DNQ";
import Miss from "./pages/Miss";
import Cancelled from "./pages/Cancelled";
import Sales from "./pages/Sales";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allocation" element={<Allocation />} />
          <Route path="/overdue-tasks" element={<OverdueTasks />} />
          <Route path="/todays-tasks" element={<TodaysTasks />} />
          <Route path="/upcoming-tasks" element={<UpcomingTasks />} />
          <Route path="/agent-capacity" element={<AgentCapacity />} />
          <Route path="/dnq" element={<DNQ />} />
          <Route path="/miss" element={<Miss />} />
          <Route path="/cancelled" element={<Cancelled />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
