var numLinks = 0;

function go (img, head, content, links) {
	modal.style.display = "block";
	numLinks = links.length;
	
	if(img != "") {
		image.src = img+".jpg";
		image.alt = img;
		image.style.borderRadius = 0;	
		image.style.borderColor = "#00ffff";
	} else {
		image.src = "";
		image.style.borderColor = "white";
	}
	
	header.innerHTML = head;
	document.getElementById('modal-text').innerHTML = content;
	
	for(i=0; i<numLinks; i++) {
		var p = document.createElement("p");
		var a = document.createElement("a");
		a.href = links[i];
		a.target = "_blank";
		var node = document.createTextNode(links[i]);
		
		a.appendChild(node);
		a.id = "modal-link-"+i;
		
		p.appendChild(a);
		
		var div = document.getElementById("modal-content");
		div.appendChild(p);
	}
}

function clearModal() {
	for(i=0; i<numLinks; i++) {
		var link = document.getElementById("modal-link-"+i);
		link.parentNode.removeChild(link);
	}
	
	image.src = "";
	image.alt = "";
	image.style.borderColor = "white";
	
	header.innerHTML = "";
}
	