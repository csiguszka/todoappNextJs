import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ReactNode } from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

async function layout({ children }: { children: ReactNode }) {
  const { userId } = await auth();
  let user;
  if (userId != null) {
    user = await currentUser();

    console.log(user);
  }

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex flex-row space-x-2">
            <UserButton />

            <p>Szia {user?.username}</p>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href={"/"}>Home</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href={"addtodo"}>Add todo</Link>
            </SidebarMenuItem>
          </SidebarMenu>
          {userId == null && (
            <SidebarFooter>
              <SidebarMenuItem>
                <Link href={"sign-in"}>sign-in</Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href={"sign-up"}>sign-up</Link>
              </SidebarMenuItem>
            </SidebarFooter>
          )}
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
