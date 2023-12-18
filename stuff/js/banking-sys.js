const bankAccount = {
    balance: 0,
    accountHistory: [],
    deposit: function (amount) {
        if (!(amount === "number")) {
            this.balance += amount;
            this.accountHistory.push(`${amount}$ has been added to your account`)

            return `SUCCESS: ${amount}$ has been added to your account`
        }
        return "Deposit Error: The input entered is not a number";
    },
    withdraw: function (amount) {
        if (!(amount === "number")) {
            if (this.balance >= amount) {
                this.balance -= amount;
                this.accountHistory.push(`${amount}$ has been deducted from your account`)

                return `SUCCESS: ${amount}$ has been deducted from your account`
            }
            return "Withdraw Error: Insufficient funds";
        }
        return "Withdraw Error: The input entered is not a number";
    },
    getBalance: function () {
        return `Balance: ${this.balance}$`
    },
    showAccountHistory: function () {
        return this.accountHistory.map((transaction, index) => {
            return `Transaction ${index + 1}: ${transaction}`;
        }).join('\n');
    }


};

console.log(bankAccount.deposit(100));
console.log(bankAccount.withdraw(50));
console.log(bankAccount.withdraw(50));
console.log(bankAccount.withdraw(50));
console.log(bankAccount.withdraw(50));


console.log(" ");
console.log(bankAccount.showAccountHistory());
console.log(" ");
console.log(bankAccount.getBalance());