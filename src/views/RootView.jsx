import { Outlet } from "react-router-dom";
import Header from "../components/Common/Header/Header";

const RootView = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>Este es el footer</footer>
    </>
  );
};
export default RootView;
