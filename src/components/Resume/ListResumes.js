import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../../api/resumeApi';
import './ListResume.css'; // Import your custom CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ListResumes = () => {
    const [resumes, setResumes] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    const fetchResumes = () => {
        apiClient.get('/getResumes')
            .then(response => setResumes(response.data))
            .catch(error => console.error('Error fetching resumes:', error));
    };

    const handleDeleteResume = (id) => {
        apiClient.delete(`/deleteResume/${id}`)
            .then(() => {
                alert('Resume deleted successfully');
                fetchResumes();
            })
            .catch(error => console.error('Error deleting resume:', error));
    };

    const handleLogout = () => {
        // Implement your logout logic here
        localStorage.removeItem('authToken'); // Assuming you're using localStorage
        localStorage.removeItem('userDetails'); // Clear user details
        navigate('/login'); // Redirect to login page
    };

    useEffect(() => {
        fetchResumes();
    }, []);

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm py-3 px-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <i className="fas fa-file-alt"></i> Resume Builder
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home-page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add-resume">Create Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-user"></i> Profile
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/profile">
                                            <i className="fas fa-user-circle"></i> View Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={handleLogout}>
                                            <i className="fas fa-sign-out-alt"></i> Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <h2 className="mb-5 text-center text-black font-weight-bold">List Of Resumes</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resumes.map(resume => (
                                <tr key={resume.id}>
                                    <td>{resume.name}</td>
                                    <td>{resume.email}</td>
                                    <td>{resume.phone}</td>
                                    <td>
                                        <Link to={`/resumeById/${resume.id}/view`} className="btn btn-primary me-2">View</Link>
                                        <Link to={`/updateResume/${resume.id}`} className="btn btn-warning me-2">Edit</Link>
                                        <button className="btn btn-danger" onClick={() => handleDeleteResume(resume.id)}> Delete </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListResumes;




