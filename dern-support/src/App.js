import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './style.css';
import SparePartsInventory from './views/spare-parts-inventory';
import AccountSetupPageSignUp from './views/account-setup-page-sign-up';
import Home from './views/home';
import SchuldeJobs from './views/schulde-jobs';
import SupportRequestPage from './views/support-request-page';
import KnowledgeBaseDiagnose from './views/knowledge-base-diagnose';
import ContactUs from './views/contact-us';
import HomeEmployee from './views/home-employee';
import AnalysisPage from './views/analysis-page';
import AccountSetupPageSignIn from './views/account-setup-page-sign-in';
import HomeClient from './views/home-client';
import NotFound from './views/not-found';
import Form from './views/testing/form';
import UserList from './views/testing/form-sign-up';
import UpdateSpare from './views/spare-parts-update-page.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AccountSetupPageSignIn />} />
        <Route path = 'account' element = {<Form />} />
        <Route path = 'accountUp' element = {<UserList />} />
        <Route path='/signup' element={<AccountSetupPageSignUp />} />
        <Route path='/homeNewUser' element={<Home />} />
        <Route path='/homeEmployee' element={<HomeEmployee />} />
        <Route path='/homeClient' element={<HomeClient />} />
        
        <Route path='/inventory' element={<SparePartsInventory />} />
        <Route path='/update-item/:id' element={<UpdateSpare />} /> 

        <Route path='/contact' element={<ContactUs />} />
        <Route path='/knowledgeBase' element={<KnowledgeBaseDiagnose />} />
        <Route path='/supportRequest' element={<SupportRequestPage />} />
        <Route path='/schuldeJob' element={<SchuldeJobs />} />
        <Route path='/analysisPage' element={<AnalysisPage />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
