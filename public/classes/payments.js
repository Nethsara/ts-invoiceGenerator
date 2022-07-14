export class Payments {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} paid $${this.amount} for ${this.details}`;
    }
}
