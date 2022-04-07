// Total income & expenses
function incomeAndExpenses(income, food, rent, clothes) {
  const incomeField = document.getElementById(income);
  const foodField = document.getElementById(food);
  const rentField = document.getElementById(rent);
  const clothesField = document.getElementById(clothes);

  const myIncome = parseInt(incomeField.value);
  const foodCost = parseInt(foodField.value);
  const rentCost = parseInt(rentField.value);
  const clothesCost = parseInt(clothesField.value);

  const expenses = foodCost + rentCost + clothesCost;
  const balance = myIncome - expenses;

  if (myIncome > 0) {
    if (myIncome >= expenses) {
      const totalExpenses = document.getElementById("total-expenses");
      totalExpenses.innerText = expenses;

      const totalBalance = document.getElementById("total-balance");
      totalBalance.innerText = balance;
    } else {
      alert("You Cannot Expense More Than Your Income");
    }
  } else {
    alert("Please Provide Correct Input");
  }

  incomeField.value = "";
  foodField.value = "";
  rentField.value = "";
  clothesField.value = "";
}
// my saving calculation
function mySaving(saving) {
  const saveField = document.getElementById(saving);
  const savingAmount = parseInt(saveField.value);

  const totalExpenses = document.getElementById("total-expenses").innerText;
  const totalBalance = document.getElementById("total-balance").innerText;

  const inTotal = parseInt(totalExpenses) + parseInt(totalBalance);
  const totalSavingAmount = (savingAmount / 100) * inTotal;

  if (totalSavingAmount <= parseInt(totalBalance)) {
    document.getElementById("total-saving").innerText = totalSavingAmount;

    const remainingBalance = totalBalance - totalSavingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  } else {
    alert("You cannot save more than your balance");
  }

  saveField.value = "";
}

// Expenses and balance
document
  .getElementById("calculator-btn")
  .addEventListener("click", function () {
    incomeAndExpenses("income", "food", "rent", "clothes");
  });

// Saving and remaining
document.getElementById("save-btn").addEventListener("click", function () {
  mySaving("saving-amount");
});
