'use client'
import React, { useEffect, useState } from 'react'
import Select from "react-select";
import Header from "@/components/Header";
import LocationSearchInput from "@/components/UI/LocationSearchInput";
import InputQuote from "@/components/UI/InputQuote";
import SelectDate from "@/components/UI/SelectDate";
import PhoneInput from "@/components/UI/PhoneInput";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

// Custom styles for react-select that adapt to theme - matching input design exactly
const getSelectStyles = (isDark) => ({
    control: (provided, state) => ({
        ...provided,
        minHeight: '48px',
        height: '48px',
        border: `1px solid ${state.isFocused ? '#6366f1' : (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)')}`,
        borderRadius: '8px',
        boxShadow: state.isFocused ? '0 0 0 3px rgba(99, 102, 241, 0.1)' : 'none',
        backgroundColor: isDark ? '#1e293b' : '#ffffff',
        marginTop: '8px',
        fontFamily: 'var(--font-inter), sans-serif',
        fontSize: '14px',
        '&:hover': {
            borderColor: '#6366f1',
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: isDark ? '#94a3b8' : '#64748b',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: isDark ? '#f1f5f9' : '#0f172a',
    }),
    input: (provided) => ({
        ...provided,
        color: isDark ? '#f1f5f9' : '#0f172a',
        margin: '0',
        padding: '0',
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0 15px',
        height: '48px',
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '8px',
        boxShadow: isDark 
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)' 
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
        backgroundColor: isDark ? '#1e293b' : '#ffffff',
        zIndex: 9999,
    }),
    menuPortal: (provided) => ({
        ...provided,
        zIndex: 9999,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected 
            ? '#6366f1' 
            : state.isFocused 
            ? (isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)')
            : (isDark ? '#1e293b' : '#ffffff'),
        color: state.isSelected ? '#ffffff' : (isDark ? '#f1f5f9' : '#0f172a'),
        '&:hover': {
            backgroundColor: state.isSelected ? '#6366f1' : (isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'),
        },
    }),
});

const QuoteForm = ({form}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const selectStyles = getSelectStyles(isDark);
    
    const [makes, setMakes] = useState([]);
    const [vehicles, setVehicles] = useState([
        {
            year: null,
            make: null,
            model: null,
            operable: null,
            transportType: null,
            modelsList: []
        }
    ]);
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        email: '',
        date: null,
        startDate: null,
        phone: ''
    });

    const [errors, setErrors] = useState({}); // ✅ Track validation errors
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const dataCar = {
        year: Array.from({ length: 2027 - 1900 + 1 }, (_, i) => {
            const year = 2027 - i;
            return { value: year.toString(), label: year.toString() };
        }),
        day: [
            { value: '2weeks', label: 'Within 2 Weeks' },
            { value: '30days', label: 'Within 30 Days' },
            { value: 'more30', label: 'More than 30 days' }
        ],
        transportType: [
            { value: 'open', label: 'Open' },
            { value: 'enclosed', label: 'Enclosed' }
        ],
        operable: [
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
        ],
    };

    useEffect(() => {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
            .then(res => res.json())
            .then(data => {
                const formatted = data.Results.map(m => ({
                    value: m.MakeName,
                    label: m.MakeName
                }));
                setMakes(formatted);
            })
            .catch(err => console.error("Error fetching makes:", err));
    }, []);

    const handleVehicleChange = (index, field, value) => {
        const newVehicles = [...vehicles];
        newVehicles[index][field] = value;

        if (field === 'make' && value) {
            newVehicles[index].model = null;
            fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${encodeURIComponent(value.value)}?format=json`)
                .then(res => res.json())
                .then(data => {
                    const modelsList = data.Results.map(m => ({
                        value: m.Model_Name,
                        label: m.Model_Name
                    }));
                    newVehicles[index].modelsList = modelsList;
                    setVehicles(newVehicles);
                });
        } else {
            setVehicles(newVehicles);
        }
    };

    const addVehicle = () => {
        setVehicles([...vehicles, {
            year: null,
            make: null,
            model: null,
            operable: null,
            transportType: null,
            modelsList: []
        }]);
    };

    const removeVehicle = (index) => {
        const newVehicles = vehicles.filter((_, i) => i !== index);
        setVehicles(newVehicles);
    };

    const clearForm = () => {
        setFormData({
            from: '',
            to: '',
            email: '',
            date: null,
            startDate: null,
            phone: ''
        });
        setVehicles([{
            year: null,
            make: null,
            model: null,
            operable: null,
            transportType: null,
            modelsList: []
        }]);
        setErrors({});
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        clearForm();
    };

    const handleFormDataChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // ✅ Validation logic
    const validateForm = () => {
        let newErrors = {};

        if (!formData.from) newErrors.from = "Pickup location is required";
        if (!formData.to) newErrors.to = "Destination is required";

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Valid email is required";
        }

        // Validate USA phone number: must be exactly 10 digits
        if (!formData.phone || !/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid 10-digit US phone number";
        }

        if (!formData.date) newErrors.date = "Available date is required";
        if (!formData.startDate) newErrors.startDate = "Pickup date is required";

        vehicles.forEach((v, i) => {
            if (!v.transportType) newErrors[`vehicle_${i}_transportType`] = "Transport type required";
            if (!v.year) newErrors[`vehicle_${i}_year`] = "Year required";
            if (!v.make) newErrors[`vehicle_${i}_make`] = "Make required";
            if (!v.model) newErrors[`vehicle_${i}_model`] = "Model required";
            if (!v.operable) newErrors[`vehicle_${i}_operable`] = "Select operable option";
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            // alert("Please fix the errors before submitting.");
            return;
        }

        const finalData = { formData, vehicles };

        try {
            const res = await fetch("https://api.midaswaylogistics.com/send-quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(finalData)
            });

            const data = await res.json();
            if (data.success) {
                setShowSuccessModal(true);
            } else {
                alert("Failed to send quote: " + data.error);
            }
        } catch (err) {
            console.error(err);
            alert("Error sending quote");
        }
    };

    return (
        <>
            <div className="content" style={{ minHeight: '85vh' }}>
                {!form  && (
                    <div style={{paddingTop: 100}}>
                        <Header/>
                    </div>
                )}

                <div className={'form-quote'} style={{ marginTop: !form ? '20px' : '0' }}>
                    <div className="quote-header-modern">
                        <h1 className={'form-quote-title'}>Get Your Free Quote</h1>
                        <p className={'form-quote-text'}>
                            Need reliable <strong>car transport across the USA</strong>?
                            Our team specializes in <strong>door-to-door auto shipping</strong>,
                            offering affordable rates with no hidden fees.
                        </p>
                    </div>

                    <div className="form-section">
                        <div className="form-section-header">
                            <h2 className="form-section-title">Pickup & Delivery Locations</h2>
                        </div>
                        <div className={'form-quote-row'}>
                            <LocationSearchInput
                                title={'Transport car FROM'}
                                value={formData.from}
                                onChange={(val) => handleFormDataChange('from', val)}
                                errors={errors.from}
                            />

                            <LocationSearchInput
                                title={'Transport car TO'}
                                value={formData.to}
                                onChange={(val) => handleFormDataChange('to', val)}
                                errors={errors.to}
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-section-header">
                            <h2 className="form-section-title">Vehicle Information</h2>
                            {vehicles.length > 0 && (
                                <span className="vehicle-count-badge">{vehicles.length} {vehicles.length === 1 ? 'Vehicle' : 'Vehicles'}</span>
                            )}
                        </div>
                        
                        {vehicles.map((vehicle, index) => (
                            <div key={index} className="vehicle-card">
                                <div className="vehicle-card-header">
                                    <h3 className="vehicle-card-title">Vehicle {index + 1}</h3>
                                    {vehicles.length > 1 && (
                                        <button 
                                            className="vehicle-remove-btn" 
                                            type="button"
                                            onClick={() => removeVehicle(index)}
                                            aria-label="Remove vehicle"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                
                                <div className={'form-quote-row vehicle-row'}>
                                    <div className="location-search">
                                        <label>Transport type</label>
                                        <Select
                                            options={dataCar.transportType}
                                            placeholder="Transport type"
                                            value={vehicle.transportType}
                                            onChange={(val) => handleVehicleChange(index, 'transportType', val)}
                                            styles={selectStyles}
                                            menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                                            menuPosition="fixed"
                                        />
                                        {errors[`vehicle_${index}_transportType`] && (
                                            <span className="error">{errors[`vehicle_${index}_transportType`]}</span>
                                        )}
                                    </div>

                                    <div className="location-search">
                                        <label>Vehicle year</label>
                                        <Select
                                            options={dataCar.year}
                                            placeholder="Vehicle year"
                                            value={vehicle.year}
                                            onChange={(val) => handleVehicleChange(index, 'year', val)}
                                            styles={selectStyles}
                                            menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                                            menuPosition="fixed"
                                        />
                                        {errors[`vehicle_${index}_year`] && (
                                            <span className="error">{errors[`vehicle_${index}_year`]}</span>
                                        )}
                                    </div>

                                    <div className="location-search">
                                        <label>Select make</label>
                                        <Select
                                            options={makes}
                                            placeholder="Select make"
                                            value={vehicle.make}
                                            onChange={(val) => handleVehicleChange(index, 'make', val)}
                                            styles={selectStyles}
                                            menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                                            menuPosition="fixed"
                                        />
                                        {errors[`vehicle_${index}_make`] && (
                                            <span className="error">{errors[`vehicle_${index}_make`]}</span>
                                        )}
                                    </div>

                                    <div className="location-search">
                                        <label>Select model</label>
                                        <Select
                                            options={vehicle.modelsList}
                                            placeholder={vehicle.make ? "Select model" : "Select make"}
                                            value={vehicle.model}
                                            onChange={(val) => handleVehicleChange(index, 'model', val)}
                                            isDisabled={!vehicle.make}
                                            styles={selectStyles}
                                            menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                                            menuPosition="fixed"
                                        />
                                        {errors[`vehicle_${index}_model`] && (
                                            <span className="error">{errors[`vehicle_${index}_model`]}</span>
                                        )}
                                    </div>

                                    <div className="location-search">
                                        <label>Is it operable?</label>
                                        <Select
                                            options={dataCar.operable}
                                            placeholder="Is it operable?"
                                            value={vehicle.operable}
                                            onChange={(val) => handleVehicleChange(index, 'operable', val)}
                                            styles={selectStyles}
                                            menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                                            menuPosition="fixed"
                                        />
                                        {errors[`vehicle_${index}_operable`] && (
                                            <span className="error">{errors[`vehicle_${index}_operable`]}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button className={'addCar'} type="button" onClick={addVehicle}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span>Add Another Vehicle</span>
                        </button>
                    </div>

                    <div className="form-section">
                        <div className="form-section-header">
                            <h2 className="form-section-title">Contact & Schedule</h2>
                        </div>
                        <div className={'form-quote-row'}>
                            <InputQuote
                                title={'Your Email'}
                                placeholder={'your.email@example.com'}
                                value={formData.email}
                                onChange={(val) => handleFormDataChange('email', val)}
                                errors={errors.email}
                            />

                            <PhoneInput
                                title="Your phone"
                                value={formData.phone}
                                onChange={(val) => handleFormDataChange('phone', val)}
                                errors={errors.phone}
                            />

                            <SelectDate
                                title={'First available date'}
                                placeholder={'Select first available date'}
                                onChange={(val) => handleFormDataChange('date', val)}
                                errors={errors.date}
                                value={formData.date}
                            />

                            <SelectDate
                                title={'Pickup date'}
                                placeholder={'Select pickup date'}
                                onChange={(val) => handleFormDataChange('startDate', val)}
                                errors={errors.startDate}
                                value={formData.startDate}
                            />
                        </div>
                    </div>

                    <div className={'form-submit-section'}>
                        <div className={'form-quote-button'} onClick={handleSubmit}>
                            <span>Get Free Quote</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <p className="form-submit-note">No hidden fees • Instant quote • 100% free</p>
                    </div>
                    <div className="seo-text"
                         style={{marginTop: "20px", fontSize: "12px", color: "#555", lineHeight: "1.6"}}>
                        <p>
                            At <strong>RoundX</strong>, we make <strong>car shipping across the
                            USA</strong> simple, fast,
                            and affordable. Whether you’re moving across state lines or relocating nationwide, our
                            <strong> auto transport services</strong> ensure your vehicle arrives safely and on time.
                        </p>
                        <br/>
                        <p>
                            Get a <strong>free instant car shipping quote</strong> today by filling out the form above.
                            Compare rates, choose between <strong>open or enclosed transport</strong>, and book your
                            <strong> door-to-door auto shipping</strong> with confidence. With transparent pricing and
                            no hidden
                            fees, <strong>RoundX</strong> is the trusted choice for <strong>vehicle
                            transport in the USA</strong>.
                        </p>
                        <br/>
                        <p>
                            Looking for reliable <strong>auto shipping companies</strong>? Ship your car with RoundX
                            and experience stress-free <strong>car transport services</strong> from start to finish.
                        </p>
                    </div>

                </div>
            </div>
            {!form && (
                <Footer/>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="success-modal-overlay" onClick={handleCloseModal}>
                    <div className="success-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="success-modal-content">
                            <div className="success-icon-wrapper">
                                <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h2 className="success-modal-title">Quote Sent Successfully!</h2>
                            <p className="success-modal-message">
                                Thank you for your request. Our team will connect with you within <strong>15 minutes</strong> to discuss your vehicle shipping needs and provide you with the best quote.
                            </p>
                            <div className="success-modal-info">
                                <div className="success-info-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <span>Response within 15 minutes</span>
                                </div>
                                <div className="success-info-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <span>Check your email & phone</span>
                                </div>
                            </div>
                            <button className="success-modal-button" onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default QuoteForm;
