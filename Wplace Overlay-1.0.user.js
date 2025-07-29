// ==UserScript==
// @name         Wplace Overlay
// @namespace    https://github.com/FrodoCompacto
// @version      1.0
// @description  Permite escolher, mover, redimensionar, fixar e salvar overlay personalizado no wplace.live
// @match        https://wplace.live/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wplace.live
// @grant        none
// ==/UserScript==

let overlayMode = localStorage.getItem("overlayMode") || "over";
let darken = localStorage.getItem("darken") === "true";
let isLocked = localStorage.getItem("isLocked") === "true";
let overlayImg = null;

function createOverlayImage(url) {
	if (!overlayImg) {
		overlayImg = document.createElement("img");
		overlayImg.id = "custom-overlay";
		overlayImg.style.position = "absolute";
		overlayImg.style.top = localStorage.getItem("overlayTop") || "0px";
		overlayImg.style.left = localStorage.getItem("overlayLeft") || "0px";
		overlayImg.style.width = localStorage.getItem("overlayWidth") || "300px";
		overlayImg.style.height = localStorage.getItem("overlayHeight") || "300px";
		overlayImg.style.pointerEvents = isLocked ? "none" : "auto";
		overlayImg.style.zIndex = "9999";
		overlayImg.style.resize = isLocked ? "none" : "both";
		overlayImg.style.overflow = "auto";
		overlayImg.style.cursor = isLocked ? "default" : "move";
		overlayImg.draggable = false;

		enableDragging(overlayImg);
		enableResizePersistence(overlayImg);
		document.body.appendChild(overlayImg);
	}

	overlayImg.src = url;
	overlayImg.style.mixBlendMode = overlayMode === "aus" ? "normal" : overlayMode;
	overlayImg.style.opacity = darken ? "0.6" : "1";
	localStorage.setItem("overlayImage", url);
}

function enableDragging(element) {
	let isDragging = false;
	let startX, startY, startLeft, startTop;

	element.addEventListener("mousedown", (e) => {
		if (isLocked) return;
		isDragging = true;
		startX = e.clientX;
		startY = e.clientY;
		startLeft = parseInt(element.style.left) || 0;
		startTop = parseInt(element.style.top) || 0;
		e.preventDefault();
	});

	window.addEventListener("mousemove", (e) => {
		if (!isDragging || isLocked) return;
		const dx = e.clientX - startX;
		const dy = e.clientY - startY;
		element.style.left = `${startLeft + dx}px`;
		element.style.top = `${startTop + dy}px`;
	});

	window.addEventListener("mouseup", () => {
		if (overlayImg) {
			localStorage.setItem("overlayLeft", overlayImg.style.left);
			localStorage.setItem("overlayTop", overlayImg.style.top);
		}
		isDragging = false;
	});
}

function enableResizePersistence(element) {
	new ResizeObserver(() => {
		localStorage.setItem("overlayWidth", element.style.width);
		localStorage.setItem("overlayHeight", element.style.height);
	}).observe(element);
}

function patchUI() {
	if (document.getElementById("overlay-container")) return;

	const container = document.createElement("div");
	container.id = "overlay-container";
	container.style.position = "absolute";
	container.style.top = "50%";
    container.style.transform = "translateY(-50%)";
	container.style.right = "10px";
	container.style.zIndex = "9999";
	container.style.display = "flex";
	container.style.flexDirection = "column";
	container.style.gap = "6px";
	container.style.fontFamily = "sans-serif";

	const btn = (text, onclick) => {
		const b = document.createElement("button");
		b.textContent = text;
		b.onclick = onclick;
		b.style.backgroundColor = "#0e0e0e7f";
		b.style.color = "white";
		b.style.border = "solid 1px #1d1d1d7f";
		b.style.borderRadius = "4px";
		b.style.padding = "5px 10px";
		b.style.cursor = "pointer";
		b.style.backdropFilter = "blur(2px)";
		return b;
	};

	const blendBtn = btn(`Modo: ${overlayMode}`, () => {
		const modos = ["aus", "over", "difference", "out"];
		overlayMode = modos[(modos.indexOf(overlayMode) + 1) % modos.length];
		blendBtn.textContent = `Modo: ${overlayMode}`;
		if (overlayImg) overlayImg.style.mixBlendMode = overlayMode === "aus" ? "normal" : overlayMode;
		localStorage.setItem("overlayMode", overlayMode);
	});

	const darkenBtn = btn(`Escurecer: ${darken ? "Sim" : "Não"}`, () => {
		darken = !darken;
		darkenBtn.textContent = `Escurecer: ${darken ? "Sim" : "Não"}`;
		if (overlayImg) overlayImg.style.opacity = darken ? "0.6" : "1";
		localStorage.setItem("darken", darken);
	});

	const lockBtn = btn(isLocked ? "🔒 Bloqueado" : "🔓 Editável", () => {
		isLocked = !isLocked;
		lockBtn.textContent = isLocked ? "🔒 Bloqueado" : "🔓 Editável";
		if (overlayImg) {
			overlayImg.style.pointerEvents = isLocked ? "none" : "auto";
			overlayImg.style.cursor = isLocked ? "default" : "move";
			overlayImg.style.resize = isLocked ? "none" : "both";
		}
		localStorage.setItem("isLocked", isLocked);
	});

	const resetBtn = btn("Redefinir Overlay", () => {
		localStorage.clear();
		if (overlayImg) overlayImg.remove();
		overlayImg = null;
		alert("Overlay removido e configurações resetadas.");
		location.reload();
	});

	const centerBtn = btn("Centralizar na tela", () => {
		if (overlayImg) {
			overlayImg.style.left = `${(window.innerWidth - overlayImg.offsetWidth) / 2}px`;
			overlayImg.style.top = `${(window.innerHeight - overlayImg.offsetHeight) / 2}px`;
			localStorage.setItem("overlayLeft", overlayImg.style.left);
			localStorage.setItem("overlayTop", overlayImg.style.top);
		}
	});

	// Inputs manuais
	const sizeContainer = document.createElement("div");
	sizeContainer.style.display = "flex";
	sizeContainer.style.gap = "4px";
	sizeContainer.style.alignItems = "center";

	const widthInput = document.createElement("input");
	widthInput.type = "number";
	widthInput.placeholder = "Largura";
	widthInput.style.width = "80px";
	widthInput.style.padding = "2px";
	widthInput.style.borderRadius = "4px";

	const heightInput = document.createElement("input");
	heightInput.type = "number";
	heightInput.placeholder = "Altura";
	heightInput.style.width = "80px";
	heightInput.style.padding = "2px";
	heightInput.style.borderRadius = "4px";

	const applySizeBtn = btn("Aplicar Tamanho", () => {
		if (overlayImg) {
			if (widthInput.value) overlayImg.style.width = widthInput.value + "px";
			if (heightInput.value) overlayImg.style.height = heightInput.value + "px";
			localStorage.setItem("overlayWidth", overlayImg.style.width);
			localStorage.setItem("overlayHeight", overlayImg.style.height);
		}
	});

	sizeContainer.append("Tamanho:", widthInput, heightInput, applySizeBtn);

	const fileInput = document.createElement("input");
	fileInput.type = "file";
	fileInput.accept = "image/*";
	fileInput.style.display = "none";
	fileInput.onchange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => createOverlayImage(event.target.result);
			reader.readAsDataURL(file);
		}
	};

	const uploadBtn = btn("Escolher Imagem", () => fileInput.click());

	container.append(fileInput, uploadBtn, blendBtn, darkenBtn, lockBtn, centerBtn, sizeContainer, resetBtn);
	document.body.appendChild(container);

	// Preenche os campos com os valores atuais
	setTimeout(() => {
		if (overlayImg) {
			widthInput.value = parseInt(overlayImg.style.width) || 300;
			heightInput.value = parseInt(overlayImg.style.height) || 300;
		}
	}, 500);
}

const observer = new MutationObserver(() => patchUI());
observer.observe(document.body, { childList: true, subtree: true });
patchUI();

// Carregar overlay salvo ao iniciar
const savedImage = localStorage.getItem("overlayImage");
if (savedImage) {
	createOverlayImage(savedImage);
}
