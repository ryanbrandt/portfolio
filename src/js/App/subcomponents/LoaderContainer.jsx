import React, { useState, useEffect } from "react";
import { Loader, Dimmer } from "semantic-ui-react";

let messagePlaceholder = 0;

const LoaderContainer = () => {
  const DEFAULT_MESSAGE = "Loading ...";
  const LOADING_MESSAGES = ["Server waking up ..."];

  const [loadingMessage, setLoadingMessage] = useState(DEFAULT_MESSAGE);

  const loadingMessageInterval = setTimeout(() => {
    if (messagePlaceholder < 1) {
      setLoadingMessage(LOADING_MESSAGES[messagePlaceholder]);
      messagePlaceholder += 1;
    }
  }, 4000);

  useEffect(() => {
    return () => {
      clearTimeout(loadingMessageInterval);
    };
  });

  useEffect(() => {
    return () => {
      messagePlaceholder = 0;
    };
  }, []);

  return (
    <Dimmer active page>
      <div className="fadeable-content">
        <Loader size="huge" content={loadingMessage} indeterminate />
      </div>
    </Dimmer>
  );
};

export default LoaderContainer;
