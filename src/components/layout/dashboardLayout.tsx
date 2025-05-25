import { Outlet } from "react-router-dom";


interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

  
 

  return (
    <div className="flex min-h-screen w-full relative">

      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
      
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 bg-[#f4f4f5]">
          <main className="h-full">
            {children || <Outlet />}
          </main>
        </div>
      </div>
    </div>
  );
}