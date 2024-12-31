import {ExtraModel} from './extra_model';
import {InstructionModel} from './instruction_model';
import {RestaurantModel} from './restaurant_model';
import {SizeModel} from './size_model';

class FoodModel {
    uuid: string;
    name: string;
    details: string;
    image: string;
    restaurant: RestaurantModel;
    quantity: number;
    sizes: SizeModel[];
    selectedSize?: SizeModel;
    price?: number;
    preparationTime: number;
    rating: number;
    commentsCount: number;
    ratingCount: number;
    category:number;


    constructor(
        uuid: string,
        name: string,
        details: string,
        image: string,
        restaurant: RestaurantModel,
        quantity: number,
        sizes: SizeModel[],
        selectedSize: SizeModel | undefined,
        preparationTime: number,
        price: number | undefined,
        commentsCount: number,
        rating: number,
        ratingCount: number,
        category: number,
    ) {
        this.uuid = uuid;
        this.name = name;
        this.details = details;
        this.image = image;
        this.restaurant = restaurant;
        this.quantity = quantity;
        this.sizes = sizes;
        this.selectedSize = selectedSize;
        this.preparationTime = preparationTime;
        this.price = price;
        this.commentsCount = commentsCount;
        this.rating = rating;
        this.ratingCount = ratingCount;
        this.category = category;
    }

    static fromJson(json: any): FoodModel {
        return new FoodModel(
            json.uuid,
            json.name,
            json.details,
            json.image,
            RestaurantModel.fromJson(json.restaurant),
            json.quantity ?? 1,
            json.sizes ? json.sizes.map((e: any) => SizeModel.fromJson(e)) : [],
            json.selected_size ? SizeModel.fromJson(json.selected_size) : undefined,
            json.preparation_time,
            parseInt(json.price) ?? 0,
            json.comments_count,
            parseFloat(json.rating),
            json.rating_count,
            json.category,
        );
    }


    copyWith(params: Partial<FoodModel>): FoodModel {
        return new FoodModel(
            params.uuid ?? this.uuid,
            params.name ?? this.name,
            params.details ?? this.details,
            params.image ?? this.image,
            params.restaurant ?? this.restaurant,
            params.quantity ?? this.quantity,
            params.sizes ?? this.sizes,
            params.selectedSize ?? this.selectedSize,
            params.preparationTime ?? this.preparationTime,
            params.price ?? this.price,
            params.commentsCount ?? this.commentsCount,
            params.rating ?? this.rating,
            params.ratingCount ?? this.ratingCount,
            params.category ?? this.category,
        );
    }

    toJson(): any {
        return {
            uuid: this.uuid,
            name: this.name,
            details: this.details,
            image: this.image,
            restaurant: JSON.stringify(this.restaurant.toJson()),
            quantity: this.quantity,
            sizes: JSON.stringify(this.sizes.map(e => e.toJson())),
            selected_size: JSON.stringify(this.selectedSize),
            price: this.price,
            preparation_time: this.preparationTime,
            comments_count: this.commentsCount,
            rating: this.rating,
            rating_count: this.ratingCount,
            category: this.category,
        };
    }
}

export {FoodModel};