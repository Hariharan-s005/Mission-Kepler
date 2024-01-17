import { useState } from "react";

const withAdvertisement = (OriginalComponent) => {
  const UpdatedComponent = (props) => {
    const [advertisementState, setAdvertisementState] = useState({
      timer: 0,
      message: "",
      showAdvertisement: false,
      showStatus: false,
    });

    const advertisementHandler = (isAdvertisement, time, message) => {
      if (isAdvertisement) {
        setAdvertisementState({
          timer: time,
          showAdvertisement: true,
          message: message,
          showStatus: true,
        });
      } else {
        setAdvertisementState({
          timer: time,
          showAdvertisement: false,
          message: message,
          showStatus: true,
        });
      }
    };

    const stopAdvertisement = () => {
      setAdvertisementState({
        timer: -1,
        message: "",
        showAdvertisement: false,
        showStatus: false,
      });
    };

    return (
      <OriginalComponent
        {...props}
        {...advertisementState}
        advertisementHandler={advertisementHandler}
        stopAdvertisement={stopAdvertisement}
      />
    );
  };

  return UpdatedComponent;
};

export default withAdvertisement;
