import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import WerkhainApplication from './pages/FoodTracks';
import Impressum from './pages/Impressum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WerkhainApplication />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
