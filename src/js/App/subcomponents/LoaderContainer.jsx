import React, { useState, useEffect } from "react";
import { Loader, Dimmer, Transition } from "semantic-ui-react";

function useForceUpdate() {
  const [value, setValue] = useState(true);
  return () => setValue(!value);
}

let loadingMessage = "Loading ...";

const LoaderContainer = props => {
  const { show } = props;

  const update = useForceUpdate();

  const timer = setTimeout(() => {
    loadingMessage = "Server waking up ...";
    update();
  }, 4000);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Transition.Group animation="fade" duration={500}>
      {show && (
        <Dimmer active page>
          <Loader size="huge" content={loadingMessage} indeterminate />
        </Dimmer>
      )}
    </Transition.Group>
  );
};

export default LoaderContainer;
