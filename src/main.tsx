import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Projects from "./components/Projects.tsx"
import Home from "./components/Home.tsx"
import About from "./components/About.tsx"
import UsersApiPractice from './components/UsersApiPractice.tsx'
import SignupFormPractice from "./components/SignupFormPractice.tsx";
import StatusMessagePractice from './components/StatusMessagePractice.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<UsersApiPractice />} />
        <Route path="/signup-form" element={<SignupFormPractice />} />
        <Route path="/status" element={<StatusMessagePractice />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
