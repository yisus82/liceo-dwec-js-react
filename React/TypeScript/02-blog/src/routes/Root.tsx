import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const RootLayout = () => (
  <>
    <Header />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default RootLayout;
