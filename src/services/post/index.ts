import { request } from "../config";

const post={
    GET: async()=>request.get(`/posts`),
    POST: async(data:any)=>request.post(`/posts`,data),
    PUT: async(id:number,data:any)=>request.put(`/posts/${id}`,data),
    DELETE: async(id:number)=>request.delete(`/posts/${id}`),
}

export default post;