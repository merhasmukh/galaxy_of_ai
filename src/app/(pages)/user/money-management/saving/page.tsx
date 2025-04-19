import SavingGoal from "@/app/components/User/MoneyManagement/SavingGoal";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function GoalManage (){
    const cookieStore = await cookies();       // ✅ CORRECT
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
            redirect("/user/login");
        }
    
        const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/auth/validate_token/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            cache: "no-store",
        });
    
        if (!res.ok) {
            redirect("/user/login");
        }
    
        const data = await res.json();
    
        if (!data.valid) {
            redirect("/user/login");
        }
    return <SavingGoal accessToken={accessToken}/>
     
};

