import React from "react";
import ThemedImage from "@theme/ThemedImage";
import { Slide } from "react-slideshow-image";

const screens = [
  "1_compilation.png",
  "2_recent_files.png",
  "3_groups.png",
  "4_create_group.png",
  "5_settings.png",
  "6_logs.png",
];

const HomepageScreenshots = () => {
  return (
    <div className="container">
      <Slide easing="ease" canSwipe autoplay={false}>
        {screens.map((screen) => {
          return (
            <div className="each-slide" key={screen}>
              <ThemedImage
                sources={{
                  dark: `/screenshots/dark/${screen}`,
                  light: `/screenshots/light/${screen}`,
                }}
              />
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default HomepageScreenshots;
