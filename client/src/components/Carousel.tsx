import { CircularProgress, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { IconButton } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";

interface CarouselProps {
  imgUrls: string[];
  loading: boolean;
}

const useStyles = makeStyles((theme) => ({
  controlsWrapper: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1),
    userSelect: "none",
    backgroundColor: "#000",
    color: "#fff",
    height: 500,
    "&:hover button": {
      display: "block",
      opacity: "1",
    },
  },
  imgDiv: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
  },
  image: {
    maxWidth: "100%",
    maxHeight: 500,
    objectFit: "contain",
  },
  arrowContainerLeft: {
    position: "absolute",
    padding: theme.spacing(1),
    top: 0,
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowContainerRight: {
    position: "absolute",
    padding: theme.spacing(1),
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowButton: {
    opacity: "0",
    transition: "opacity 0.3s",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  emptyText: {
    padding: theme.spacing(1),
  },
}));

export const Carousel: React.FC<CarouselProps> = ({ imgUrls, loading }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    setCurrentImg(0);
  }, [imgUrls]);

  const classes = useStyles();

  const noImages = imgUrls.length === 0 && !loading;

  const next = () => {
    setCurrentImg((prevVal) => {
      if (prevVal >= imgUrls.length - 1) {
        return imgUrls.length;
      }
      return prevVal + 1;
    });
  };

  const prev = () => {
    setCurrentImg((prevVal) => {
      if (prevVal === 0) return 0;
      return prevVal - 1;
    });
  };

  return (
    <>
      <div className={classes.controlsWrapper}>
        <div className={classes.arrowContainerLeft}>
          <Tooltip title="Previous">
            <div>
              <IconButton
                aria-label="Previous"
                disabled={currentImg === 0}
                onClick={prev}
                className={classes.arrowButton}
              >
                <ChevronLeftIcon />
              </IconButton>
            </div>
          </Tooltip>
        </div>
        <div className={classes.imgDiv}>
          {loading && (
            <CircularProgress color="secondary" className={classes.emptyText} />
          )}
          {imgUrls.length > 0 && currentImg < imgUrls.length && (
            <img
              className={classes.image}
              src={imgUrls[currentImg]}
              alt=""
            ></img>
          )}
          {noImages && (
            <Typography className={classes.emptyText}>
              No images to show
            </Typography>
          )}
        </div>
        <div className={classes.arrowContainerRight}>
          <Tooltip title="Next">
            <div>
              <IconButton
                onClick={next}
                className={classes.arrowButton}
                aria-label="Next"
                disabled={currentImg >= imgUrls.length - 1}
              >
                <ChevronRightIcon />
              </IconButton>
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Carousel;
