import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";

import HeaderContainer from "../../Layout/components/HeaderContainer";

const Landing = () => {
  return (
    <Fragment>
      <HeaderContainer icon="home" header="Hello, Ryan here!" />
      <div style={{ textAlign: "center", fontSize: "1.5em" }}>
        <p>How's it going?</p>
        <p>
          My name is <b>Ryan Brandt</b>. I'm a <code>Software Engineer</code>.
        </p>
        <p>
          As you might have guessed, you've reached my <i>personal</i> page.
        </p>
        <p>
          Here, you'll find my (hopefully) updated resumé, my personal projects,
          along with some brief summaries, and some means to get in touch.
        </p>
        <p>
          Oh and my blog if you feel like reading about some of my personal
          interests within and outside of tech.
        </p>
        <p>Enjoy!</p>
        <Button
          as="a"
          target="_blank"
          href="https://linkedin.com/in/ryan-brandt1996"
          color="linkedin"
          icon="linkedin"
          size="big"
          circular
        />
        <Button
          as="a"
          target="_blank"
          href="https://github.com/ryanbrandt"
          icon="github"
          size="big"
          circular
        />
      </div>
    </Fragment>
  );
};

export default Landing;
