import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/Home/HomePage';
import ListResumes from './components/Resume/ListResumes';
import ViewResume from './components/Resume/ViewResume';
import AddResume from './components/Resume/AddResume';
import EditResume from './components/Resume/EditResume';
import DeleteResume from './components/Resume/DeleteResume';
import PreviewResume from './components/Resume/PreviewResume';
import TemplateSelection from './components/Resume/Templates/TemplateSelection';
import AboutPage from './components/Home/AboutPage';
import ContactPage from './components/Home/ContactPage';
import WelcomePage from './components/Home/WelcomePage';
import ProfilePage from './components/Home/ProfilePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/list-resumes" element={<ListResumes />} />
        <Route path="/resumeById/:id" element={<ViewResume />} />
        <Route path="/resumeById/:id/view" element={<TemplateSelection />} />
        <Route path="/add-resume" element={<AddResume />} />
        <Route path="/updateResume/:id" element={<EditResume />} />
        <Route path="/delete-resume/:id" element={<DeleteResume />} />
        <Route path="/resume-preview" element={<PreviewResume />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/home-page"
          element={
            <PrivateRoute> <HomePage /> </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
