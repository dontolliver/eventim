import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import KessApplication from './pages/FoodTracks';
import Impressum from './pages/Impressum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KessApplication />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
      <Analytics />
    </Router>
  )
}

export default App
