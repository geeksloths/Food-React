import { OrderModel } from './order_model';

enum TransactionStatus {
    Pending = 'PE',
    Accepted = 'AC',
    Declined = 'DE',
    Canceled = 'CA',
    Completed = 'CO'
}

class TransactionModel {
    serial: number;
    orders: OrderModel[];
    paidTime: Date;
    totalDuration: number;
    totalPrice: number;
    status: TransactionStatus;
    deliveryCode: number;
    latitude: string; // New field
    longitude: string; // New field
    clientPhone: string; // New field
    briefAddress: string; // New field
    clientName: string; // New field
    statusChangedAt: Date;

    constructor(
        serial: number,
        orders: OrderModel[],
        paidTime: Date,
        totalDuration: number,
        totalPrice: number,
        status: TransactionStatus,
        deliveryCode: number,
        latitude: string, // New parameter
        longitude: string, // New parameter
        clientPhone: string, // New parameter
        briefAddress: string, // New parameter
        clientName: string,
        statusChangedAt: Date,
    ) {
        this.serial = serial;
        this.orders = orders;
        this.paidTime = paidTime;
        this.totalDuration = totalDuration;
        this.totalPrice = totalPrice;
        this.status = status;
        this.deliveryCode = deliveryCode;
        this.latitude = latitude; // Initialize new field
        this.longitude = longitude; // Initialize new field
        this.clientPhone = clientPhone; // Initialize new field
        this.briefAddress = briefAddress; // Initialize new field
        this.clientName = clientName; // Initialize new field
        this.statusChangedAt = statusChangedAt;
    }

    // fromJson method
    static fromJson(json: any): TransactionModel {
        return new TransactionModel(
            json.serial,
            json.orders.map((order: any) => OrderModel.fromJson(order)),
            new Date(json.paid_time),
            json.total_duration,
            json.total_price,
            this._parseTransactionStatus(json.status),
            json.delivery_code,
            json.latitude, // New field
            json.longitude, // New field
            json.client_phone, // New field
            json.brief_address, // New field
            json.client_name, // New field
            new Date(json.status_changed_at),
        );
    }

    static _parseTransactionStatus(status: string): TransactionStatus {
        switch (status) {
            case 'PE':
                return TransactionStatus.Pending;
            case 'AC':
                return TransactionStatus.Accepted;
            case 'DE':
                return TransactionStatus.Declined;
            case 'CA':
                return TransactionStatus.Canceled;
            case 'CO':
                return TransactionStatus.Completed;
            default:
                throw new Error(`Unknown status: ${status}`);
        }
    }

    static _transactionStatusToString(status: TransactionStatus): string {
        switch (status) {
            case TransactionStatus.Pending:
                return 'PE';
            case TransactionStatus.Accepted:
                return 'AC';
            case TransactionStatus.Declined:
                return 'DE';
            case TransactionStatus.Canceled:
                return 'CA';
            case TransactionStatus.Completed:
                return 'CO';
            default:
                throw new Error(`Unknown status: ${status}`);
        }
    }

    // toJson method
    toJson(): any {
        return {
            serial: this.serial,
            orders: this.orders.map((order) => order.toJson()),
            paid_time: this.paidTime.toISOString(),
            total_duration: this.totalDuration,
            total_price: this.totalPrice,
            status: TransactionModel._transactionStatusToString(this.status),
            delivery_code: this.deliveryCode,
            latitude: this.latitude, // New field
            longitude: this.longitude, // New field
            client_phone: this.clientPhone, // New field
            brief_address: this.briefAddress, // New field
            client_name: this.clientName, // New field

        };
    }
}

export { TransactionModel, TransactionStatus };