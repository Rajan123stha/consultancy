import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/layout";
import { ScrollToTop } from "./components/ui";
import {
  HomePage,
  AboutPage,
  DestinationsPage,
  FranceDestinationPage,
  TestPreparationPage,
  MockTestPage,
} from "./pages";
import "./index.css";
import Contact from "./pages/Contact";
import DestinationDetails from "./pages/Destinations/DestinationDetails";
import IELTS from "./pages/TestPreparation/IELTS";
import PTE from "./pages/TestPreparation/PTE";
import Duolingo from "./pages/TestPreparation/Duolingo";
import PageNotFound from "./pages/PageNotFound";
import EuropeDestinations from "./pages/Destinations/Europe";
import BlogPage from "./pages/Blog";
import BlogPost from "./pages/Blog/BlogPost";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route
              path="/destinations/france"
              element={<FranceDestinationPage />}
            />
            <Route path="/test-preparation" element={<TestPreparationPage />} />
            <Route path="/mock-test" element={<MockTestPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/destinations/:slug"
              element={<DestinationDetails />}
            />
            <Route path="/test-preparation/ielts" element={<IELTS />} />
            <Route path="/test-preparation/pte" element={<PTE />} />
            <Route path="/test-preparation/duolingo" element={<Duolingo />} />
            <Route path="/europe" element={<EuropeDestinations />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
