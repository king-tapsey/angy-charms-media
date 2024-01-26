import { ThemeProvider, responsiveFontSizes } from '@mui/material';
import './App.css';
import { theme } from './theme';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CustomerSupport from './pages/CustomerSupport';
import Footer from './components/Footer';

function App() {
  
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <div className="App">
        <NavBar theme={theme} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/customer-support' element={<CustomerSupport />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
