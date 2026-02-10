<<<<<<< HEAD
import { AnimatePresence } from 'framer-motion';
import CyberHome from './pages/CyberHome';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* <Background /> */}
      {/* <Navbar /> */}
      <AnimatePresence mode="wait">
        <CyberHome />
      </AnimatePresence>
    </div>
  );
}
=======
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
>>>>>>> ab6f1490c100e2d66a6a52e178964cb5952be9de

export default App;
