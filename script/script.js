
'use strict';

// Placeholder for script.js
// Add JavaScript functionality here, such as form validation or user interactions

document.addEventListener('DOMContentLoaded', function () {

	const main = document.querySelector('.main');
	const messageSection = document.querySelector('.message__section');
	const phoneNumberInput = document.getElementById('phone-number');
	const fullNameInput = document.getElementById('full-name');
	const emailInput = document.getElementById('email');
	const termsCheckbox = document.getElementById('terms');
	const form = document.querySelector('.form');
	const customSelect = document.querySelector('.custom-select');
	const selectBox = customSelect.querySelector('.select-box');
	const optionsList = customSelect.querySelector('.select-options');
	const hiddenInput = customSelect.querySelector('input[type="hidden"]');
	const customSelectTitle = customSelect.querySelector('.custom-select__title');


	// Full Name Validation
	fullNameInput.addEventListener('change', function (e) {
		e.preventDefault();
		const validationMessage = fullNameInput.parentElement.querySelector('.form__validation');
		const namePattern = /^[a-zA-Z\u0590-\u05FF\s]+$/;
		if (!namePattern.test(fullNameInput.value)) {
			validationMessage.textContent = 'שם מלא חייב להכיל טקסט בלבד, ללא מספרים.';
		} else {
			validationMessage.textContent = '';
		}
	});


	// Phone Validation
	phoneNumberInput.addEventListener('change', function (e) {
		e.preventDefault();
		const validationMessage = phoneNumberInput.parentElement.querySelector('.form__validation');
		const phonePattern = /^0\d{9}$/;
		if (!phonePattern.test(phoneNumberInput.value)) {
			validationMessage.textContent = 'נייד חייב להיות בפורמט 054XXXXXXX (10 ספרות, מתחיל ב-0).';
		} else {
			validationMessage.textContent = '';
		}
	});


	// Email Validation
	emailInput.addEventListener('change', function (e) {
		e.preventDefault();
		const validationMessage = emailInput.parentElement.querySelector('.form__validation');
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(emailInput.value)) {
			validationMessage.textContent = 'נא להזין כתובת מייל חוקית.';
		} else {
			validationMessage.textContent = '';
		}
	});

	selectBox.addEventListener('click', function () {
		customSelect.classList.toggle('open');
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', function (e) {
		if (!customSelect.contains(e.target)) {
			customSelect.classList.remove('open');
		}
	});

	optionsList.addEventListener('click', function (e) {
		if (e.target.tagName.toLowerCase() === 'li') {
			const selectedValue = e.target.getAttribute('data-value');
			selectBox.textContent = e.target.textContent;
			hiddenInput.value = selectedValue;
			customSelect.classList.remove('open');
			customSelectTitle.classList.add('custom-select__title--show');
		}
	});

	// Form Submit Validation
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const termsValidationMessage = termsCheckbox.parentElement.querySelector('.form__validation');
		const showroomValidationMessage = customSelect.querySelector('.form__validation');

		let formIsValid = true;

		// Check if terms are agreed
		if (!termsCheckbox.checked) {
			termsValidationMessage.textContent = 'נא לאשר את קבלת התנאים על מנת להמשיך.';
			formIsValid = false;
		} else {
			termsValidationMessage.textContent = '';
		}

		// Check if showroom is selected
		if (hiddenInput.value === '') {
			showroomValidationMessage.textContent = 'נא לבחור אולם תצוגה.';
			formIsValid = false;
		} else {
			showroomValidationMessage.textContent = '';
		}

		if (formIsValid) {
			form.reset();
			main.classList.add('form--success');
			messageSection.classList.add('message--show');

		}
	});

});
