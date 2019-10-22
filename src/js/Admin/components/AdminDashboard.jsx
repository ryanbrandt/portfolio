import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Accordion, Button } from "semantic-ui-react";

import { getFilteredAdminRows } from "../selectors";
import ControlMenu from "../../Layout/components/ControlMenu";
import AdminTile from "../subcomponents/AdminTile";
import ItemModal from "../../Layout/components/ItemModal";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createActive: false,
    };
  }

  handleAddClick = () => {
    this.setState({
      ...this.state,
      createActive: true,
    });
  };

  handleAddClose = () => {
    this.setState({
      ...this.state,
      createActive: false,
    });
  };

  render() {
    const { adminRows } = this.props;
    const { createActive } = this.state;

    return (
      <Fragment>
        <ControlMenu />
        <Button
          style={{ marginTop: "10px" }}
          onClick={() => this.handleAddClick()}
        >
          Add New
        </Button>
        <Accordion style={{ marginTop: "10px" }} styled fluid>
          {adminRows.map(row => {
            const { content = {}, name = "", month_year, id } = row;
            return (
              <AdminTile
                id={id}
                content={content}
                name={name}
                month_year={month_year}
                key={`${id}_name`}
                create={false}
              />
            );
          })}
        </Accordion>
        <ItemModal active={createActive} handleClose={this.handleAddClose} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminRows: getFilteredAdminRows(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(AdminDashboard);
