export interface IRequestAPI{
    GET(url?:string):Promise<any>;
    POST(data?:any):Promise<any>;
    PUT(id:string|number,data:any):Promise<any>;
    DELETE(url:string,data:any):Promise<any>;
}
