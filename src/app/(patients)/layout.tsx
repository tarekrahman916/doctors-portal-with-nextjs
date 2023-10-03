import PatientHeader from "@/components/view/Header/PatientHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PatientHeader />
      {children}
    </div>
  );
}

export default layout;
