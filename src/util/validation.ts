const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

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
