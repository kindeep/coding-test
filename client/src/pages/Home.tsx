import { Chip } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import getCatImages from "../api/cats";
import getSharkImages from "../api/sharks";
import Carousel from "../components/Carousel";

const useStyles = makeStyles((theme) => ({
  chipContainer: {
    display: "flex",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Home() {
  const classes = useStyles();
  const [images, setImages] = useState<null | string[]>([]); // null = loading state
  const [displayState, setDisplayState] = useState({
    sharks: true,
    cats: false,
  });

  useEffect(() => {
    (async () => {
      setImages(null);
      let res: string[] = [];

      if (displayState.sharks) {
        const { data: sharks, success } = await getSharkImages();
        if (success) {
          res = [...res, ...sharks];
        }
      }

      if (displayState.cats) {
        const { data: cats, success } = await getCatImages();
        if (success) {
          res = [...res, ...cats];
        }
      }

      setImages(res);
    })();
  }, [displayState]);

  const toggleCats = () => {
    setDisplayState((prev) => ({ ...prev, cats: !prev.cats }));
  };

  const toggleSharks = () => {
    setDisplayState((prev) => ({ ...prev, sharks: !prev.sharks }));
  };

  return (
    <> 
      <Container>
        <div className={classes.chipContainer}>
          <Chip
            label="Sharks"
            clickable
            onClick={toggleSharks}
            color={displayState.sharks ? "primary" : "default"}
          ></Chip>
          <Chip
            label="Cats"
            clickable
            onClick={toggleCats}
            color={displayState.cats ? "primary" : "default"}
          ></Chip>
        </div>
        <Carousel imgUrls={images ?? []} loading={images == null}></Carousel>
      </Container>
    </>
  );
}

export default Home;
