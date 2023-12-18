const depositBtn = document.querySelector("#depositBtn"),
    depositInput = document.querySelector("#deposit"),
    notifications = document.querySelector(".notifications"),
    withdrawBtn = document.querySelector("#withdrawBtn"),
    withdrawInput = document.querySelector("#withdraw"),
    userBalance = document.querySelector("#userBalance"),
    greetings = document.querySelector("#greetings"),
    avatar = document.querySelector("#userAvatar"),
    userAlert = document.querySelector(".userAlertContainer"),
    alertContent = document.querySelector(".userAlertContent"),
    alertCloseBtn = document.querySelector("#userAlertClose"),
    transactions = document.querySelector("#transactions");

function formattedNumber(num) {
    return num.toLocaleString("en-US");
}

const names = ["יאן", "חושן", "עמית", "עומר", "אביב", "דני", "רון"]

function alertTheUser(text) {
    userAlert.style.display = "flex";
    alertContent.innerText = text;
}

function notify(text) {
    const notification = document.createElement("span");
    notification.innerText = text;
    notifications.prepend(notification);
}


const bankAccount = {
    balance: 1000,
    person: {
        name: names[Math.floor(Math.random() * names.length)],
        avatar: "https://thispersondoesnotexist.com/",
        accountAge: "",
        dateOfBirth: ""
    },
    accountHistory: [],
    deposit: function (amount) {
        if (!(amount === "number")) {
            if (amount > 0) {
                this.balance += amount;

                let transaction = document.createElement("div");
                transaction.classList.add("transaction", "deposit");
                transaction.innerText = ` ₪ ${formattedNumber(amount)} נוספו לחשבונך `
                transactions.prepend(transaction);
                // this.accountHistory.push(`${amount}$ has been added to your account`)

                return userBalance.innerText = ` יתרת עו"ש ${formattedNumber(+this.balance)}`;

            }
            return notify(`\nיש להכניס סכום גדול מ- 0`);
        }
        return notifications.innerText += `\nיש להזין מספר תקין`;
    },
    withdraw: function (amount) {
        if (!(amount === "number")) {
            if (amount > 0) {


                if (this.balance >= amount) {

                    this.balance -= amount;

                    let transaction = document.createElement("div");
                    console.log(transaction);
                    transaction.classList.add("transaction", "withdraw");
                    transaction.innerText = ` ₪ ${formattedNumber(+amount)} נלקחו מחשבונך `
                    transactions.prepend(transaction);
                    // this.accountHistory.push(`${amount}$ has been added to your account`)

                    return userBalance.innerText = ` יתרת עו"ש ${formattedNumber(+this.balance)}`;
                }

                return notifications.innerText += `\nיש להכניס סכום נמוך יותר`;
            }
            return notifications.innerText += `\nיש להכניס סכום גדול מ- 0`;
        }

        return notifications.innerText += `\nיש להזין מספר תקין`;
    }


};


document.addEventListener("DOMContentLoaded", function () {
    avatar.style.backgroundImage = `url(${bankAccount.person.avatar})`
    greetings.innerHTML = `היי,<b> ${bankAccount.person.name}</b>. איך אפשר לעזור?`
    userBalance.innerText = ` יתרת עו"ש ${formattedNumber(bankAccount.balance)}`;

    alertTheUser(`היי ${bankAccount.person.name}, ברוכים הבאים לבנק האישי החדש שלך`)
});

depositBtn.addEventListener("click", function () {
    bankAccount.deposit(Number(depositInput.value))
});

withdrawBtn.addEventListener("click", function () {
    bankAccount.withdraw(withdrawInput.value)
});

alertCloseBtn.addEventListener("click", function () {
    if (userAlert.style.display === "") {
        userAlert.style.display = "none"
    } else {
        userAlert.style.display = ""
    }
});