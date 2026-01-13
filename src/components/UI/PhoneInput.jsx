"use client";

import React, { useState, useEffect } from "react";

export default function PhoneInput({ title, value, onChange, errors }) {
    // Extract only digits from value, remove +1 if present
    const getDigits = (val) => {
        if (!val) return "";
        const cleaned = val.toString().replace(/\D/g, "");
        // Remove leading 1 if it's a country code or +1 prefix
        if (cleaned.startsWith("1") && cleaned.length === 11) {
            return cleaned.substring(1);
        }
        // Remove +1 if value contains it
        if (val && val.toString().includes("+1")) {
            return cleaned.substring(0, 10);
        }
        return cleaned.substring(0, 10);
    };

    const [digits, setDigits] = useState(getDigits(value));

    useEffect(() => {
        if (value !== undefined) {
            setDigits(getDigits(value));
        }
    }, [value]);

    const formatPhone = (digits) => {
        if (!digits) return "";
        const cleaned = digits.replace(/\D/g, "").substring(0, 10);
        if (cleaned.length === 0) return "";
        
        let formatted = "";
        if (cleaned.length > 0) formatted += "(" + cleaned.substring(0, 3);
        if (cleaned.length >= 4) formatted += ") " + cleaned.substring(3, 6);
        if (cleaned.length >= 7) formatted += "-" + cleaned.substring(6, 10);
        return formatted;
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        // Remove all non-digits and limit to 10 digits (USA phone number)
        const rawDigits = inputValue.replace(/\D/g, "").substring(0, 10);
        
        setDigits(rawDigits);
        
        // Call onChange with just the 10 digits (no +1 prefix)
        if (onChange) {
            onChange(rawDigits);
        }
    };

    const handleBlur = () => {
        // Validate on blur - ensure we have 10 digits
        if (digits.length !== 10 && digits.length > 0) {
            // Keep what they have, validation will show error
        }
    };

    return (
        <div className="location-search phone-input-wrapper" style={{ position: 'relative' }}>
            {title && <label htmlFor="phone-input">{title}</label>}
            <input
                id="phone-input"
                type="tel"
                inputMode="numeric"
                value={formatPhone(digits)}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="(555) 123-4567"
                className="location-search-input phone-input-field"
                maxLength={14}
                pattern="[0-9]{10}"
            />
            {errors && <span className="error">{errors}</span>}
            {digits.length > 0 && digits.length < 10 && (
                <span className="phone-hint">Enter 10-digit US phone number</span>
            )}
        </div>
    );
}



// <div className="location-search">
//     {title && <label htmlFor="phone-input">{title}</label>}
//     <input
//
//         id="phone-input"
//         type="tel"
//         value={formatPhone(digits)}
//         onChange={handleChange}
//         placeholder="+1 (___) ___-____"
//         className="location-search-input"
//     />
// </div>
