import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutUsPage from './pages/AboutUsPage';
import HealthKnowledgePage from './pages/HealthKnowledgePage';
import ContactUsPage from './pages/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage';
import SERPPreviewPage from './pages/SERPPreviewPage';
import InternalLinksPage from './pages/InternalLinksPage';
import SEOValidationPage from './pages/SEOValidationPage';

function App() {
  return (
    <HelmetProvider>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/health-knowledge" element={<HealthKnowledgePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/serp-preview" element={<SERPPreviewPage />} />
          <Route path="/internal-links" element={<InternalLinksPage />} />
          <Route path="/seo-validation" element={<SEOValidationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
document.dispatchEvent(new Event('prerender-ready'))
export default App;
