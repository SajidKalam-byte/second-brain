import { Outlet, Link } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r border-gray-200 p-4">
        <h2 className="text-xl font-bold mb-6">Second Brain</h2>
        <nav className="space-y-2">
          <Link to="/notes" className="block p-2 rounded hover:bg-gray-200"> Notes</Link>
          <Link to="/todos" className="block p-2 rounded hover:bg-gray-200"> Todos</Link>
          <Link to="/whiteboard" className="block p-2 rounded hover:bg-gray-200"> Whiteboard</Link>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col">
        <header className="h-12 border-b border-gray-200 bg-white px-4 flex items-center">
          <span className="font-medium">Local Workspace</span>
        </header>
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default MainLayout