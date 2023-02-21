const Income = document.getElementById("income");
const Food = document.getElementById("food");
const Rent = document.getElementById("rent");
const Clothes = document.getElementById("clothes");
const TotalExpense = document.getElementById("total-expense");
const Balance = document.getElementById("balance-total");
const SavingAmount = document.getElementById("saving-amount");
const RemainingBalance = document.getElementById("remaining-balance");
const Discount = document.getElementById("discount");
let newTotalExpenses, balanceValue;

/* Calculate button clicked */
document.getElementById("calculate").addEventListener("click", function () {
  const IncomeInput = Income.value;
  const newIncomeAmount = parseFloat(IncomeInput);
  // console.log(newIncomeAmount)

  const FoodInput = Food.value;
  const newFoodAmount = parseFloat(FoodInput);
  // console.log(newFoodAmount)

  const RentInput = Rent.value;
  const newRentAmount = parseFloat(RentInput);
  // console.log(newRentAmount)

  const ClothesInput = Clothes.value;
  const newClothesAmount = parseFloat(ClothesInput);
  // console.log(newClothesAmount)

  /* Total Expenses */
  newTotalExpenses = newFoodAmount + newRentAmount + newClothesAmount;
  TotalExpense.innerText = newTotalExpenses;

  /* Balance */
  balanceValue = newIncomeAmount - newTotalExpenses;
  Balance.innerText = balanceValue;

  /* Clear the input fields */
  Food.value = "";
  Rent.value = "";
  Clothes.value = "";
  Income.value = "";
});

/* Save button clicked */

document.getElementById("save-btn").addEventListener("click", function () {
  const discountAmount = Discount.value;
  const newDiscountAmount = parseFloat(discountAmount);
//   console.log(newDiscountAmount);

  /* Saving Amount */
  const value = (newTotalExpenses * newDiscountAmount) / 100;
  SavingAmount.innerText = value;
  // console.log(TotalExpense)

  /* Remaining Balance */
  const remainingBalance = balanceValue + value;
  RemainingBalance.innerText = remainingBalance;

  /* Clear the input fields */
  Discount.value = "";
});
