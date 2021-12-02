import Navbar from "./layouts/navbar/Navbar";
import GlobalStyle from "./GlobalStyle";
import Footer from "./layouts/footer";
import ContactPage from "./pages/contact-page";
import LandingPage from "./pages/landing-page";
import HelpPage from "./pages/help-page";
import AboutActionPage from "./pages/about-auction-page";
import Topbar from "./layouts/topbar";
import LotsPage from "./pages/lots-page";
import ChangeLoginPage from "./pages/change-login-page";
import LoginPage from "./pages/login-page";
import RecoveryPage from "./pages/recovery-page";
import RegisterPage from "./pages/register-page";
import VerifyLoginPage from "./pages/verify-login-page";
import SidebarItem from "./layouts/sidebar/SidebarItem";
import SidebarItemList from "./layouts/sidebar/SidebarItemList";
import Sidebar from "./layouts/sidebar/Sidebar";
import LotDetailPage from "./pages/lot-detail-page";
import Breadcrump from "./components/breadcrump/Breadcrump";
const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Breadcrump />
      {/* <LotDetailPage /> */}
      {/* <LoginPage /> */}
      {/* <RecoveryPage /> */}
      {/* <RegisterPage /> */}
      {/* <VerifyLoginPage /> */}
      {/* <ChangeLoginPage /> */}
      <LotsPage />
      {/* <LandingPage /> */}
      {/* <ContactPage /> */}
      {/* <HelpPage /> */}
      {/* <AboutActionPage /> */}
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
