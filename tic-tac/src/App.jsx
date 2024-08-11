import { Routes, Route } from 'react-router-dom';
import TicTac from './components/TicTac';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
// // New component

function App() {
  return (
    <Routes>
      <Route path="/" element={<TicTac />} />
      <Route path="/second-page" element={<SecondPage />} />
      <Route path="/third-page" element={<ThirdPage />} /> New route
    </Routes>
  );
}

export default App;
