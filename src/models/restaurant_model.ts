import { FoodModel } from './food_model';

class RestaurantModel {
    uuid: string;
    name: string;
    image: string;
    logo: string;
    briefAddress: string;
    latitude: number;
    longitude: number;
    cats?: { [key: string]: FoodModel[] };
    rating: number;
    commentsCount: number;

    constructor(
        uuid: string,
        name: string,
        image: string,
        logo: string,
        briefAddress: string,
        latitude: number,
        longitude: number,
        commentsCount: number,
        rating: number,
        cats?: { [key: string]: FoodModel[] }
    ) {
        this.uuid = uuid;
        this.name = name;
        this.image = image;
        this.logo = logo;
        this.briefAddress = briefAddress;
        this.latitude = latitude;
        this.longitude = longitude;
        this.cats = cats;
        this.commentsCount = commentsCount;
        this.rating = rating;
    }

    // Factory constructor to create an instance from a JSON map
    static fromJson(json: any): RestaurantModel {
        return new RestaurantModel(
            json.uuid,
            json.name,
            json.image,
            json.logo,
            json.brief_address,
            typeof json.latitude === 'string' ? parseFloat(json.latitude) : json.latitude,
            typeof json.longitude === 'string' ? parseFloat(json.longitude) : json.longitude,
            json.comments_count,
            typeof json.rating === 'string' ? parseFloat(json.rating) : json.rating,
            json.cats
                ? Object.keys(json.cats).reduce((acc: any, key: string) => {
                    acc[key] = json.cats[key].map((item: any) => FoodModel.fromJson(item));
                    return acc;
                }, {})
                : undefined
        );
    }

    // Method to convert an instance to a JSON map
    toJson(): any {
        return {
            uuid: this.uuid,
            name: this.name,
            logo: this.logo,
            image: this.image,
            latitude: this.latitude,
            longitude: this.longitude,
            comments_count: this.commentsCount,
            rating: this.rating,
            brief_address: this.briefAddress,
            cats: this.cats
                ? Object.keys(this.cats).reduce((acc: any, key: string) => {
                    acc[key] = this.cats![key].map(item => item.toJson());
                    return acc;
                }, {})
                : undefined,
        };
    }
}

export { RestaurantModel };