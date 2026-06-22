import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Projects from "./topics/Projects"
import Home from "./topics/Home"
import About from "./topics/About"
import UsersApiPractice from './topics/UsersApiPractice.tsx'
import SignupFormPractice from "./topics/SignupFormPractice";
import StatusMessagePractice from './topics/StatusMessagePractice.tsx'
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
