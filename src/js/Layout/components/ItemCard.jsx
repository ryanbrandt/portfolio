import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, Icon, Image, Reveal } from "semantic-ui-react";

import { getDeviceIsMobile } from "../../App/selectors";
import HeaderContainer from "./HeaderContainer";
import ItemModal from "./ItemModal";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
    };
  }

  handleClick = () => {
    this.setState({
      modalActive: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      modalActive: false,
    });
  };

  render() {
    const { content, date, title, icon, mobile } = this.props;
    const { modalActive } = this.state;

    return (
      <Fragment>
        <Card centered={mobile} style={{ margin: "10px" }}>
          <Reveal as="a" animated="move up" onClick={() => this.handleClick()}>
            <Reveal.Content visible>
              <Image src="placeholder.png" fluid />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Card.Content style={{ padding: "15px" }}>
                <HeaderContainer header={title} />
                <Card.Meta textAlign="center">
                  <span className="date">{date}</span>
                </Card.Meta>
              </Card.Content>
            </Reveal.Content>
          </Reveal>
          <Card.Content extra>
            <Icon name={icon} />
          </Card.Content>
        </Card>
        <ItemModal
          title={title}
          date={date}
          content={content}
          active={modalActive}
          handleClose={this.handleModalClose}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mobile: getDeviceIsMobile(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemCard);
