import DashBoxes from "../../components/DashBoxes";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_page px-8">
        {/*  */}
        <DashBoxes />
        {/*  */}
      </div>
    </>
  );
};

export default Home;
