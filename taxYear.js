var lastTaxYear = "103";
var taxYear = "104";
var thisYear = "105";
var largeTaxYear = "１０４";
function showLastTaxYears() {
  //<span name="showLastTaxYear"></span>
  var showLastTaxYears = document.getElementsByName("showLastTaxYear");
  if(showLastTaxYears != null) {
    for(var i = 0 ; i < showLastTaxYears.length ; i++) {
      var showLastTaxYear = showLastTaxYears[i];
      showLastTaxYear.innerHTML = lastTaxYear;
    }
  }
}
function showTaxYears() {
  //<span name="showTaxYear"></span>
  var showTaxYears = document.getElementsByName("showTaxYear");
  if(showTaxYears != null) {
    for(var i = 0 ; i < showTaxYears.length ; i++) {
      var showTaxYear = showTaxYears[i];
      showTaxYear.innerHTML = taxYear;
    }
  }
}
function showThisYears() {
  //<span name="showThisYear"></span>
  var showThisYears = document.getElementsByName("showThisYear");
  if(showThisYears != null) {
    for(var i = 0 ; i < showThisYears.length ; i++) {
      var showThisYear = showThisYears[i];
      showThisYear.innerHTML = thisYear;
    }
  }
}

function showAllYears() {
  showLastTaxYears();
  showTaxYears();
  showThisYears();
}

window.onload = showAllYears;
