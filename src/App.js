import {useEffect, React} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import LandingPage from "./Component/LandingPage";

function App() {
  useEffect(() => {
    document.title = 'Yatharth Thakur';
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
