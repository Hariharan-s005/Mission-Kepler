import NavBar from "../../components/NavBar/NavBar";
import ErrorBoundary from "../../components/ErrorBoundaryComponent/ErrorBoundaryComponent";
import LotteryComponent from "../../components/LotteryComponent/LotteryComponent";
import TrailersSection from "../../containers/TrailersSection/TrailersSection";
import ShortTeasersSection from "../../containers/ShortTeasersSection/ShortTeasersSection";
import Otherlanguages from "../../components/OtherLanguages/OtherLanguages";
import style from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className={style["cover-image-container"]} />
      <ErrorBoundary>
        <LotteryComponent />
      </ErrorBoundary>
      <TrailersSection />
      <ShortTeasersSection />
      <Otherlanguages/>
    </>
  );
};

export default HomePage;
