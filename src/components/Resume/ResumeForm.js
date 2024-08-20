// import React, { useEffect } from 'react';
// import { useForm, useFieldArray, Controller } from 'react-hook-form';
// import { Form, Button, Row, Col, Container } from 'react-bootstrap';

// const ResumeForm = ({ onSubmit, initialValues, isEditMode }) => {
//   const { control, handleSubmit, formState: { errors }, reset } = useForm({
//     defaultValues: initialValues
//     // resolver: yupResolver(schema)
//   });

//   useEffect(() => {
//     reset(initialValues);
//   }, [initialValues, reset]);

//   const handleReset = () => {
//     reset(); // Reset form values
//   };

//   return (
//     <div className="bg-secondary bg-opacity-25">
//       <Container className="py-4 rounded bg-white shadow-sm">
//         <h2 className="mb-4 text-center">{isEditMode ? 'Update existing Resume' : 'Create a new Resume'}</h2>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="name">
//                 <Form.Label>Name</Form.Label>
//                 <Controller
//                   name="name"
//                   control={control}
//                   render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.name} />}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="email">
//                 <Form.Label>Email</Form.Label>
//                 <Controller
//                   name="email"
//                   control={control}
//                   render={({ field }) => <Form.Control type="email" {...field} isInvalid={!!errors.email} />}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="phone">
//                 <Form.Label>Phone</Form.Label>
//                 <Controller
//                   name="phone"
//                   control={control}
//                   render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.phone} />}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="address">
//                 <Form.Label>Address</Form.Label>
//                 <Controller
//                   name="address"
//                   control={control}
//                   render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.address} />}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.address?.message}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId="repoUrl">
//                 <Form.Label>Repository URL</Form.Label>
//                 <Controller
//                   name="repoUrl"
//                   control={control}
//                   render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.repoUrl} />}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.repoUrl?.message}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId="linkdinUrl">
//                 <Form.Label>LinkdIn URL</Form.Label>
//                 <Controller
//                   name="linkdinUrl"
//                   control={control}
//                   render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.linkdinUrl} />}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors.linkdinUrl?.message}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//           </Row>
//           <Form.Group controlId="profileSummary" className="mb-3">
//             <Form.Label>Profile Summary</Form.Label>
//             <Controller
//               name="profileSummary"
//               control={control}
//               render={({ field }) => <Form.Control as="textarea" rows={3} {...field} isInvalid={!!errors.profileSummary} />}
//             />
//             <Form.Control.Feedback type="invalid">{errors.profileSummary?.message}</Form.Control.Feedback>
//           </Form.Group>

//           {/* Dynamic fields for education, certificates, projects, skills/interests, work experience */}
//           <Form.Label>Education Details</Form.Label>
//           <FieldArrayComponent
//             control={control}
//             name="educationDTO"
//             fields={{
//               instituteName: "Institute Name",
//               degree: "Degree",
//               degStartDate: "Start Date",
//               degEndDate: "End Date"
//             }}
//             errors={errors.educationDTO}
//           />

//           <Form.Label>Certificate Details</Form.Label>
//           <FieldArrayComponent
//             control={control}
//             name="certificateDTO"
//             fields={{
//               certificateTitle: "Certificate Title",
//               issuingOrg: "Issuing Organization"
//             }}
//             errors={errors.certificateDTO}
//           />

//           <Form.Label>Projects Details</Form.Label>
//           <FieldArrayComponent
//             control={control}
//             name="projectDTO"
//             fields={{
//               projectTitle: "Project Title",
//               projectDescription: "Project Description"
//             }}
//             errors={errors.projectDTO}
//           />

//           <Form.Label>Skills & Interests</Form.Label>
//           <FieldArrayComponent
//             control={control}
//             name="skillsInterestDTO"
//             fields={{
//               skills: "Skills",
//               interest: "Interest"
//             }}
//             errors={errors.skillsInterestDTO}
//           />

//           <Form.Label>Professional Experience Details</Form.Label>
//           <FieldArrayComponent
//             control={control}
//             name="workExperienceDTO"
//             fields={{
//               designation: "Designation",
//               companyName: "Company Name",
//               comStartDate: "Start Date",
//               comEndDate: "End Date",
//               workLocation: "Work Location"
//             }}
//             errors={errors.workExperienceDTO}
//           />

//           <div className="text-end mt-4">
//             <Button variant="primary" type="submit">{isEditMode ? 'Update Resume' : 'Submit Resume'}</Button>
//             <Button variant="secondary" className="ms-2" onClick={handleReset}>Reset</Button>
//           </div>
//         </Form>
//       </Container>
//     </div>
//   );
// };

// const FieldArrayComponent = ({ control, name, fields, errors }) => {
//   const { fields: arrayFields, append, remove } = useFieldArray({
//     control,
//     name
//   });

//   return (
//     <div className="mb-4">
//       {arrayFields.map((_, index) => (
//         <Row key={index} className="mb-3">
//           {Object.keys(fields).map((field) => (
//             <Col md={3} key={field}>
//               <Form.Group controlId={`${name}[${index}].${field}`}>
//                 <Form.Label>{fields[field]}</Form.Label>
//                 <Controller
//                   name={`${name}[${index}].${field}`}
//                   control={control}
//                   render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors?.[index]?.[field]} />}
//                 />
//                 <Form.Control.Feedback type="invalid">{errors?.[index]?.[field]?.message}</Form.Control.Feedback>
//               </Form.Group>
//             </Col>
//           ))}
//           <Col md={1} className="d-flex align-items-end">
//             <Button variant="danger" onClick={() => remove(index)}>Remove</Button>
//           </Col>
//         </Row>
//       ))}
//       <Button variant="success" onClick={() => append(Object.fromEntries(Object.keys(fields).map(field => [field, ''])))}>Add {name.replace('DTO', '')}</Button>
//     </div>
//   );
// };

// export default ResumeForm;

import React, { useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const ResumeForm = ({ onSubmit, initialValues, isEditMode }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: initialValues
    // resolver: yupResolver(schema)
  });

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  const handleReset = () => {
    reset(); // Reset form values
  };

  return (
    <div
      // className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundColor:'orange'
        // backgroundImage: 'url("path_to_your_background_image.jpg")',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // padding: '60px 0'
      }}
    >
      <Container className="py-5 rounded bg-white shadow-lg" style={{ maxWidth: '900px' }}>
        <h2 className="mb-4 font-weight-bold text-center">{isEditMode ? 'Update existing Resume' : 'Create a new Resume'}</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.name} />}
                />
                <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <Form.Control type="email" {...field} isInvalid={!!errors.email} />}
                />
                <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.phone} />}
                />
                <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.address} />}
                />
                <Form.Control.Feedback type="invalid">{errors.address?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="repoUrl">
                <Form.Label>Repository URL</Form.Label>
                <Controller
                  name="repoUrl"
                  control={control}
                  render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.repoUrl} />}
                />
                <Form.Control.Feedback type="invalid">{errors.repoUrl?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="linkdinUrl">
                <Form.Label>LinkedIn URL</Form.Label>
                <Controller
                  name="linkdinUrl"
                  control={control}
                  render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors.linkdinUrl} />}
                />
                <Form.Control.Feedback type="invalid">{errors.linkdinUrl?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="profileSummary" className="mb-4">
            <Form.Label>Profile Summary</Form.Label>
            <Controller
              name="profileSummary"
              control={control}
              render={({ field }) => <Form.Control as="textarea" rows={4} {...field} isInvalid={!!errors.profileSummary} />}
            />
            <Form.Control.Feedback type="invalid">{errors.profileSummary?.message}</Form.Control.Feedback>
          </Form.Group>

          {/* Dynamic fields for education, certificates, projects, skills/interests, work experience */}
          <Form.Label className="d-block mb-3">Education Details</Form.Label>
          <FieldArrayComponent
            control={control}
            name="educationDTO"
            fields={{
              instituteName: "Institute Name",
              degree: "Degree",
              degStartDate: "Start Date",
              degEndDate: "End Date"
            }}
            errors={errors.educationDTO}
          />

          <Form.Label className="d-block mb-3">Certificate Details</Form.Label>
          <FieldArrayComponent
            control={control}
            name="certificateDTO"
            fields={{
              certificateTitle: "Certificate Title",
              issuingOrg: "Issuing Organization"
            }}
            errors={errors.certificateDTO}
          />

          <Form.Label className="d-block mb-3">Projects Details</Form.Label>
          <FieldArrayComponent
            control={control}
            name="projectDTO"
            fields={{
              projectTitle: "Project Title",
              projectDescription: "Project Description"
            }}
            errors={errors.projectDTO}
          />

          <Form.Label className="d-block mb-3">Skills & Interests</Form.Label>
          <FieldArrayComponent
            control={control}
            name="skillsInterestDTO"
            fields={{
              skills: "Skills",
              interest: "Interest"
            }}
            errors={errors.skillsInterestDTO}
          />

          <Form.Label className="d-block mb-3">Professional Experience Details</Form.Label>
          <FieldArrayComponent
            control={control}
            name="workExperienceDTO"
            fields={{
              designation: "Designation",
              companyName: "Company Name",
              comStartDate: "Start Date",
              comEndDate: "End Date",
              workLocation: "Work Location"
            }}
            errors={errors.workExperienceDTO}
          />

          <div className="text-end mt-4">
            <Button variant="primary" type="submit">{isEditMode ? 'Update Resume' : 'Submit Resume'}</Button>
            <Button variant="secondary" className="ms-2" onClick={handleReset}>Reset</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

const FieldArrayComponent = ({ control, name, fields, errors }) => {
  const { fields: arrayFields, append, remove } = useFieldArray({
    control,
    name
  });

  return (
    <div className="mb-4">
      {arrayFields.map((_, index) => (
        <Row key={index} className="mb-3">
          {Object.keys(fields).map((field) => (
            <Col md={4} key={field}>
              <Form.Group controlId={`${name}[${index}].${field}`}>
                <Form.Label>{fields[field]}</Form.Label>
                <Controller
                  name={`${name}[${index}].${field}`}
                  control={control}
                  render={({ field }) => <Form.Control type="text" {...field} isInvalid={!!errors?.[index]?.[field]} />}
                />
                <Form.Control.Feedback type="invalid">{errors?.[index]?.[field]?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          ))}
          <Col md={2} className="d-flex align-items-end">
            <Button variant="danger" onClick={() => remove(index)}>Remove</Button>
          </Col>
        </Row>
      ))}
      <Button variant="success" onClick={() => append(Object.fromEntries(Object.keys(fields).map(field => [field, ''])))}>Add {name.replace('DTO', '')}</Button>
    </div>
  );
};

export default ResumeForm;
