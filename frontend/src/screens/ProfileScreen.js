import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "../components/Pagination/Pagination";
import Card from "../components/Profile/Card";
import Cards from "../components/Profile/Cards";
import Avatar from "../components/Profile/Avatar";
import Form from "../components/Profile/Form";
import { fetchPosts } from "../actions/PostActions";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.posts);
  let { auth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!auth || !data) return null;

  return (
    <section className="py-8 mt-10">
      <Avatar auth={auth} />
      <Form />
      <main>
        <Cards>
          {data &&
            data.data.map((post) => {
              return <Card post={post} key={post._id} />;
            })}
        </Cards>
        <Pagination posts={data.data} />
      </main>
    </section>
  );
};

export default ProfileScreen;
