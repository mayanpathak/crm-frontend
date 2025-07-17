// import React from "react";
// import {
//   ClockIcon,
//   Calendar,
//   Users,
//   CheckSquare,
//   LayoutDashboard,
//   Book,
//   DollarSign,
//   Cross,
//   MinusSquare,
//   Presentation,
//   SlashSquare,
// } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarHeader,
// } from "@/components/ui/sidebar";

// const property = [
//   {
//     title: "Allocation",
//     icon: Calendar,
//     url: "/allocation",
//     color: "text-slate-600",
//   },
//   // {
//   //   title: "Upcoming Appointments",
//   //   icon: ClockIcon,
//   //   url: "/",
//   //   color: "text-red-600",
//   // },
//   {
//     title: "Reviews",
//     icon: Presentation,
//     url: "/reviews",
//     color: "text-blue-600",
//   },
//   {
//     title: "Sales",
//     icon: DollarSign,
//     url: "/sales",
//     color: "text-green-600",
//   },
//   {
//     title: "Cancelled",
//     icon: MinusSquare,
//     url: "/cancelled",
//     color: "text-red-600",
//   },
//   {
//     title: "Miss",
//     icon: MinusSquare,
//     url: "/miss",
//     color: "text-yellow-600",
//   },
//   {
//     title: "DNQ",
//     icon: SlashSquare,
//     url: "/dnq",
//     color: "text-red-600",
//   },
// ];

// const finance = [
//   {
//     title: "Pipeline",
//     icon: LayoutDashboard,
//     url: "/",
//     color: "text-slate-600",
//   },
//   {
//     title: "Overdue Tasks",
//     icon: ClockIcon,
//     url: "/overdue-tasks",
//     color: "text-red-600",
//   },
//   {
//     title: "Todays Tasks",
//     icon: CheckSquare,
//     url: "/todays-tasks",
//     color: "text-blue-600",
//   },
//   {
//     title: "Upcoming Tasks",
//     icon: Calendar,
//     url: "/upcoming-tasks",
//     color: "text-orange-600",
//   },
//   {
//     title: "Agent Capacity",
//     icon: Users,
//     url: "/agent-capacity",
//     color: "text-green-600",
//   },
// ];

// export function AppSidebar() {
//   const location = useLocation();

//   return (
//     <Sidebar>
//       <SidebarHeader className="p-4">
//         {/* <Link to="/" className="block">
//           <h2 className="text-lg font-semibold text-sidebar-foreground hover:text-blue-600 transition-colors">
//             <div>##Insert CC Logo##</div>
//           </h2>
//         </Link> */}
//         <img src="public\CC_Stacked_4C.png"></img>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel className="text-md">Property</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {property.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton
//                     asChild
//                     isActive={location.pathname === item.url}>
//                     <Link to={item.url} className="flex items-center gap-3">
//                       <item.icon className={`w-4 h-4 ${item.color}`} />
//                       <span>{item.title}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//         <SidebarGroup>
//           <SidebarGroupLabel className="text-md">Finance</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {finance.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton
//                     asChild
//                     isActive={location.pathname === item.url}>
//                     <Link to={item.url} className="flex items-center gap-3">
//                       <item.icon className={`w-4 h-4 ${item.color}`} />
//                       <span>{item.title}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }


import React from "react";
import {
  ClockIcon,
  Calendar,
  Users,
  CheckSquare,
  LayoutDashboard,
  Book,
  DollarSign,
  Cross,
  MinusSquare,
  Presentation,
  SlashSquare,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const property = [
  {
    title: "Allocation",
    icon: Calendar,
    url: "/allocation",
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    hoverColor: "hover:bg-slate-100",
  },
  {
    title: "Reviews",
    icon: Presentation,
    url: "/reviews",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
  },
  {
    title: "Sales",
    icon: DollarSign,
    url: "/sales",
    color: "text-green-600",
    bgColor: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
  {
    title: "Cancelled",
    icon: MinusSquare,
    url: "/cancelled",
    color: "text-red-600",
    bgColor: "bg-red-50",
    hoverColor: "hover:bg-red-100",
  },
  {
    title: "Miss",
    icon: MinusSquare,
    url: "/miss",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    hoverColor: "hover:bg-yellow-100",
  },
  {
    title: "DNQ",
    icon: SlashSquare,
    url: "/dnq",
    color: "text-red-600",
    bgColor: "bg-red-50",
    hoverColor: "hover:bg-red-100",
  },
];

const finance = [
  {
    title: "Pipeline",
    icon: LayoutDashboard,
    url: "/",
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    hoverColor: "hover:bg-slate-100",
  },
  {
    title: "Overdue Tasks",
    icon: ClockIcon,
    url: "/overdue-tasks",
    color: "text-red-600",
    bgColor: "bg-red-50",
    hoverColor: "hover:bg-red-100",
  },
  {
    title: "Todays Tasks",
    icon: CheckSquare,
    url: "/todays-tasks",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
  },
  {
    title: "Upcoming Tasks",
    icon: Calendar,
    url: "/upcoming-tasks",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    hoverColor: "hover:bg-orange-100",
  },
  {
    title: "Agent Capacity",
    icon: Users,
    url: "/agent-capacity",
    color: "text-green-600",
    bgColor: "bg-green-50",
    hoverColor: "hover:bg-green-100",
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-gray-200 bg-white shadow-sm">
      <SidebarHeader className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <Link to="/" className="block">
          <div className="flex items-center justify-center">
            <img 
              src="public\CC_Stacked_4C.png" 
              alt="CC Logo"
              className="h-12 w-auto drop-shadow-sm hover:drop-shadow-md transition-all duration-200"
            />
          </div>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="p-4 space-y-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 px-2">
            Property
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {property.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    className="data-[active=true]:bg-blue-600 data-[active=true]:text-white data-[active=true]:shadow-md"
                  >
                    <Link 
                      to={item.url} 
                      className={`
                        flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                        ${location.pathname === item.url 
                          ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                          : `${item.bgColor} ${item.hoverColor} hover:shadow-sm hover:transform hover:scale-105`
                        }
                      `}
                    >
                      <item.icon className={`w-5 h-5 ${location.pathname === item.url ? 'text-white' : item.color}`} />
                      <span className={`font-medium ${location.pathname === item.url ? 'text-white' : 'text-gray-700'}`}>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="border-t border-gray-100 pt-6">
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 px-2">
              Finance
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {finance.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.url}
                      className="data-[active=true]:bg-blue-600 data-[active=true]:text-white data-[active=true]:shadow-md"
                    >
                      <Link 
                        to={item.url} 
                        className={`
                          flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                          ${location.pathname === item.url 
                            ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                            : `${item.bgColor} ${item.hoverColor} hover:shadow-sm hover:transform hover:scale-105`
                          }
                        `}
                      >
                        <item.icon className={`w-5 h-5 ${location.pathname === item.url ? 'text-white' : item.color}`} />
                        <span className={`font-medium ${location.pathname === item.url ? 'text-white' : 'text-gray-700'}`}>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
