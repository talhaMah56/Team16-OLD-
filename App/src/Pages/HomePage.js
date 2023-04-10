import { FilterBy } from "../Components/FilterBy";
import { HeroSection } from "../Components/HeroSection/HeroSection";
import { MainMediaDisplay } from "../Components/MainMediaDisplay";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FilterBy />
      <MainMediaDisplay />
    </>
  );
};
