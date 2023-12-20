"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    id: "0",
    bg: "linear-gradient(180deg, #C8CCCE 0%, #929395 100%)",
    carName: (
      <Typography
        sx={{
          fontFamily: "Bebas Neue, sans-serif",
          fontSize: { md: "180px", xs: "70px" },
          background: "linear-gradient(356deg, #292929 25.9%, #B0B0B0 96.3%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        Agate Grey
      </Typography>
    ),
    carImage: "/darkGray.png",
  },
  {
    id: "1",
    bg: "linear-gradient(180deg, #FFCFD8 0%, #EB7286 100%)",
    carName: (
      <Typography
        sx={{
          fontFamily: "Bebas Neue, sans-serif",
          fontSize: { md: "180px", xs: "70px" },
          background: "linear-gradient(356deg, #681220 25.9%, #C68C99 96.3%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        Carmine Red
      </Typography>
    ),
    carImage: "/marineRed.png",
  },
  {
    id: "2",
    bg: "linear-gradient(180deg, #FFF6D3 0%, #D8CA7D 100%)",
    carName: (
      <Typography
        sx={{
          fontFamily: "Bebas Neue, sans-serif",
          fontSize: { md: "180px", xs: "70px" },
          background: "linear-gradient(356deg, #917B00 25.9%, #EACE3F 96.3%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        Racing Yellow
      </Typography>
    ),
    carImage: "/racingYellow.png",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        background: data[currentIndex].bg,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1440px",
          padding: "160px 64px",
          flexDirection: "column",
        }}
      >
        <Box sx={styles.HeadingStyles}>
          <Typography
            sx={{
              color: "#001A34",
              fontSize: "60px",
              fontFamily: "Alex Brush, cursive",
            }}
          >
            911 Carrera
          </Typography>
          {data[currentIndex].carName}
        </Box>
        <Box sx={{ width: "100%" }}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Box
                  component={"img"}
                  src={item.carImage}
                  sx={{ width: "100%", height: "100%" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  HeadingStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    marginBottom: { md: "-160px", xs: "-50px" },
  },
};

export default Home;
