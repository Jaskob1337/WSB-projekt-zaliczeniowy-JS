const result = document.querySelector(".result");
const result2 = document.querySelector(".result2");
const selectBmw = document.querySelector(".selectBmw");
const selectMerc = document.querySelector(".selectMerc");
const selectSkoda = document.querySelector(".selectSkoda");
const selectFiat = document.querySelector(".selectFiat");
const selectKia = document.querySelector(".selectKia");
const selectOpel = document.querySelector(".selectOpel");
const selectPorsche = document.querySelector(".selectPorsche");
const selectRenault = document.querySelector(".selectRenault");
const selectLeasing = document.querySelector(".selectLeasing");
const selectCash = document.querySelector(".selectCash");
const input = document.querySelectorAll(".personal");
const inputName = document.querySelector(".name");
const inputSurname = document.querySelector(".surname");
const errorMessage = document.querySelector(".erroressage");
const sendBtn = document.querySelector(".sendBtn");
const checkboxTires = document.querySelector(".tires");
const checkboxMat = document.querySelector(".mat");
const checkboxWipers = document.querySelector(".wipers");
const checkboxLiquid = document.querySelector(".liquid");
const allCheckbox = document.querySelectorAll(".checkbox");
const radBox = document.querySelectorAll(".personal");
const btnConfirm = document.querySelector(".confirm");
let finalPrice = document.querySelector(".finalPrice");
const $errorMessage = document.getElementById(".errorMessage");

console.log(inputName.value.length);
btnConfirm.addEventListener("click", async () => {
  if (inputName.value.length < 1) {
    alert("wypełnij pole 1");
    return false;
  }
  if (inputSurname.value.length < 1) {
    alert("wypełnij pole 2");
    return false;
  }
});
// totalPrice = () => {
//  let finalPrice = 0;
//   for(let i = 0;i<allCheckbox.length;i++) {
//     if (allCheckbox[i].checked == true)
//     {
//       finalPrice += parseFloat(allCheckbox[i].value);
//     }
//   }
//   finalPrice.textContent=""+finalPrice
//   console.log(finalprice)
// }

document.getElementById("choose1");
document.getElementById("formprice");

const BMW = {
  carId: "BMW",
  carPrice: 23000,
  carMileage: 210000,
};
const Mercedes = {
  carId: "Mercedes",
  carPrice: 34590,
  carMileage: 290000,
};
const Skoda = {
  carId: "Skoda",
  carPrice: 65000,
  carMileage: 155000,
};
const Fiat = {
  carId: "Fiat",
  carPrice: 9000,
  carMileage: 380000,
};
const Kia = {
  carId: "Kia",
  carPrice: 56000,
  carMileage: 176000,
};
const Opel = {
  carId: "Opel",
  carPrice: 24000,
  carMileage: 160000,
};
const Porsche = {
  carId: "Porsche",
  carPrice: 120000,
  carMileage: 190000,
};
const Renault = {
  carId: "Renault",
  carPrice: 17000,
  carMileage: 120000,
};
const choice = {
  paymentLeasing: "Leasing",
  paymentCash: "Cash",
};

selectBmw.addEventListener("click", () => {
  const { carId, carPrice, carMileage } = BMW;
  result.textContent = `Wybrałeś ${carId}, którego cena bazowa wynosi ${carPrice}zł, oraz ma przejechane juz ${carMileage} km`;
  finalPrice.textContent = ` ${carPrice}`;
  totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i].checked) {
        sum += parseInt(allCheckbox[i].value);
      }
      finalPrice.textContent = sum + BMW.carPrice;
    }
  };
});
selectMerc.addEventListener("click", () => {
  const { carId, carPrice, carMileage } = Mercedes;
  result.textContent = `Wybrałeś ${carId}, którego cena bazowa wynosi ${carPrice}zł, oraz ma przejechane juz ${carMileage} km`;
  finalPrice.textContent = ` ${carPrice}`;
  totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i].checked) {
        sum += parseInt(allCheckbox[i].value);
      }
      finalPrice.textContent = sum + Merc.carPrice;
    }
  };
});
selectSkoda.addEventListener("click", () => {
  const { carId, carPrice, carMileage } = Skoda;
  result.textContent = `Wybrałeś ${carId}, którego cena bazowa wynosi ${carPrice}zł, oraz ma przejechane juz ${carMileage} km`;
  finalPrice.textContent = ` ${carPrice}`;
  totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i].checked) {
        sum += parseInt(allCheckbox[i].value);
      }
      finalPrice.textContent = sum + Skoda.carPrice;
    }
  };
});
selectFiat.addEventListener("click", () => {
  const { carId, carPrice, carMileage } = Fiat;
  result.textContent = `Wybrałeś ${carId}, którego cena bazowa wynosi ${carPrice}zł, oraz ma przejechane juz ${carMileage} km`;
  finalPrice.textContent = ` ${carPrice}`;
  totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i].checked) {
        sum += parseInt(allCheckbox[i].value);
      }
      finalPrice.textContent = sum + Fiat.carPrice;
    }
  };
});
selectKia.addEventListener("click", () => {
  const { carId, carPrice, carMileage } = Kia;
  result.textContent = `Wybrałeś ${carId}, którego cena bazowa wynosi ${carPrice}zł, oraz ma przejechane juz ${carMileage} km`;
  finalPrice.textContent = ` ${carPrice}`;
  totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i].checked) {
        sum += parseInt(allCheckbox[i].value);
      }
      finalPrice.textContent = sum + Kia.carPrice;
    }
  };
});
selectOpel.addEventListener("click", () => {
  const { carId, carPrice, carMileage } = Opel;
  result.textContent = `Wybrałeś ${carId}, którego cena bazowa wynosi ${carPrice}zł, oraz ma przejechane juz ${carMileage} km`;
  finalPrice.textContent = ` ${carPrice}`;
  totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i].checked) {
        sum += parseInt(allCheckbox[i].value);
      }
      finalPrice.textContent = sum + Opel.carPrice;
    }
  };
});
selectPorsche.addEventListener("click", () => {
  const { carId, carPrice, carMileage } = Porsche;
  result.textContent = `Wybrałeś ${carId}, którego cena bazowa wynosi ${carPrice}zł, oraz ma przejechane juz ${carMileage} km`;
  finalPrice.textContent = ` ${carPrice}`;
  totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i].checked) {
        sum += parseInt(allCheckbox[i].value);
      }
      finalPrice.textContent = sum + Porsche.carPrice;
    }
  };
});
selectRenault.addEventListener("click", () => {
  const { carId, carPrice, carMileage } = Renault;
  finalPrice.textContent = ` ${carPrice}`;
  result.textContent = `Wybrałeś ${carId}, którego cena bazowa wynosi ${carPrice}zł, oraz ma przejechane juz ${carMileage} km `;
  totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i].checked) {
        sum += parseInt(allCheckbox[i].value);
      }
      finalPrice.textContent = sum + Renault.carPrice;
    }
  };
});

// function dataTransfer(value) {
//   formprice2.innerHTML = value.innerHTML;
// }

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");
  const allNavItems = document.querySelectorAll(".nav-link");
  const navList = document.querySelector(".navbar-collapse");

  function addShadow() {
    if (window.scrollY >= 1) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  allNavItems.forEach((item) =>
    item.addEventListener("click", () => navList.classList.remove("show"))
  );

  // pętla usuwająca automatycznie dodającą się klasę show

  window.addEventListener("scroll", addShadow);
});

// footer auto year

const footerYear = document.querySelector(".footer__year");
const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.textContent = year;
};
handleCurrentYear();

//

//  function save name in input

const inputfunction = document.getElementById("nameLocalSave");
inputfunction.value = sessionStorage.getItem("key");
inputfunction.onchange = function () {
  const key = inputfunction.value;
  sessionStorage.setItem("key", key);
};

// date car choose

const dateChoose = document.getElementById("car-date-picker");

dateChoose.min = getDate();
dateChoose.max = getDate(14);

function getDate(days) {
  let date;

  if (days !== undefined) {
    date = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  } else {
    date = new Date();
  }

  const offset = date.getTimezoneOffset();

  date = new Date(date.getTime() - offset * 60 * 1000);

  return date.toISOString().split("T")[0];
}

// function of selecting picked date to final validation button

function selectCarDate() {
  dateChoose.select();
}
