import classes from "./HeroSection.module.css";
import { SatisfiedCustomers } from "./SatisfiedCustomers";

export const HeroSection = () => {
  return (
    <section className={classes.section_hero}>
      <div className={classes.hero}>
        <div>
          <h1 className="heading-primary">
            All the latest Movies, Shows and Documentaries
          </h1>
          <p className={classes.hero_description}>
            Browse the most trending media online all while sharing your
            favorite Movies, Shows and Documentaries with your friends and
            family online
          </p>
          <a href="#" className="btn btn--full margin-right-sm">
            Browse Media
          </a>
          <a href="#" className="btn btn--outline">
            Learn more &darr;
          </a>
          <SatisfiedCustomers />
        </div>
        <div className="hero-img-box">
          <p>image goes here</p>
        </div>
      </div>
    </section>
  );
};
