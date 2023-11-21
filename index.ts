class Account {
  name: string;
  balanceInit: number;
  constructor(_balanceInit: number, _name: string) {
    this.balanceInit = _balanceInit;
    this.name = _name;
  }

  getBalance(): string {
    return `Il saldo attuale del conto di ${this.name} è uguale a ${this.balanceInit}`;
  }
  deposit(amount: number): void {
    this.balanceInit += amount;    
  }
  withdraw(amount: number): void {
    this.balanceInit -= amount;
  }
}

class sonAccount extends Account {
  constructor() {
    super(0, "Pippo");
  }
}
class motherAccount extends Account {
  constructor() {
    super(0, "Mamma");
  }
  addInterest(): void {
    const interest = this.balanceInit * 0.1;
    this.deposit(interest);
  }
  deposit(amount: number): void {
    super.deposit(amount);
    this.addInterest();
  }

  withdraw(amount: number): void {
    super.withdraw(amount);
    this.addInterest();
  }
}

const sA = new sonAccount();
const mA = new motherAccount();

console.log(sA.getBalance());
console.log(mA.getBalance());

sA.deposit(30);
console.log(sA.getBalance());

sA.withdraw(15);
console.log(sA.getBalance());

mA.deposit(100);
console.log(mA.getBalance());

mA.withdraw(10);
console.log(mA.getBalance());
