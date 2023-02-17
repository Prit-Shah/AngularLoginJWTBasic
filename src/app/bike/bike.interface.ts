export interface Bike{
    _id:string;
    name:string;
    createdBy:{_id:string,name:string,email:string,phone:string,photo:string};
    typeID:string;
    regDate:Date;    
    likes:[];
    dislikes:[];
    photo:string;
    comments:{id:string,comment:string}[];
}