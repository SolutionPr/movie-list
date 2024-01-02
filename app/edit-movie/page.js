import React from "react";
import CreateAndUpdateForm from "@/components/CreateAndUpdateForm";
import AppLayout from "@/components/layout";

const page = () => {
  return (
    <AppLayout>
      <CreateAndUpdateForm title="Edit" buttonText="Update" />
    </AppLayout>
  );
};

export default page;
