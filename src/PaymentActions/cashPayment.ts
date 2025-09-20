import { GetMyToken } from "@/utilities/token";
import axios from "axios";

export async function cashPaymentAction(id:string,values:object){
    const tkn = await GetMyToken()

    if(!tkn){
        throw Error("Login First")
    }

    const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${id}`, values ,{
        headers:{
            token:tkn as string
        }
    })

    return data
}