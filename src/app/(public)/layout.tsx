import PublicHeader from "@/components/view/Header/PublicHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PublicHeader />
      {children}
    </div>
  );
}
