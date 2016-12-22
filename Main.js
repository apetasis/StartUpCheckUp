
function addAttorneyCheck() {
	if (letter_info.attorney.checked == true) {
		this.setCustomValidity("This site is not meant for those who have attorneys.");
	}

	else if (letter_info.attorney.checked == false) {
		this.setCustomValidity("");
	}
}

function addSharesCheck() {
	if (letter_info.shares.value == 0) {
		this.setCustomValidity("Need more than 0 shares.");
	}

	else if (letter_info.shares.value > 0) {
		this.setCustomValidity("");
	}
}

function pdfCreate(x) {
    GrabzIt("YWFmNTY4Yjc1NjNmNGY0YThmNjc5N2Q2NTFlOTFlNTg=").ConvertHTML(x, {"format": "pdf", "background": 0}).Create();
} 

function validateForm() {
	if (letter_info.attorney.checked == true) {
		letter_info.attorney.focus();
		return false
	}
	
	if (letter_info.shares.value == 0) {
		letter_info.shares.focus();
		return false;
	}

	if(letter_info.purpose1.checked == false && letter_info.purpose2.checked == false && letter_info.purpose3.checked == false) {
		document.getElementById("no_purpose").innerHTML = "Please check one of the purpose boxes";
		return false;
	}
	else {
		return true;
	}

}

window.onload = function() {
	document.getElementById("attorney_check").addEventListener("change", addAttorneyCheck);
	document.getElementById("shares").addEventListener("change", addSharesCheck);
};