class SizeModel {
    name: string;
    details: string;
    price: number;

    constructor(name: string, details: string, price: number) {
        this.name = name;
        this.details = details;
        this.price = price;
    }

    static fromJson(json: any): SizeModel {
        return new SizeModel(
            json.name,
            json.details,
            json.price
        );
    }

    toJson(): any {
        return {
            name: this.name,
            details: this.details,
            price: this.price,
        };
    }
}

export { SizeModel };