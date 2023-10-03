import AdminHeader from "@/components/view/Header/AdminHeader";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
}

export default AdminLayout;
