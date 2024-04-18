import { useQuery,useMutation } from '@tanstack/vue-query';


export const useFetch=async (key:string[],reqFun:any)=>{

    const qKey=key.length ? key : ['GET'] 

    const { isPending, isError, data, error } =useQuery({
        queryKey: qKey,
        queryFn: reqFun,
    })

    return {isPending, isError, data, error}

}


export const useCreate = async (key:string[],reqFun:any)=>{
    const { isPending, isError, error, isSuccess, mutate } = useMutation({
        mutationFn: (state:any) => reqFun(state),
        onSuccess: (data, variables, context)=>{
            console.log("mutation")
        }, 
        onError: (error, variables, context)=>{
            console.log(error)
        }
    })

    return {isPending, isError, error, isSuccess, mutate}
}



