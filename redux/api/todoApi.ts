import axios, {AxiosResponse} from "axios";
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

export interface TodoType{
    userid: string;
    task: string;
    completed: string; //value is T or F
}

export const postTodo = async(payload: 
    {userid: string, task: string, completed: string}) => {
        try{
            const response: AxiosResponse<unknown, TodoType[]> = 
            await axios.post(`${SERVER}/api/todo/add-task`, payload, { headers})
            alert('진행5: 응답성공' + JSON.stringify(response.data))
            return response.data
        }catch(err){
            return err;
        }
    }



