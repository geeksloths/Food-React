class AddressModel {
    uuid?: string;
    latitude: string;
    longitude: string;
    briefAddress: string;
    name: string;
    phone: string;
    title: string;

    constructor(
        latitude: string,
        longitude: string,
        briefAddress: string,
        name: string,
        phone: string,
        title: string,
        uuid?: string
    ) {
        this.uuid = uuid;
        this.latitude = latitude;
        this.longitude = longitude;
        this.briefAddress = briefAddress;
        this.name = name;
        this.phone = phone;
        this.title = title;
    }

    toJson(): any {
        return {
            uuid: this.uuid,
            latitude: this.latitude,
            longitude: this.longitude,
            briefAddress: this.briefAddress,
            name: this.name,
            phone: this.phone,
            title: this.title,
        };
    }

    static fromJson(json: any): AddressModel {
        return new AddressModel(
            json.latitude,
            json.longitude,
            json.briefAddress,
            json.name,
            json.phone,
            json.title,
            json.uuid
        );
    }

    copyWith(updates: {
        uuid?: string;
        latitude?: string;
        longitude?: string;
        briefAddress?: string;
        name?: string;
        phone?: string;
        title?: string;
    }): AddressModel {
        return new AddressModel(
            updates.latitude ?? this.latitude,
            updates.longitude ?? this.longitude,
            updates.briefAddress ?? this.briefAddress,
            updates.name ?? this.name,
            updates.phone ?? this.phone,
            updates.title ?? this.title,
            updates.uuid ?? this.uuid
        );
    }
}

export { AddressModel };