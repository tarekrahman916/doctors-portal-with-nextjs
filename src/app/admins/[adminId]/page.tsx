import React from "react";

interface Props {
  params: {
    adminId: number;
  };
}

function Admins(props: Props) {
  const { adminId } = props.params;
  return <div>Admins {adminId}</div>;
}

export default Admins;
