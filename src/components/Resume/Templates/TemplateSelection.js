import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../../api/resumeApi';
import ClassicResume from './ClassicResume';
import ModernResume from './ModernResume';
import ProfessionalResume from './ProfessionalResume';
import './TemplateSelection.css'; // Import CSS for styling
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TemplateSelection = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    apiClient.get(`/resumeById/${id}`)
      .then(response => setResume(response.data))
      .catch(error => console.error('Error fetching resume:', error));
  }, [id]);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleExportPdf = () => {
    const element = document.getElementById('resume-template');
    if (!element) return;

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('resume.pdf');
    });
  };

  const renderTemplate = () => {
    if (!resume) return null;
    switch (selectedTemplate) {
      case 'Classic':
        return <div id="resume-template"><ClassicResume resume={resume} /></div>;
      case 'Modern':
        return <div id="resume-template"><ModernResume resume={resume} /></div>;
      case 'Professional':
        return <div id="resume-template"><ProfessionalResume resume={resume} /></div>;
      default:
        return <div>Select a template to view</div>;
    }
  };

  return (
    <div className="template-selection-container">
      <h1>Select a Resume Template</h1>
      <div className="template-list">
        <div 
          className={`template-option ${selectedTemplate === 'Classic' ? 'selected' : ''}`} 
          onClick={() => handleTemplateSelect('Classic')}
        >
          <h3>Classic Template</h3>
        </div>
        <div 
          className={`template-option ${selectedTemplate === 'Modern' ? 'selected' : ''}`} 
          onClick={() => handleTemplateSelect('Modern')}
        >
          <h3>Modern Template</h3>
        </div>
        <div 
          className={`template-option ${selectedTemplate === 'Professional' ? 'selected' : ''}`} 
          onClick={() => handleTemplateSelect('Professional')}
        >
          <h3>Professional Template</h3>
        </div>
      </div>
      <div>
        {renderTemplate()}
      </div>
      {selectedTemplate && (
        <button className="btn btn-primary mt-3" onClick={handleExportPdf}>
          Export PDF
        </button>
      )}
    </div>
  );
};

export default TemplateSelection;
