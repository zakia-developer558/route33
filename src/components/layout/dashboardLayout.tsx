import { Outlet, useLocation } from "react-router-dom";
import BreadcrumbHeader from "../dashboard-components/Header/BraedCrumbHeader";
import SidebarNav from "../dashboard-components/Sidebar/SidebarNav";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  
  const getBreadcrumbItems = () => {
    const items = [];

    switch(location.pathname) {
      case '/dashboard/Q&A':
        items.push(
          { label: "AI Agent", href: "" },
          { label: "Customer Questions Answered", href: "" }
        );
        break;
      case '/dashboard/try-ai':
        items.push(
          { label: "AI Agent", href: "" },
          { label: "Try My AI", href: "" }
        );
        break;
      case '/dashboard/contacts':
        items.push(
          { label: "Dashboard", href: "" },
          { label: "Contacts", href: "" }
        );
        break;
      case '/dashboard/business-profile':
        items.push(
          { label: "Business Settings", href: "" },
          { label: "Business Profile", href: "" }
        );
        break;
      case '/dashboard/billing':
        items.push(
          { label: "General", href: "" },
          { label: "Billing", href: "" }
        );
        break;
      case '/dashboard/appearance':
        items.push(
          { label: "Business Settings", href: "" },
          { label: "Appearance", href: "" }
        );
        break;
      case '/dashboard/qualify-leads':
        items.push(
          { label: "General", href: "" },
          { label: "Qualify Customer Requests", href: "" }
        );
        break;
      case '/dashboard/settings':
        items.push(
          { label: "General", href: "" },
          { label: "Settings", href: "" }
        );
        break;
      case '/dashboard/menu-manager':
        items.push(
          { label: "Training Material", href: "" },
          { label: "Menu Manager", href: "" }
        );
        break;
        case '/dashboard/operational-data/rewards':
        items.push(
          { label: "Training Material", href: "" },
          { label: "Operational Data", href: "" },
          { label: "Rewards", href: "" }
        );
        break;
        case '/dashboard/operational-data/reservation':
        items.push(
          { label: "Training Material", href: "" },
          { label: "Operational Data", href: "" },
          { label: "Reservation", href: "" }
        );
        break;
        case '/dashboard/other-data/review':
        items.push(
          { label: "Training Material", href: "" },
          { label: "Review", href: "" },
         
        );
        break;
        case '/dashboard/other-data/faqs':
        items.push(
          { label: "Training Material", href: "" },
          { label: "FAQ", href: "" },
         
        );
        break;
      default:
        items.push(
          { label: "Dashboard", href: "" }
        );
    }

    return items;
  };

  return (
    <div className="flex min-h-screen w-full relative">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <SidebarNav />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Fixed Header */}
        <div className="flex-shrink-0 px-4 lg:px-6 pt-4 bg-white">
          <BreadcrumbHeader items={getBreadcrumbItems()} />
        </div>
        
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