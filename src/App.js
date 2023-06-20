import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import FirstStep from './components/FirstStep/FirstStep';
import SecondStep from './components/SecondStep/SecondStep';
import ThirdStep from './components/ThirdStep/ThirdStep';
import FinalResult from './components/Finalresult/FinalResult';
import DataProvider from './components/Data';
import EditPage from './components/EditPage/EditPage';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstStep />} />
          <Route path="/second-step" element={<SecondStep />} />
          <Route path="/third-step" element={<ThirdStep />} />
          <Route path="/final-step" element={<FinalResult />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
