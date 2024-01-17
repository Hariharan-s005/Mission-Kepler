import NavBar from "../../components/NavBar/NavBar";
import { nowShowingPageConstants } from "../../constants/nowShowingPageConstants";
import style from "./NowShowingPage.module.css";
export const NowShowingPage = () => {
  return (
    <>
      <NavBar />
      <div className={style["now-showing-container"]}>
        <h2 className={style["heading-text"]}>{nowShowingPageConstants.headingText}</h2>
        <h1 className={style["now-showing-title"]}>{nowShowingPageConstants.title}</h1>
        <div className={style["video-container"]}><iframe src={nowShowingPageConstants.videoURL}  title={nowShowingPageConstants.title}></iframe></div>
        <p className={style["now-showing-description"]}>{nowShowingPageConstants.description}</p>
      </div>
    </>
  );
};

export default NowShowingPage;
