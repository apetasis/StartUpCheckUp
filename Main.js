function pdfCreate(x) {
    GrabzIt("YWFmNTY4Yjc1NjNmNGY0YThmNjc5N2Q2NTFlOTFlNTg=").ConvertHTML(x, {"format": "pdf", "background": 0}).Create();
} 

function validateForm() {
	
	if ($.get("administrative_area") !== "Delaware" || $.get("administrative_area") !== "DE" ) {
		alert("Needs to be a Delaware address");
		return false;
	}

	else {
		return true;
	}
	if(letter_info.purpose1.checked == false && letter_info.purpose2.checked == false && letter_info.purpose3.checked == false) {
		document.getElementById("no_purpose").innerHTML = "Please check one of the purpose boxes";
		return false;
	}
	else {
		return true;
	}

}