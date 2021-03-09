import { review } from "./review.model";

export class Product{
    productid:number;
    productname:string;
    productdesc:string;
    productprice:number;
    imageUrl:string;
    rating:number;
    review?: review[];
}