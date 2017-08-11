
function clickDis(element) {
	var a = document.getElementById(element);

	if (a.style.backgroundColor === "grey") {
		a.style.backgroundColor = "blue";
	} else {
		a.style.backgroundColor = "grey";
	}
}

function move(element) {
	var a = document.getElementById(element);

	if (a.style.marginLeft === "") {
		a.style.marginLeft = "auto";
		a.style.marginRight = "auto"
	} else {
		a.style.marginLeft = "";
		a.style.marginRight = "100%";
	}
}
