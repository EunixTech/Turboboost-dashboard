/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import { styled, useTheme } from "@mui/material";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
;
export default function PhoneInputField({ value, setPhoneNumberValue, form}) {
	const theme = useTheme();
	return (
		<StyledPhoneInput
			defaultCountry="us"
			value={value}
			onChange={(formattedValue)=>{
                setPhoneNumberValue(formattedValue);
                form.setFieldValue("phone_number", formattedValue);
            }}
		/>
	);
}
const StyledPhoneInput = styled(PhoneInput)(({ theme }) => ({
	width: "100%",
	"& .react-international-phone-input": {
		width: "100%",
		backgroundColor: "transparent !important",
		color: theme.palette?.pageHeading,
		border: `1px solid rgb(235, 235, 235) !important`,
	},
	"& .react-international-phone-country-selector-button": {
		backgroundColor: "transparent !important",
		border: `1px solid rgb(235, 235, 235) !important`,
	},
	"& .react-international-phone-country-selector-dropdown": {
		backgroundColor: theme.palette?.card?.background,
		color: theme.palette?.pageHeading,
		border: `1px solid rgb(235, 235, 235) !important`,
	},
	"& .react-international-phone-country-selector-dropdown__list-item:hover": {
		backgroundColor: theme.palette?.card?.background,
	},
	"& .react-international-phone-country-selector-button__dropdown-arrow ": {
		/* Your custom styles for the arrow */
		"background-image":
			"url('/arrow/down.svg')" /* Example for changing image */,
	},
}));
