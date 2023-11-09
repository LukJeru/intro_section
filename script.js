const features = document.getElementById("features");
const company = document.getElementById("company");
const featurePop = document.getElementById("featurePopUp");
const companyPop = document.getElementById("companyPopUp");

features.addEventListener("mouseover", popupFeature);
featurePop.addEventListener("mouseenter", popupFeature);
featurePop.addEventListener("mouseleave", popinFeature);
features.addEventListener("mouseleave", popinFeature);
company.addEventListener("mouseenter", popupCompany);
company.addEventListener("mouseleave", popinCompany);
companyPop.addEventListener("mouseenter", popupCompany);
companyPop.addEventListener("mouseleave", popinCompany);



function popupFeature(event) {
  featurePop.style.visibility = "visible";
  document.getElementById("arrow1").src="/images/icon-arrow-up.svg";
}

function popinFeature(event) {
  featurePop.style.visibility = "";
  document.getElementById("arrow1").src="/images/icon-arrow-down.svg";
}

function popupCompany(event) {
  companyPop.style.visibility = "visible";
  document.getElementById("arrow2").src="/images/icon-arrow-up.svg";
}

function popinCompany(event) {
  companyPop.style.visibility = "";
  document.getElementById("arrow2").src="/images/icon-arrow-down.svg";
}
