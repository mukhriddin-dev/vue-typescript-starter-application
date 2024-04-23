```

import { postAPI } from "@services/post";
import { useFetch, useCreate } from "./services";


const { data, error } = useFetch('post', postAPI.GET());


console.log(data.value)
console.log(error.value)

const { isError, isSuccess, mutate } = useCreate("create-post", postAPI.POST);

const createTodo = () => {
  mutate({ title: "createTodo", body: "createTodo body", id: 12 })
  console.log(isError.value, isSuccess.value, error.value);
}

```
