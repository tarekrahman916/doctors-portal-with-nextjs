import DoctorHeader from "@/components/view/Header/DoctorHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DoctorHeader />
      {children}
    </div>
  );
}

export default layout;
