import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { pageCatalog } from './data/pageCatalog'
import ContentPage from './pages/ContentPage'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import AdmissionPage from './pages/AdmissionPage'
import HallOfFamePage from './pages/HallOfFamePage'
import NewsEventsPage from './pages/NewsEventsPage'
import ReportErrorPage from './pages/ReportErrorPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/hall-of-fame" element={<HallOfFamePage />} />
          <Route path="/news-and-updates" element={<NewsEventsPage />} />
          <Route path="/report-error" element={<ReportErrorPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          {pageCatalog.map((page) => (
            <Route key={page.path} path={page.path} element={<ContentPage page={page} />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
