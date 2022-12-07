import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './components/Counter';
import ProjectManagement from './components/projectManagement/ProjectManagement';
import BaseLayout from './components/layout/BaseLayout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Router>
  <BaseLayout>
    <Routes>

      <Route path="/" element={<App />}/>
      <Route path="/counter" element={<Counter />}/>
      <Route path="/project-management" element={<ProjectManagement />}/>

    </Routes>
  </BaseLayout>

</Router>
);


