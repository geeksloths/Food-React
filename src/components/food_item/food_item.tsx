import StarIcon from "../../assets/svgs/star.svg";
import React from "react";
import './food_item.scss';
import {FoodModel} from "../../models/food_model";
import PriceFormatter from "../../utils/price_formatter";
import {Link} from "react-router-dom";

interface props {
    item: FoodModel;
}

const FoodItem: React.FC<props> = ({item}) => {
    return (
        <li className='food-item'>
            <Link to={'/food/' + item.uuid}>
                <div className='right'>
                    <img src={item.image} alt={item.name} className='food-img'/>
                    <div className='rating'>
                        {item.ratingCount > 0 ? <><p>
                            <span> ({item.ratingCount}) </span>
                            <span>5 / {item.rating}</span>

                        </p>
                            <img src={StarIcon} alt='star icon'/></> : <></>}
                    </div>
                </div>
                <div className='details'>
                    <p className='active'>
                        <span className='key'>{item.name}</span>
                    </p>
                    <p>
                        <span className='key'>قیمت واحد:</span>
                        <span className='value yellow-color'>{PriceFormatter(item.price!)} تومان</span>
                    </p>
                    <p>
                        <span className='key'>زمان آماده سازی:</span>
                        <span className='value'>{item.preparationTime} دقیقه</span>
                    </p>
                </div>
            </Link>
        </li>
    )
}

export default FoodItem