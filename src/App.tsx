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

export default App;
