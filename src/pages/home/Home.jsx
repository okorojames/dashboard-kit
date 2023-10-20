import DashBoxes from "../../components/DashBoxes";
import HomeFooter from "../../components/HomeFooter";
import HomeTrendsCont from "../../components/HomeTrendsCont";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  //
  return (
    <>
      <Navbar />
      <div className="home_page px-8">
        {/*  */}
        <DashBoxes />
        <HomeTrendsCont />
        {/*  */}
        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
