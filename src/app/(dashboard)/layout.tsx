import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href={"/"}>Home</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href={"addtodo"}>Add todo</Link>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarFooter>
            <SidebarMenuItem>
              <Link href={"sign-in"}>sign-in</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href={"sign-up"}>sign-up</Link>
            </SidebarMenuItem>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
      <div className="flex flex-col p-2 w-screen">
        <div className="w-full border-b-2 border-solid border-primary">
          <SidebarTrigger></SidebarTrigger>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
export default layout;
