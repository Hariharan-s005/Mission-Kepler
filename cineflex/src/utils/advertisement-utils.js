
const teaserAdvertisements=require.context('../assets/advertisements/teaser-advertisements', true);
const movieAdvertisements=require.context('../assets/advertisements/movie-advertisements',true)

const teaserAdvertisementsList=teaserAdvertisements.keys().map(teaserAdvertisement=>teaserAdvertisements(teaserAdvertisement));
const movieAdvertisementList= movieAdvertisements.keys().map(movieAdvertisement=>movieAdvertisements(movieAdvertisement));

export const getRandomTeaserAdvertisement=()=>{
    return teaserAdvertisementsList[Math.floor(Math.random() * (teaserAdvertisementsList.length))];
};

export const getRandomMovieAdvertisement=()=>{
    return movieAdvertisementList[Math.floor(Math.random() * (movieAdvertisementList.length))];
};


export const getFormatedTimeString = (time) => {
    var date = new Date(0);
    date.setSeconds(time); 
    var timeString = date.toISOString().substring(14, 19);
    return timeString;
};