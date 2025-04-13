import UserAI from "@/app/components/User/AI/UserAI";
import { cookies } from "next/headers";


export default async function UserAIage (){
    const cookieStore = await cookies();       // ✅ CORRECT
    const accessToken = cookieStore.get("accessToken")?.value;



    return <UserAI accessToken={accessToken}/>
     
};

