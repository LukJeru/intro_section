const features = document.getElementById("features");
const company = document.getElementById("company");

features.addEventListener("mouseenter", popupFeature);
features.addEventListener("mouseleave", popinFeature);
company.addEventListener("mouseenter", popupCompany);
company.addEventListener("mouseleave", popinCompany);

function popupFeature(event) {
  document.getElementById("featurePopUp").style.visibility = "visible";
  document.getElementById("arrow1").src="/images/icon-arrow-up.svg";
}

function popinFeature(event) {
  document.getElementById("featurePopUp").style.visibility = "";
  document.getElementById("arrow1").src="/images/icon-arrow-down.svg";
}

function popupCompany(event) {
  document.getElementById("companyPopUp").style.visibility = "visible";
  document.getElementById("arrow2").src="/images/icon-arrow-up.svg";
}

function popinCompany(event) {
  document.getElementById("companyPopUp").style.visibility = "";
  document.getElementById("arrow2").src="/images/icon-arrow-down.svg";
}
