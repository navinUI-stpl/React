import axios from "axios";
import ApiService from "./ApiService";
import { Users } from "@/@types/Users";
import appConfig from "@/configs/app.config";

// export async function GetAllUsers(): Promise<Users[]> {
//     const response = await ApiService.fetchData<Users[]>({
//         url: 'https://fakestoreapi.com/users',
//         method: 'GET',
//     })
//     return response.data

    
// }

// Removed incomplete or misplaced code block.
// If you need this logic, move it to a React component inside a useEffect.



    export const allUsers = async (): Promise<Users[]> => {
        const response = await ApiService.fetchData<Users[]>({
            url: `${appConfig.apiPrefix}crud-app/crud-application`,
            method: "GET",
        })
        return response.data
    }

       export const addUser = async (data:any): Promise<Users> => {
        const response = await ApiService.fetchData<Users>({
            url: "https://684d550065ed08713915c846.mockapi.io/api/crud-app/crud-application",
            method: "POST",
            data:data,
        })
        return response.data
    }

        export const deleteUser = async (id:number): Promise<Users[]> => {
        const response = await ApiService.fetchData<Users[]>({
            url: `https://684d550065ed08713915c846.mockapi.io/api/crud-app/crud-application/${id}`,
            method: "DELETE",
        })
        return response.data
    }

            export const editUser = async (id:number): Promise<Users[]> => {
        const response = await ApiService.fetchData<Users[]>({
            url: `https://684d550065ed08713915c846.mockapi.io/api/crud-app/crud-application/${id}`,
            method: "PUT",
        })
        return response.data
    }