import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ShortTeaser from "../ShortTeaser/ShortTeaser";
import { getShortTeasers } from "../../services/videoService";
import { homePageConstants } from "../../constants/homePageConstants";
import { nowShowingPageConstants } from "../../constants/nowShowingPageConstants";
import style from "./ShortTeasersSection.module.css";

export const ShortTeasersSection = () => {
  const [teasers, setTeasers] = useState();
  const teaserCards = teasers?.map((teaser) => (
    <ShortTeaser
      title={teaser.title}
      key={teaser.title}
      videoURL={nowShowingPageConstants.videoURL}
    />
  ));

  useEffect(() => {
    const getTeasers = async () => {
      const teasersData = await getShortTeasers();
      setTeasers(teasersData);
    };
    getTeasers();
  }, []);

  return (
    <div className={style["teasers-section"]}>
      {!teaserCards ? (
        <Loader />
      ) : (
        <>
          {" "}
          <h2 className={style["section-title"]}>
            {homePageConstants.teasersSectionTitle}
          </h2>
          <div className={style["teasers-container"]}>{teaserCards}</div>
        </>
      )}
    </div>
  );
};

export default ShortTeasersSection;
