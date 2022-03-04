import Product from "../components/Product";
import useQuery from "../hooks/useQuery";

import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logIn } from "../actions/user";

// const randomNumber = () => {
//   return Math.ceil(Math.random() + 100);
// };
const Home = () => {
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useQuery(`/posts`);
  // Use redux

  // const userList = useSelector((state) => state.user.list);
  // console.log(userList);

  // const dispatch = useDispatch();

  // const newId = randomNumber();

  // const newUser = {
  //   userName: newId,
  //   password: `pass${newId}`,
  // };
  // const action = logIn(newUser);
  // dispatch(action);

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);
  return (
    <div>
      {/* {products && <Product products={products} />} */}
      HOME PAGES
      {loading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default Home;
