import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { DashboardLayout } from "@/components/dashboardLayout";

export default async function Layout({ children }) {
  const cookieStore = cookies();

  const token = cookieStore.get("token");
  if (!token?.value) {
    redirect("/");
  }

  try {
    jwt.verify(token.value, "nasigoreng");

    const decodedData = jwt.decode(token.value);
    console.log(decodedData);

    return (
      <DashboardLayout
        name={decodedData.name}
        isUser={decodedData.role === "USER"}
      >
        {children}
      </DashboardLayout>
    );
  } catch {
    error;
  }
  {
    redirect("/");
  }
}
