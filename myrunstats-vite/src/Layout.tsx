import { Outlet } from 'react-router-dom'; // An Outlet is used to render the matched child route (in the main.tsx file)
import TopMenu from './TopMenu';

// This component is the "core" layout that includes the TopMenu and an Outlet
function Layout() { // This is function is basically the content wrapper for the routed pages
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopMenu />   {/* Fixed Header with the TopMenu */}

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8"> {/*Main content area where routed pages will be displayed */}
        <Outlet />  {/* The Outlet renders the page selected by the route */}
      </main>

    </div>
  );
}

export default Layout;