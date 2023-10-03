import React from "react";

interface Props {
  params: {
    adminId: number;
  };
}

function UpdateAdmin(props: Props) {
  const { adminId } = props.params;

  return <div>UpdateAdmin {adminId}</div>;
}

export default UpdateAdmin;
