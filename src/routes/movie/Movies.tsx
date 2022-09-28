import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";

const Movies = () => {
  return (
    <Layout isMainPaddingTop={true}>
      <h1>Movies</h1>
      <Outlet />
    </Layout>
  );
};
export default Movies;
