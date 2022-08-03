import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCard } from "../../redux/createCardImage/action";
import PhotosContainer from "../../components/Photos";

import Loading from "../../commons/Loading";
import Error from "../../commons/Error";

export default function Profile() {
  const { data, error, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);

  console.log(data, "data");

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      {data.map((card) => (
        <PhotosContainer key={card.id} card={card} />
      ))}
    </div>
  );
}
