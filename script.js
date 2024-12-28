// Завдання 1
const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Завдання 2
function countProps(obj) {
  const { length: propCount } = Object.keys(obj);
  return propCount;
}

console.log(countProps({ name: "John", age: 30 })); // 2

// Завдання 3
function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

console.log(
  findBestEmployee({
    Ann: 29,
    David: 35,
    Helen: 1,
    Lorence: 99,
  })
);

// Завдання 4
function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}

console.log(
  countTotalSalary({
    Ann: 1000,
    David: 1500,
    Helen: 800,
  })
);

// Завдання 5
function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    const { [prop]: value } = obj;
    if (value !== undefined) {
      values.push(value);
    }
  }

  return values;
}

console.log(
  getAllPropValues(
    [
      { name: "Apple", price: 50 },
      { name: "Banana", price: 30 },
      { name: "Orange", price: 25 },
    ],
    "name"
  )
);

// Завдання 6
function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      totalPrice = price * quantity;
      break;
    }
  }

  return totalPrice;
}

console.log(
  calculateTotalPrice(
    [
      { name: "Laptop", price: 1000, quantity: 3 },
      { name: "Phone", price: 500, quantity: 10 },
      { name: "Tablet", price: 800, quantity: 5 },
    ],
    "Phone"
  )
);

// Завдання 7
const account = {
  balance: 0,
  transactions: [],

  createTransaction(type, amount) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction("deposit", amount);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів на рахунку");
      return;
    }
    const transaction = this.createTransaction("withdraw", amount);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions.find(({ id: transId }) => transId === id) || null;
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(({ type: transType }) => transType === type)
      .reduce((total, { amount }) => total + amount, 0);
  },
};

account.deposit(500);
account.deposit(200);
account.withdraw(100);
console.log("Баланс:", account.getBalance());
console.log("Транзакція 2:", account.getTransactionDetails(2));
console.log("Загальна сума депозитів:", account.getTransactionTotal("deposit"));
