import React from "react";
import { serviceApiFormData } from "../shared/hooks/seviceApi";


const Account = () => {
  return <div>Login page</div>;
};

export async function getStaticProps({ params }) {
  const api = serviceApiFormData();
  const res = await api.post("MenuApp/getMenu");
  const menu = res.data;
  return {
    props: {
      menu,
    },
  };
}

export default Account;
