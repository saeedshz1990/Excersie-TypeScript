class Customer {
    // private name: string;
    // public email: string;
    // mobile: string = "";
    // protected mobile: string
    private _productCount = 1
    readonly country: string = "Iran";

    constructor(private name: string, private email: string, private mobiile: string) {
        // this.name = name;
        // this.email = email;
        // this.mobile = mobiile
    }

    get productCount() {
        return this._productCount;
    }

    set productCount(newValue: number) {
        this._productCount = newValue;
    }
}

class CustomerManager extends Customer {
    tpdateProductCount() {
        this.productCount = 6;
    }
}

const customer1 = new Customer("saeed", "test", "87198");
customer1.productCount = 85;
customer1.productCount;