import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar(props) {
	return (
		<div>
			<DatePicker
				selected={props.selectedDate}
				onChange={(date) => props.handleDateSelection(date)}
				maxDate={new Date()}
				isClearable
				placeholderText='Pick the Date'
			/>
		</div>
	);
}

export default Calendar;
