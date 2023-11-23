// pages/UserForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../api/usersPost';
import TextInput from '../components/TextInput';
import { useError } from '../utils/contexts/ErrorContext';
import { ThemeButton } from '../components/ThemeToggle';

const UserForm = () => {
    const { setError } = useError();

    const navigate = useNavigate();
    const [formPayload, setFormPayload] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: '',
        },
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: '',
            },
        },
    });
    const [showFieldError, setShowFieldError] = useState(false);
    document.title = `Add User | Users Management`

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nestedFields = name.split('.');
    
        if (nestedFields.length === 2) {
        // Handle nested fields
        const [fieldName, nestedField] = nestedFields;
        setFormPayload((prevForm) => ({
            ...prevForm,
            [fieldName]: { ...prevForm[fieldName], [nestedField]: value },
        }));
        } else {
        // Handle top-level fields
        setFormPayload((prevForm) => ({ ...prevForm, [name]: value }));
        }
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await addUser(formPayload);
        if (res && res.success) {
            setError({message:'User added successfully!', type: 'success'});
            navigate('/')

        } else {
            setError({message: res.error, type: 'error'});
        }
    };

    const isFormValid = () => formPayload.name && formPayload.email && formPayload.phone;

  return (
    <div className="container mt-5">
        <h2 className="mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
            {["Name", "Email", "Phone", "Website"].map((field) => (
                <TextInput
                    key={field}
                    label={field}
                    name={field.toLowerCase()}
                    value={formPayload[field.toLowerCase()]}
                    onChange={handleChange}
                    showFieldError={showFieldError}
                    required={true}
                />
            ))}

            {/* Reusable TextInput components for company fields */}
            {["name", "catchPhrase", "bs"].map((field) => (
                <TextInput
                    key={`company.${field}`} 
                    label={`Company ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    name={`company.${field}`} // Adjust the name accordingly
                    value={formPayload.company[field]}
                    onChange={handleChange}
                />
            ))}
            {/* Reusable TextInput components for address fields */}
            {["Street", "Suite", "City", 'Zipcode'].map((field) => (
                <TextInput
                    key={`address.${field.toLowerCase()}`} 
                    label={`Address ${field}`}
                    name={`address.${field.toLowerCase()}`} // Adjust the name accordingly
                    value={formPayload.address[field.toLowerCase()]}
                    onChange={handleChange}
                />
            ))}

            <div
            className={`d-inline-block ${!isFormValid() && 'btn-disabled'}`}
            onMouseEnter={() => {
                setShowFieldError(true);
            }}
            >
            <ThemeButton children={'Submit'} isFormValid={isFormValid}>
                Submit
            </ThemeButton>
            </div>
        </form>
    </div>
  );
};

export default UserForm;
