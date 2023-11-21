var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(_balanceInit, _name) {
        this.balanceInit = _balanceInit;
        this.name = _name;
    }
    Account.prototype.getBalance = function () {
        return "Il saldo attuale del conto di ".concat(this.name, " \u00E8 uguale a ").concat(this.balanceInit);
    };
    Account.prototype.deposit = function (amount) {
        this.balanceInit += amount;
    };
    Account.prototype.withdraw = function (amount) {
        this.balanceInit -= amount;
    };
    return Account;
}());
var sonAccount = /** @class */ (function (_super) {
    __extends(sonAccount, _super);
    function sonAccount() {
        return _super.call(this, 0, "Pippo") || this;
    }
    return sonAccount;
}(Account));
var motherAccount = /** @class */ (function (_super) {
    __extends(motherAccount, _super);
    function motherAccount() {
        return _super.call(this, 0, "Mamma") || this;
    }
    motherAccount.prototype.addInterest = function () {
        var interest = this.balanceInit * 0.1;
        this.deposit(interest);
    };
    motherAccount.prototype.deposit = function (amount) {
        _super.prototype.deposit.call(this, amount);
        this.addInterest();
    };
    motherAccount.prototype.withdraw = function (amount) {
        _super.prototype.withdraw.call(this, amount);
        this.addInterest();
    };
    return motherAccount;
}(Account));
var sA = new sonAccount();
var mA = new motherAccount();
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
