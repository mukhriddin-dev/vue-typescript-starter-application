import { useQuery , useMutation} from '@tanstack/vue-query';


export const useFetch = (key:string="",request:any)=>{
    const qKey=key ? [key]:['GET'];
    return useQuery({
        queryKey: qKey,
        queryFn: async () => {
            const data=await request;
            return data;
        }
    })  
}

export const useCreate = (key:string="", request:any)=> {

    const qKey=key ? [key]:['CREATE'];

    const {isError, error, isSuccess, mutate}=useMutation({
            mutationKey: qKey,
            mutationFn: (data:any) => request(data),
            onSuccess: (data:any) => console.log(data),
            onError: (error:any) => console.log("ERROR: ",error)
    })

    return {isError, error, isSuccess, mutate}
}


