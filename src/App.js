import Navbar from "./layouts/navbar/Navbar";
import GlobalStyle from "./GlobalStyle";
import Footer from "./layouts/footer";
import ContactPage from "./pages/contact-page";
import LandingPage from "./pages/landing-page";
import HelpPage from "./pages/help-page";
import AboutActionPage from "./pages/about-auction-page";
import Topbar from "./layouts/topbar";
import DropdownExampleInline from "./components/language/Languages";
import Sidebar from "./layouts/sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      {/* <LandingPage /> */}
      {/* <ContactPage /> */}
      {/* <HelpPage /> */}
      {/* <AboutActionPage />
      <Footer /> */}
      <GlobalStyle />
    </div>
  );
};

export default App;
