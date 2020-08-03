import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Calendar.css"


function Calendar(props) {
	return (
		<div>
			<DatePicker className="calendar"
				selected={props.selectedDate}
				onChange={(date) => props.handleDateSelection(date)}
				maxDate={new Date()}
				isClearable
                placeholderText='Select by Date'
                
			/>
		</div>
	);
}

export default Calendar;
