import React from "react";
import { Loader, Dimmer, Transition } from "semantic-ui-react";

const LoaderContainer = props => {
  const { show } = props;

  return (
    <Transition.Group animation="fade" duration={500}>
      {show && (
        <Dimmer active page>
          <Loader size="huge" content="Preparing site..." indeterminate />
        </Dimmer>
      )}
    </Transition.Group>
  );
};

export default LoaderContainer;
