import {AuthOptions} from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
import { jwtDecode } from "jwt-decode";

export const authOptions:AuthOptions = {

    pages:{
        signIn:"/login"
    },


    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
                password: { label: "Password", type: "password" }
            },

            // Login
            authorize:async function(credentials){

                const response = await fetch(`${process.env.API}/auth/signin`,{
                    method:'POST',
                    body: JSON.stringify({
                        email:credentials?.email,
                        password:credentials?.password,
                    }),
                    headers:{"Content-Type":"application/json"}
                })

                const payload = await response.json()

                console.log(payload)
                
                if(payload.message === 'success'){

                    const {id}:{id:string} = jwtDecode(payload.token);
                    return {
                        id: id,
                        user: payload.user,
                        token: payload.token
                    }
                }

                throw new Error(payload.message || "Failed To Login")

            }

        })
    ]
}