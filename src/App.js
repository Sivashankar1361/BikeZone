import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ProductDetail from './pages/ProductDetail';
import Compare from './pages/Compare';
import UsedBikes from './pages/UsedBikes';
import Showrooms from './pages/Showrooms';
import UpcomingLaunches from './pages/UpcomingLaunches';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import DealerDashboard from './pages/DealerDashboard';
import FinanceTools from './pages/FinanceTools';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bikes" element={<Listings category="bikes" />} />
            <Route path="/scooters" element={<Listings category="scooters" />} />
            <Route path="/evs" element={<Listings category="evs" />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/used-bikes" element={<UsedBikes />} />
            <Route path="/showrooms" element={<Showrooms />} />
            <Route path="/upcoming" element={<UpcomingLaunches />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dealer" element={<DealerDashboard />} />
            <Route path="/finance" element={<FinanceTools />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;