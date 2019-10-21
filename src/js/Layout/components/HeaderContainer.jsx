import React, { Fragment } from "react";
import { Header, Icon, Divider } from "semantic-ui-react";

const HeaderContainer = props => {
  const { header, icon } = props;

  return (
    <Fragment>
      {icon ? (
        <Header size="huge" icon textAlign="center">
          <Icon name={icon} size="huge" circular />
          <Header.Content>{header}</Header.Content>
        </Header>
      ) : (
        <Header size="medium" textAlign="center">
          <Header.Content>{header}</Header.Content>
        </Header>
      )}
      <Divider />
    </Fragment>
  );
};

export default HeaderContainer;
