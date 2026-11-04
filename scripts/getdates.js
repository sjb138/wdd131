const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;
document.querySelector("#lastModified").textContent =
  `Last modified: ${document.lastModified}`;