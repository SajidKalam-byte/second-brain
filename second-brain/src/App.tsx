import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Notes from '@/pages/Notes'
import Todos from '@/pages/Todos'
import Whiteboard from '@/pages/Whiteboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Redirect from "/" to "/notes" */}
          <Route index element={<Notes />} />
          <Route path="notes" element={<Notes />} />
          <Route path="todos" element={<Todos />} />
          <Route path="whiteboard" element={<Whiteboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App