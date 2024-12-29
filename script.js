// 1.
const userProfile = {
  hobby: "gaming",
  subscription: "true",
};
userProfile.mood = "happy";
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
  john: 15600,
  mike: 20000,
  alex: 17500,
  chris: 19000,
  oliver: 25000,
  jacob: 24500,
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

  return topPerformer;
}

console.log(findTopPerformer(teamPerformance));

const { john, mike, alex, chris, oliver, jacob } = teamPerformance;
console.log(john, mike, alex, chris, oliver, jacob);

// 4.
const salaries = {
  john: 15600,
  mike: 20000,
  alex: 17500,
  chris: 19000,
  oliver: 25000,
  jacob: 24500,
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
  john: johnSalary,
  mike: mikeSalary,
  alex: alexSalary,
  chris: chrisSalary,
  oliver: oliverSalary,
  jacob: jacobSalary,
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
