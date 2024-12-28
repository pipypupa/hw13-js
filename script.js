// Завдання 1
const user = {
  name: "John",
  age: 17,
  hobby: "football",
  premium: true,
};

user.hobby = "tennis";
user.mood = "happy";
user.premium = false;

const {
  name: userName,
  hobby: userHobby,
  premium: userPremium,
  mood: userMood,
  age: userAge,
} = user;
console.log(userName, userHobby, userPremium, userMood, userAge);
Object.entries(user).forEach(([key, value]) => console.log(`${key}: ${value}`));

// Завдання 2
function countProps(obj) {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("Параметр має бути об'єктом.");
  }
  return Object.keys(obj).length;
}
console.log(countProps(user));

// Завдання 3
const employeePerformance = {
  Peter: 12,
  Louis: 19,
  Stewie: 6,
  Brian: 27,
  Quagmire: 15,
  Joe: 33,
};

function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = null;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return `Our best employee is ${bestEmployee} with performance of ${maxTasks}`;
}

console.log(findBestEmployee(employeePerformance));

// Завдання 4
const employeeSalaries = {
  Peter: 1000,
  Louis: 2000,
  Stewie: 300,
  Brian: 3500,
  Quagmire: 1200,
  Joe: 4000,
};

function countTotalSalary(employees) {
  return Object.values(employees).reduce((total, salary) => total + salary, 0);
}

console.log(countTotalSalary(employeeSalaries));

const { Peter, Louis, Stewie, Brian, Quagmire, Joe } = employeeSalaries;
console.log(Peter, Louis, Stewie, Brian, Quagmire, Joe);

// Завдання 5
function getAllPropValues(arr, prop) {
  return arr.map((obj) => obj[prop]).filter((value) => value !== undefined);
}

const productList = [
  { name: "Apple", price: 100, quantity: 50 },
  { name: "Banana", price: 80, quantity: 150 },
  { name: "Cherry", price: 120, quantity: 30 },
];

console.log(getAllPropValues(productList, "name"));
console.log(getAllPropValues(productList, "price"));
console.log(getAllPropValues(productList, "quantity"));

for (const {
  name: productName,
  price: productPrice,
  quantity: productQuantity,
} of productList) {
  console.log(
    `Name: ${productName}, Price: ${productPrice}, Quantity: ${productQuantity}`
  );
}

// Завдання 6
function calculateTotalPrice(allProducts, productName) {
  const product = allProducts.find(({ name }) => name === productName);
  return product ? product.price * product.quantity : 0;
}

console.log(calculateTotalPrice(productList, "Apple"));
console.log(calculateTotalPrice(productList, "Banana"));
console.log(calculateTotalPrice(productList, "Cherry"));

// Завдання 7
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

console.log("Current balance:", account.getBalance());
console.log("Deposit transactions:", account.getDepositTransactions());
console.log("Withdrawal transactions:", account.getWithdrawalTransactions());
