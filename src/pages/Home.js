import useQuery from "../hooks/useQuery";
import React, { useEffect, useState } from "react";
import Banner from "../components/Home/Banner";
import ProductByCategory from "../components/Home/ProductByCategory";
import PreLoader from "../features/PreLoader.jsx";
const Home = (props) => {
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useQuery(`/product`);
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
    if (data) {
      setProducts(data);
    }
    return () => setProducts(null);
  }, [data]);
  return (
    <main
      style={{
        background:
          "url(https://cf.shopee.vn/file/b62471ec58d6d7973ccd6e255b90c33c) center top / 100% no-repeat",
        maxWidth: "100%",
        paddingBottom: 0,
        margin: "0px auto 4.375rem",
      }}
    >
      <Banner />
      <ProductByCategory products={products} {...props} />
      {loading && <PreLoader />}
      {error && <h2>{error}</h2>}
    </main>
  );
};

export default Home;
