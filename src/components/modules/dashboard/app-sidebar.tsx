// "use client";

// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import { NavUser } from "./nav-user";
// import { useEffect, useState } from "react";
// import { currentUser } from "@/services/AuthService";

// const studentItems = [
//   {
//     title: "Dashboard",
//     url: "/student/dashboard",
//     icon: Home,
//   },
//   {
//     title: "Profile",
//     url: "/student/profile",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "/student/calendar",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "/student/search",
//     icon: Search,
//   },
// ];

// const tutorItems = [
//   {
//     title: "Dashboard",
//     url: "/tutors/dashboard",
//     icon: Home,
//   },
//   {
//     title: "Profile",
//     url: "/tutors/profile",
//     icon: Settings,
//   },
//   {
//     title: "Calendar",
//     url: "/tutors/calendar",
//     icon: Calendar,
//   },
// ];

// export function AppSidebar() {
//   const [role, setRole] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const userInfo = await currentUser();
//         console.log(userInfo)
//         if (userInfo?.role) {
//           setRole(userInfo.role); // Set role
//         }
//       } catch (error) {
//         console.error("Error fetching user info:", error);
//       }
//     };

//     fetchUserRole();
//   }, []);

//   const items =
//     role === "student" ? studentItems : role === "tutor" ? tutorItems : [];

//   return (
//     <Sidebar>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel> {role} </SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter>
//         <NavUser />
//       </SidebarFooter>
//     </Sidebar>
//   );
// }

"use client";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { useUser } from "@/context/UserContext";


const tutorItems = [
  { title: "Dashboard", url: "/tutors/dashboard", icon: Home },
  { title: "Profile", url: "/tutors/profile", icon: Settings },
  { title: "Calendar", url: "/tutors/calendar", icon: Calendar },
];

const studentItems = [
  { title: "Dashboard", url: "/student/dashboard", icon: Home },
  { title: "Profile", url: "/student/profile", icon: Inbox },
  { title: "Calendar", url: "/student/calendar", icon: Calendar },
  { title: "Home", url: "/", icon: Home },
];


export function AppSidebar() {
  const { user, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;

  const items = user?.role === "tutor"? tutorItems:studentItems 
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {user?.role?.toUpperCase() || "GUEST"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
