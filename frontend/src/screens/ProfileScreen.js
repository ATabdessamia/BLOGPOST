import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "../components/Pagination/Pagination";
import Card from "../components/Profile/Card";
import Cards from "../components/Profile/Cards";
import Avatar from "../components/Profile/Avatar";
import Form from "../components/Profile/Form";
import { fetchPostsBy } from "../actions/PostActions";
import Empty from "../components/Empty";

const ProfileScreen = ({ location, match }) => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const { data, pages } = useSelector((state) => state.posts);
  let { auth } = useSelector((state) => state.auth);
  const page = location.search.split("&")[0].split("=")[1];
  const auhtor_id = location.search.split("&")[1].split("=")[1];
  const path = match.path.split("/")[1];

  useEffect(() => {
    dispatch(fetchPostsBy(auhtor_id, page));
  }, [currentId, dispatch, page, auhtor_id]);

  if (!auth) return null;
  if (!pages || !data)
    return (
      <div className="mt-32">
        <Avatar auth={auth.data.data} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Empty />
      </div>
    );

  const author = data.data.map((d) => d.author);
  return (
    <section className="py-8 mt-10">
      {auth.data.data._id !== auhtor_id ? (
        <>
          <Avatar author={author} />
          <main>
            <Cards>
              {data &&
                data.data.map((post) => {
                  return <Card post={post} key={post._id} hidden="hidden" />;
                })}
            </Cards>
            <Pagination pages={pages} page={page} path={path} id={auhtor_id} />
          </main>
        </>
      ) : (
        <>
          <Avatar auth={auth.data.data} />
          <Form currentId={currentId} setCurrentId={setCurrentId} />
          <main>
            <Cards>
              {data &&
                data.data.map((post) => {
                  return (
                    <Card
                      post={post}
                      key={post._id}
                      setCurrentId={setCurrentId}
                    />
                  );
                })}
            </Cards>
            <Pagination pages={pages} page={page} path={path} id={auhtor_id} />
          </main>
        </>
      )}
    </section>
  );
};

export default ProfileScreen;
