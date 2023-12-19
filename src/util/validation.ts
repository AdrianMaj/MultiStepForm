const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const validateEmail = (email: string) => {
	if (emailRegex.test(email.toLowerCase())) {
		return true
	} else {
		return false
	}
}
export const validateName = (name: string) => {
	if (nameRegex.test(name.toLowerCase())) {
		return true
	} else {
		return false
	}
}
export const validatePhone = (phone: string) => {
	if (phoneRegex.test(phone)) {
		return true
	} else {
		return false
	}
}
