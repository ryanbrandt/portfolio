import React, { Component } from "react";
import { connect } from "react-redux";

import { setActiveView } from "../../Navigation/actions";
import { getBlogPosts, getBlogErrors } from "../selectors";
import HeaderContainer from "../../Layout/components/HeaderContainer";
import ControlMenu from "../../Layout/components/ControlMenu";
import ItemCard from "../../Layout/components/ItemCard";
import ErrorModal from "../../Layout/components/ErrorModal";

class Blog extends Component {
  componentDidMount() {
    const { setActiveView } = this.props;

    setActiveView("Blog");
  }

  render() {
    const { posts, errors } = this.props;

    return (
      <div className="fadeable-content">
        <HeaderContainer icon="pencil" header="Blog" />
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
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
