export class Product {
    _id:number
    name:string;
    price:number;
    description:string;
    ingredients:string;
    usage:string;
    imageURL:string;
    constructor(_id:number,name:string,description:string,price:number,usage:string,image:string){
        this._id=_id;
        this.name=name;
        this.price=price;
        this.description=description;
        this.ingredients=this.ingredients;
        this.usage=this.usage;
        this.imageURL=image;
    }
}
