class BankAccount {
    id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id
        this.name = name
        this._balance = balance

    }


    get balance(): number {
        return this._balance;
    }

    set newBalance(newBalance: number) {
        this._balance = this._balance + newBalance;
    }


}

const newAccount = new BankAccount(1, 'Rezwan Rahim', 20);
newAccount.newBalance = 20;
console.log(newAccount.balance);