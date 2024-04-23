import { request } from "../config";
import type { IRequestAPI } from "@interfaces";



export const postAPI:IRequestAPI={
    GET: async()=>request.get(`/posts`),
    POST: async(data:any)=> request.post(`/posts`, data),
    PUT: async(id:number|string,data:any)=>request.put(`/posts/${id}`,data),
    DELETE: async(id:number|string)=>request.delete(`/posts/${id}`),
}

