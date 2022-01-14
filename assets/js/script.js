document.addEventListener("DOMContentLoaded", function () {
  const profile = document.getElementById("profile");
  const profileMenu = profile.querySelector(".profile-navigation");

  profile.onclick = function (e) {
    e.stopPropagation();
    profileMenu.style.display = "flex";
  };

  window.addEventListener("click", function () {
    console.log("clicked");
    profileMenu.style.display = "none";
  });

  const members = document.querySelectorAll("#accounts-in-month table tbody tr");
  const depositPaymentPopup = document.querySelector(".deposit-payment-popup") || document.createElement("div");
  const depositForm = document.querySelector(".deposit-payment-popup form");
  const transactionField = document.querySelector(".transaction_field");
  const depositPaymentType = document.getElementById("deposit_payment_type");

  Object.values(members).map((item) => {
    const depositButton = item.querySelector("#deposit");
    depositButton.onclick = function (e) {
      e.stopPropagation();
      depositPaymentPopup.style.display = "block";
    };
  });

  if (depositPaymentType)
    depositPaymentType.onchange = function () {
      if (["bkash", "roket"].includes(this?.value)) {
        transactionField.style.display = "block";
      } else {
        transactionField.style.display = "none";
      }
    };
  window.addEventListener("click", function () {
    depositPaymentPopup.style.display = "none";
  });

  if (depositForm)
    depositForm.onclick = function (e) {
      e.stopPropagation();
    };
});
