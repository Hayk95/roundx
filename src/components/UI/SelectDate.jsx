"use client";

import React, { useState, useEffect, useRef } from 'react';

const SelectDate = ({ title, placeholder, onChange, errors, value }) => {
    const [displayValue, setDisplayValue] = useState('');
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const calendarRef = useRef(null);
    const inputRef = useRef(null);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Convert YYYY-MM-DD to Date object
    const parseDate = (dateString) => {
        if (!dateString) return null;
        try {
            const date = new Date(dateString + 'T00:00:00');
            if (isNaN(date.getTime())) return null;
            return date;
        } catch {
            return null;
        }
    };

    // Convert Date to YYYY-MM-DD
    const formatDate = (date) => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Convert YYYY-MM-DD to MM/DD/YYYY for display
    const formatForDisplay = (dateString) => {
        const date = parseDate(dateString);
        if (!date) return '';
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    useEffect(() => {
        if (value) {
            const date = parseDate(value);
            setSelectedDate(date);
            setDisplayValue(formatForDisplay(value));
            if (date) setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
        } else {
            setSelectedDate(null);
            setDisplayValue('');
        }
    }, [value]);

    // Close calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target) &&
                inputRef.current && !inputRef.current.contains(event.target)) {
                setIsCalendarOpen(false);
            }
        };

        if (isCalendarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isCalendarOpen]);

    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const isToday = (date) => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const isSelected = (date) => {
        if (!selectedDate) return false;
        return date.toDateString() === selectedDate.toDateString();
    };

    const isPastDate = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const handleDateClick = (day) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        if (isPastDate(date)) return;
        
        setSelectedDate(date);
        const formatted = formatDate(date);
        setDisplayValue(formatForDisplay(formatted));
        setIsCalendarOpen(false);
        if (onChange) onChange(formatted);
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleInputClick = () => {
        setIsCalendarOpen(true);
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];

        // Empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            const isPast = isPastDate(date);
            const dayClass = `calendar-day ${isPast ? 'past' : ''} ${isToday(date) ? 'today' : ''} ${isSelected(date) ? 'selected' : ''}`;
            
            days.push(
                <div
                    key={day}
                    className={dayClass}
                    onClick={() => !isPast && handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="location-search date-input-wrapper">
            <label htmlFor="date-input">{title}</label>
            <div className="date-input-container" style={{ position: 'relative' }}>
                <input
                    ref={inputRef}
                    id="date-input"
                    type="text"
                    className="location-search-input custom-date-input"
                    placeholder="MM/DD/YYYY"
                    value={displayValue}
                    readOnly
                    onClick={handleInputClick}
                    maxLength={10}
                />
                <span 
                    className="date-picker-icon"
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                    📅
                </span>
                
                {isCalendarOpen && (
                    <div ref={calendarRef} className="date-picker-calendar">
                        <div className="calendar-header">
                            <button 
                                type="button"
                                className="calendar-nav-btn"
                                onClick={handlePrevMonth}
                            >
                                ‹
                            </button>
                            <div className="calendar-month-year">
                                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </div>
                            <button 
                                type="button"
                                className="calendar-nav-btn"
                                onClick={handleNextMonth}
                            >
                                ›
                            </button>
                        </div>
                        <div className="calendar-weekdays">
                            {weekDays.map(day => (
                                <div key={day} className="calendar-weekday">{day}</div>
                            ))}
                        </div>
                        <div className="calendar-days">
                            {renderCalendar()}
                        </div>
                    </div>
                )}
            </div>
            {errors && <span className="error">{errors}</span>}
        </div>
    );
}

export default SelectDate;
