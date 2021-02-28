import React from "react";

import Pagination from "../components/Pagination/Pagination";
import Card from "../components/Profile/Card";
import Cards from "../components/Profile/Cards";
import Avatar from "../components/Profile/Avatar";
import Form from "../components/Profile/Form";

const ProfileScreen = () => {
  return (
    <section className="py-8 mt-10">
      <Avatar />
      <Form />
      <main>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
        <Pagination />
      </main>
    </section>
  );
};

export default ProfileScreen;
