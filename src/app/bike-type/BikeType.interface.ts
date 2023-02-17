export interface BikeType{
    _id:string;
    name:string;
    createdBy:{_id:string,name:string,email:string,phone:string,photo:string};
}