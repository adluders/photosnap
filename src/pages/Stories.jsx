import React from "react";
import CustomLink from "../components/UI/CustomLink";
import StoriesHolder from "../components/StoriesHolder";

import Mountains from "../assets/stories/desktop/mountains.jpg";
import CityScapes from "../assets/stories/desktop/cityscapes.jpg";
import Voyage from "../assets/stories/desktop/18-days-voyage.jpg";
import Architecture from "../assets/stories/desktop/architecturals.jpg";

import WorldTour from "../assets/stories/desktop/world-tour.jpg";
import Corners from "../assets/stories/desktop/unforeseen-corners.jpg";
import King from "../assets/stories/desktop/king-on-africa.jpg";
import Nowhere from "../assets/stories/desktop/trip-to-nowhere.jpg";

import Rage from "../assets/stories/desktop/rage-of-the-sea.jpg";
import Running from "../assets/stories/desktop/running-free.jpg";
import Waves from "../assets/stories/desktop/behind-the-waves.jpg";
import Waters from "../assets/stories/desktop/calm-waters.jpg";

import Milky from "../assets/stories/desktop/milky-way.jpg";
import Forest from "../assets/stories/desktop/dark-forest.jpg";
import SomWarPet from "../assets/stories/desktop/somwarpet.jpg";
import Dreams from "../assets/stories/desktop/land-of-dreams.jpg";

const Stories = () => {
  const stories1 = [
    {
      id: 0,
      pic: Mountains,
      writtenDate: "April 16th 2020",
      storyTitle: "The Mountains",
      storyAuthor: "by John Appleseed",
    },
    {
      id: 1,
      pic: CityScapes,
      writtenDate: "April 14th 2020",
      storyTitle: "Sunset Cityscapes",
      storyAuthor: "by Benjamin Cruz",
    },
    {
      id: 2,
      pic: Voyage,
      writtenDate: "April 11th 2020",
      storyTitle: "18 Days Voyage",
      storyAuthor: "by Alexei Borodin",
    },
    {
      id: 3,
      pic: Architecture,
      writtenDate: "April 9th 2020",
      storyTitle: "Architecture",
      storyAuthor: "by Samantha Brooke",
    },
  ];
  const stories2 = [
    {
      id: 0,
      writtenDate: "April 7th 2020",
      pic: WorldTour,
      storyTitle: "World Tour 2019",
      storyAuthor: "by Timothy Wagner",
    },
    {
      id: 1,
      pic: Corners,
      writtenDate: "April 3rd 2020",
      storyTitle: "Unforeseen Corners",
      storyAuthor: "by William Malcolm",
    },
    {
      id: 2,
      pic: King,
      writtenDate: "March 29th 2020",
      storyTitle: "King of Africa: Part II",
      storyAuthor: "by Tim Hillenburg",
    },
    {
      id: 3,
      pic: Nowhere,
      writtenDate: "March 21st 2020",
      storyTitle: "The Trip to Nowhere",
      storyAuthor: "by Felicia Rourke",
    },
  ];

  const stories3 = [
    {
      id: 0,
      pic: Rage,
      writtenDate: "March 19th 2020",
      storyTitle: "Rage of The Sea",
      storyAuthor: "by Mohammed Abdul",
    },
    {
      id: 1,
      pic: Running,
      writtenDate: "March 16th 2020",
      storyTitle: "Running Free",
      storyAuthor: "by Michelle",
    },
    {
      id: 2,
      pic: Waves,
      writtenDate: "March 11th 2020",
      storyTitle: "Behind the Waves",
      storyAuthor: "by Lamar Wilson",
    },
    {
      id: 3,
      pic: Waters,
      writtenDate: "March 9th 2020",
      storyTitle: "Calm Waters",
      storyAuthor: "by Smantha Brooke",
    },
  ];

  const stories4 = [
    {
      id: 0,
      pic: Milky,
      writtenDate: "March 5th 2020",
      storyTitle: "The Milky Way",
      storyAuthor: "by Benjamin Cruz",
    },
    {
      id: 1,
      pic: Forest,
      writtenDate: "March 4th 2020",
      storyTitle: "Night at The Dark Forest",
      storyAuthor: "by Mohammed Abdul",
    },
    {
      id: 2,
      pic: SomWarPet,
      writtenDate: "March 1st 2020",
      storyTitle: "Somwarpet 's Beauty",
      storyAuthor: "by Michelle",
    },
    {
      id: 3,
      pic: Dreams,
      writtenDate: "Februrary 25th 2020",
      storyTitle: "Land of Dreams",
      storyAuthor: "by Williams Malcolm",
    },
  ];

  return (
    <div className="stories">
      <div className="stories__hero">
        <div className="stories__hero-info">
          <p className="stories__hero-label">last month's featured story</p>
          <h1 className="stories__hero-title">hazy full moon of appalachia</h1>
          <p className="stories__hero-date">
            march 2nd 2020 <span>by john appleseed</span>
          </p>
          <p className="stories__hero-details">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <CustomLink
            userRoute="/"
            customClasses="stories__hero-cta"
            text="read the story"
            isLightTheme={false}
          />
        </div>
      </div>

      <StoriesHolder info={stories1} />
      <StoriesHolder info={stories2} />
      <StoriesHolder info={stories3} />
      <StoriesHolder info={stories4} />
    </div>
  );
};

export default Stories;
