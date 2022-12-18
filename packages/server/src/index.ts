export const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

function validateEmail(email: string) {
	return emailRegex.test(email);
}
