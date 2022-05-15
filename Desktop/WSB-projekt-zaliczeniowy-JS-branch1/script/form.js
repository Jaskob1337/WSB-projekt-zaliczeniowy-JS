const result = document.querySelector(".result");
const result2 = document.querySelector(".result2");
const selectBmw = document.querySelector(".selectBmw");
const selectMerc = document.querySelector(".selectMerc");
const selectSkoda = document.querySelector(".selectSkoda");
const selectLeasing = document.querySelector(".selectLeasing");
const selectCash = document.querySelector(".selectCash");
const inputName = document.querySelector(".name");
const inputSurname = document.querySelector(".surname");
const errorMessage = document.querySelector(".error-message")
const sendBtn = document.querySelector('.sendBtn');

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

const choice = {
  paymentLeasing: "Leasing",
  paymentCash: "Cash",
};
// console.log("wybrałeś" + (choice == leasing?"leasing" : "cash"));
// choice?"leasing" : "cash"

const GetSpecificationCarBMW = () => {
  const { carId, carPrice, carMileage } = BMW;
  result.textContent = `Samochód to ${carId}, który kosztuje ${carPrice}, i ma przejechane juz ${carMileage} wybrałeś płatność `;
};
const GetSpecificationCarMerc = () => {
  const { carId, carPrice, carMileage } = Mercedes;
  result.textContent = `Samochód to ${carId}, który kosztuje ${carPrice}, i ma przejechane juz ${carMileage}`;
};
const GetSpecificationCarSkoda = () => {
  const { carId, carPrice, carMileage } = Skoda;
  result.textContent = `Samochód to ${carId}, który kosztuje ${carPrice}, i ma przejechane juz ${carMileage}`;
};
const AddPaymentLea = () => {
  const { paymentLeasing } = choice;
  result2.textContent = `oraz wybrałeś ${paymentLeasing}`;
};
const AddPaymentCas = () => {
  const { paymentCash } = choice;
  result2.textContent = `oraz wybrałeś ${paymentCash} `;
};

const SaveFile = () => {
  let name = document.forms["personal-data"]["name"].value;
  alert(`witaj ${name}`)
  if (inputName.length < 10) {
    alert("Zbyt długie imie !");
    return
  } else alert("siema");
};
console.log(inputName);

sendBtn.addEventListener('click',async () => {
  const name = inputName.value;
  const surname = inputSurname.value
  // result.textContent = `${name} ${surname}`
  console.log(`${name} ${surname}`);
  if(inputName.value.length <10) {
    errorMessage.textContent = `no to fajnie Panie ${name}`
  } else {
    errorMessage.textContent = `nie mozesz miec tak na imie !!!`
  
  }
})


selectCash.addEventListener("click", AddPaymentCas);
selectLeasing.addEventListener("click", AddPaymentLea);
selectBmw.addEventListener("click", console.log('siema'));
selectMerc.addEventListener("click", GetSpecificationCarMerc);
selectSkoda.addEventListener("click", GetSpecificationCarSkoda);
