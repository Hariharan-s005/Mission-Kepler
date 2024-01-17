import style from "./OtherLanguages.module.css";
import { otherLanguagesConstants } from "../../constants/otherLanguagesConstants";
export const Otherlanguages = () => {
  const otherLanguageTiles = otherLanguagesConstants.otherLanguages?.map(
    (tile, index) => (
      <div key={index}>
        <h3>{tile.alphabet}</h3>
      </div>
    )
  );
  return (
    <div className={style["other-languages-container"]}>
      <h3 className={style["title"]}>{otherLanguagesConstants.title}</h3>
      <div className={style["other-languages-tiles"]}>{otherLanguageTiles}</div>
    </div>
  );
};

export default Otherlanguages;
