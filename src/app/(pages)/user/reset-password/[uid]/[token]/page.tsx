// page.tsx
import ResetPasswordPage from "../../../../../components/User/Login/ResetPasswordToken";

interface PageProps {
  params: Promise<{ uid: string; token: string }>;}

const Page = async ({ params }: PageProps) => {
  const { uid, token } = await params; 
  console.log(params)


  return <ResetPasswordPage uid={uid} token={token} />;
};

export default Page;
