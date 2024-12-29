// 1.
const userProfile = {
  mood: "happy",
  hobby: "basketball",
  subscription: "true",
};

userProfile.hobby = "skydiving";
userProfile.subscription = "false";

for (const property in userProfile) {
  console.log(`${property}: ${userProfile[property]}`);
}

const { mood, hobby, subscription } = userProfile;
console.log(mood, hobby, subscription);

// 2.
function countProperties(object) {
  return Object.keys(object).length;
}
console.log(countProperties(userProfile));

// 3.
const teamPerformance = {
  John: 15600,
  Mike: 20000,
  Alex: 17500,
  Chris: 19000,
  Oliver: 25000,
  Jacob: 24500,
};

function findTopPerformer(employees) {
  let maxPerformance = 0;
  let topPerformer;

  for (const employee in employees) {
    if (employees[employee] > maxPerformance) {
      maxPerformance = employees[employee];
      topPerformer = employee;
    }
    console.log(`${employee}: ${employees[employee]}`);
  }
  return `${topPerformer}: ${maxPerformance}`;
}
console.log(findTopPerformer(teamPerformance));

const { John, Mike, Alex, Chris, Oliver, Jacob } = teamPerformance;
console.log(John, Mike, Alex, Chris, Oliver, Jacob);

// 4.
const salaries = {
  John: 15600,
  Mike: 20000,
  Alex: 17500,
  Chris: 19000,
  Oliver: 25000,
  Jacob: 24500,
};

function calculateTotalSalaries(employeeSalaries) {
  let totalSalaries = 0;

  for (const employee in employeeSalaries) {
    totalSalaries += employeeSalaries[employee];
    console.log(`${employee}: ${employeeSalaries[employee]}`);
  }
  return totalSalaries;
}
console.log(calculateTotalSalaries(salaries));

const {
  John: johnSalary,
  Mike: mikeSalary,
  Alex: alexSalary,
  Chris: chrisSalary,
  Oliver: oliverSalary,
  Jacob: jacobSalary,
} = salaries;
console.log(
  johnSalary,
  mikeSalary,
  alexSalary,
  chrisSalary,
  oliverSalary,
  jacobSalary
);

// 5.
const friendsList = [
  { name: "Mango", hobby: "programming" },
  { name: "Kiwi", hobby: "football" },
  { name: "Poly", hobby: "basketball" },
  { name: "Ajax", hobby: "swimming" },
];

function getPropertyValues(array, property) {
  let values = [];
  for (const item of array) {
    values.push(item[property]);
  }
  return values;
}
console.log(getPropertyValues(friendsList, "name"));

// 6.
const productCatalog = [
  { name: "Apple", price: 150, quantity: 10 },
  { name: "Banana", price: 135, quantity: 15 },
  { name: "Orange", price: 200, quantity: 12 },
];

function calculateProductTotalPrice(products, productName) {
  for (const product of products) {
    if (product.name === productName) {
      console.log(`${productName} коштує ${product.price * product.quantity}`);
    }
  }
}
calculateProductTotalPrice(productCatalog, "Apple");
calculateProductTotalPrice(productCatalog, "Banana");
calculateProductTotalPrice(productCatalog, "Orange");

// 7.
const account = {
  balance: 0,
  withdrawals: [],
  deposits: [],

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Сума повинна бути позитивним числом.");
      return;
    }
    this.balance += amount;
    this.deposits.push(amount);
  },

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Сума повинна бути позитивним числом.");
      return;
    }
    if (amount > this.balance) {
      console.log("На цьому рахунку недостатньо коштів.");
      return;
    }
    this.balance -= amount;
    this.withdrawals.push(amount);
  },

  getBalance() {
    return this.balance;
  },

  getDepositTransactions() {
    return this.deposits;
  },

  getWithdrawalTransactions() {
    return this.withdrawals;
  },
};

account.deposit(1000);
account.withdraw(200);
account.deposit(2000);

console.log("Deposit transactions:", account.getDepositTransactions());
console.log("Withdrawal transactions:", account.getWithdrawalTransactions());
console.log("Current balance:", account.getBalance());
