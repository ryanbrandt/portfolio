import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Accordion } from "semantic-ui-react";

import { getFilteredAdminRows } from "../selectors";
import ControlMenu from "../../Layout/components/ControlMenu";
import AdminTile from "../subcomponents/AdminTile";

const AdminDashboard = props => {
  const { adminRows } = props;

  return (
    <Fragment>
      <ControlMenu />
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
            />
          );
        })}
      </Accordion>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    adminRows: getFilteredAdminRows(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(AdminDashboard);
