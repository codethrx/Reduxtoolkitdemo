import Users from "./features/users/Users";
import { useGetPostsQuery, useGetProductsQuery } from "./features/api/apiSlice";
const App = () => {
  // const { data: jdata } = useGetPostsQuery();
  const { data: products, error } = useGetProductsQuery(1);
  // console.log(jdata);
  console.log(`Products`, products);
  // console.log(error);

  return (
    <div>
      <h1>RTK Demo..</h1>
      {/* <Users /> */}
    </div>
  );
};

export default App;
