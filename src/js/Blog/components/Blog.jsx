import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import { setActiveView } from "../../Navigation/actions";
import { getBlogPosts, getBlogErrors } from "../selectors";
import HeaderContainer from "../../Layout/components/HeaderContainer";
import ControlMenu from "../../Layout/components/ControlMenu";
import ItemCard from "../../Layout/components/ItemCard";
import ErrorModal from "../../Layout/components/ErrorModal";

class Blog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { setActiveView } = this.props;

    setActiveView("Blog");
  }

  render() {
    const { posts, errors } = this.props;

    return (
      <Fragment>
        <HeaderContainer icon="pencil" header="My Writing" />
        <ControlMenu />
        <div
          className="ui six doubling stackable cards"
          style={{ marginTop: "2vh" }}
        >
          {posts.map(post => {
            return <p>Oops I never finished this</p>;
          })}
          {posts.length === 0 && (
            <p style={{ textAlign: "center" }}>
              <i>There's nothing here...</i>
            </p>
          )}
        </div>
        <ErrorModal active={errors && posts.length === 0} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: getBlogPosts(state),
    errors: getBlogErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveView: view => dispatch(setActiveView(view)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
