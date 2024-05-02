import me from "../assets/me.jpg";

interface AboutBioProps {
  refProp: any;
}

export default function AboutBio({ refProp }: AboutBioProps) {
  return (
    <div className="AboutBio" ref={refProp}>
      <img className="AboutBio-image" src={me} alt="555-squat" />
      <div className="AboutBio-content">
        <h2 className="AboutBio-title">Get to Know Me</h2>
        <p className="AboutBio-text">
          Life has taken me all over the US, from growing up in Topeka, Kansas,
          to college in Annapolis, Maryland, to a few years on the Gulf Coast in
          the Florida panhandle and south Alabama, back to Topeka, and finally
          to my current home in rural Oklahoma. I even had a couple of summers
          in Alaska and southern California thrown in for good measure and have
          now visited 40 of the 50 states, plus Germany.
        </p>
        <p className="AboutBio-text">
          I{" "}
          <a
            className="AboutBio-link"
            href="http://mcgintywedding.com/"
            target="_blank"
            rel="noreferrer"
          >
            got married
          </a>{" "}
          in February 2023 and my wife and I had our first child, Katharin, in
          December. One thing I love about my work is that I can do it from
          home, so there's no need to be away from my family.
        </p>
        <p className="AboutBio-text">
          Besides my main work as a web developer, I have dabbled a bit in
          mobile and game development. I have a{" "}
          <a
            className="AboutBio-link"
            href="https://unity.com/"
            target="_blank"
            rel="noreferrer"
          >
            Unity
          </a>
          -based mobile app currently in development, based on Euclid's{" "}
          <em>Elements of Geometry</em> and due to be released in 2024.
        </p>
        <p className="AboutBio-text">
          My main interests outside software development are lifting heavy
          barbells, reading classical literature and philosophy, and playing
          chess. I have a{" "}
          <a
            className="AboutBio-link"
            href="http://jasonmcginty.net/"
            target="_blank"
            rel="noreferrer"
          >
            personal website and blog
          </a>{" "}
          where you can read my ramblings about various topics including
          philosophy, literature, and some of the projects I work on.
        </p>
      </div>
    </div>
  );
}
