import React, { useState } from "react";
import axios from "axios";
import "./HireFormStyles.css";
import config from "../config";

const HiringForm = () => {
    const [formData, setFormData] = useState({
        jobType: "",
        requirement: "",
        otherRequirement: "",
        role: "",
        otherRole: "",
        description: "",
        companyName: "",
        workMode: "",
        officeLocation: "",
        contactType: "",
        contactDetail: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        console.log("Validating form data:", formData);
    
        Object.keys(formData).forEach(key => {
            if (key === 'officeLocation' && formData.workMode !== 'Office') {
                return;
            }
            
            if (!formData[key] && key !== 'otherRequirement' && key !== 'otherRole') {
                newErrors[key] = 'This field is required';
            }
        });
    
        if (formData.requirement === "other" && !formData.otherRequirement) {
            newErrors.otherRequirement = 'This field is required';
        }
        if (formData.role === "other" && !formData.otherRole) {
            newErrors.otherRole = 'This field is required';
        }
        if ((formData.workMode === "Office" || formData.workMode === "Hybride") && !formData.officeLocation) {
            newErrors.officeLocation = 'This field is required';
        }
    
        console.log("Validation errors:", newErrors);
        return newErrors;
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted"); 

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            console.log("Form errors:", formErrors);
            return;
        }

        try {
            const response = await axios.post(`${config.BASE_URL}/hire`, formData);
            setFormData({
                jobType: "",
                requirement: "",
                otherRequirement: "",
                role: "",
                otherRole: "",
                description: "",
                companyName: "",
                workMode: "",
                officeLocation: "",
                contactType: "",
                contactDetail: "",
            });
            setErrors({});

            alert("Form submitted successfully!");
        } catch (error) {
            console.error("There was an error submitting the form:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className={`form-field ${errors.jobType ? 'error' : ''}`}>
                    <label>
                        Job Type:
                        <select name="jobType" value={formData.jobType} onChange={handleChange}>
                            <option value="">Select Job Type</option>
                            <option value="fullTime">Full-Time</option>
                            <option value="partTime">Part-Time</option>
                            <option value="freelance">Freelance</option>
                        </select>
                        {errors.jobType && <span className="error-message">{errors.jobType}</span>}
                    </label>
                </div>
                <div className={`form-field ${errors.requirement ? 'error' : ''}`}>
                    <label>
                        Requirement:
                        <select name="requirement" value={formData.requirement} onChange={handleChange}>
                            <option value="">Select Requirement</option>
                            <option value="websiteDevelopment">Website Development</option>
                            <option value="websiteManagement">Website Management</option>
                            <option value="appDevelopment">App Development</option>
                            <option value="appManagement">App Management</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.requirement && <span className="error-message">{errors.requirement}</span>}
                    </label>
                </div>
                {formData.requirement === "other" && (
                    <div className={`form-field ${errors.otherRequirement ? 'error' : ''}`}>
                        <label>
                            Other Requirement:
                            <input
                                placeholder="Your Requirement"
                                type="text"
                                name="otherRequirement"
                                value={formData.otherRequirement}
                                onChange={handleChange}
                            />
                            {errors.otherRequirement && <span className="error-message">{errors.otherRequirement}</span>}
                        </label>
                    </div>
                )}
                <div className={`form-field ${errors.role ? 'error' : ''}`}>
                    <label>
                        Role:
                        <select name="role" value={formData.role} onChange={handleChange}>
                            <option value="">Select Role</option>
                            <option value="mernDeveloper">MERN-Stack Developer</option>
                            <option value="reactDeveloper">React Developer</option>
                            <option value="nodeJsDeveloper">Node.js Developer</option>
                            <option value="reactNativeDeveloper">React Native Developer</option>
                            <option value="webAppDeveloper">Web-Application Developer</option>
                            <option value="androidAppDeveloper">Android App Developer</option>
                            <option value="iosAppDeveloper">iOS App Developer</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.role && <span className="error-message">{errors.role}</span>}
                    </label>
                </div>
                {formData.role === "other" && (
                    <div className={`form-field ${errors.otherRole ? 'error' : ''}`}>
                        <label>
                            Other Role:
                            <input
                                placeholder="Required Position"
                                type="text"
                                name="otherRole"
                                value={formData.otherRole}
                                onChange={handleChange}
                            />
                            {errors.otherRole && <span className="error-message">{errors.otherRole}</span>}
                        </label>
                    </div>
                )}
                <div className={`form-field ${errors.companyName ? 'error' : ''}`}>
                    <label>
                        Company Name:
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company/Organization Name"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                        {errors.companyName && <span className="error-message">{errors.companyName}</span>}
                    </label>
                </div>
                <div className={`form-field ${errors.workMode ? 'error' : ''}`}>
                    <label>
                        Work Mode:
                        <select name="workMode" value={formData.workMode} onChange={handleChange}>
                            <option value="">Select Work Mode</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Office">Office</option>
                        </select>
                        {errors.workMode && <span className="error-message">{errors.workMode}</span>}
                    </label>
                </div>
                {(formData.workMode === "Office" || formData.workMode === "Hybrid") && (
                    <div className={`form-field ${errors.officeLocation ? 'error' : ''}`}>
                        <label>
                            Company Location:
                            <input
                                placeholder="Office Location"
                                type="text"
                                name="officeLocation"
                                value={formData.officeLocation}
                                onChange={handleChange}
                            />
                            {errors.officeLocation && <span className="error-message">{errors.officeLocation}</span>}
                        </label>
                    </div>
                )}
                <div className={`form-field ${errors.description ? 'error' : ''}`}>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            placeholder="Job Description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                        {errors.description && <span className="error-message">{errors.description}</span>}
                    </label>
                </div>
                <div className={`form-field ${errors.contactType ? 'error' : ''}`}>
                    <label>
                        Your Contact:
                        <select name="contactType" value={formData.contactType} onChange={handleChange}>
                            <option value="">Select Contact Type</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                        </select>
                        {errors.contactType && <span className="error-message">{errors.contactType}</span>}
                    </label>
                </div>
                {formData.contactType && (
                    <div className={`form-field ${errors.contactDetail ? 'error' : ''}`}>
                        <label>
                            Contact Detail:
                            <input
                                type={formData.contactType === "phone" ? "tel" : "email"}
                                name="contactDetail"
                                placeholder={formData.contactType === "phone" ? "Enter phone number" : "Enter email"}
                                value={formData.contactDetail}
                                onChange={handleChange}
                            />
                            {errors.contactDetail && <span className="error-message">{errors.contactDetail}</span>}
                        </label>
                    </div>
                )}
                <div className="form-field">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default HiringForm;