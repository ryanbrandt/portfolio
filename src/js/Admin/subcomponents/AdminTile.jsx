import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Accordion,
  Icon,
  Form,
  Input,
  TextArea,
  Button,
} from "semantic-ui-react";

import { requestItemUpdate, requestItemDeletion } from "../actions";

class AdminTile extends Component {
  constructor(props) {
    super(props);

    const { content, month_year, id, name } = props;
    this.state = {
      active: false,
      fields: {
        id,
        name,
        month_year,
        content,
      },
    };
  }

  handleStandardFieldChange = e => {
    const { fields } = this.state;

    this.setState({
      ...this.state,
      fields: {
        ...fields,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleContentFieldChange = e => {
    const { fields } = this.state;
    const { content } = fields;

    this.setState({
      ...this.state,
      fields: {
        ...fields,
        content: {
          ...content,
          [e.target.id]: e.target.value,
        },
      },
    });
  };

  handleClick = () => {
    const { active } = this.state;
    this.setState({
      ...this.state,
      active: !active,
    });
  };

  handleSubmit = () => {
    const { updateItem } = this.props;
    const { fields } = this.state;

    updateItem(fields);
  };

  handleDeleteClick = () => {
    const { deleteItem, id } = this.props;

    deleteItem(id);
  };

  renderStandardFields = () => {
    const { fields } = this.state;
    const { name, month_year } = fields;

    return (
      <Fragment>
        <Form.Field>
          <label>Name</label>
          <Input
            id="name"
            placeholder="Name"
            value={name}
            onChange={e => this.handleStandardFieldChange(e)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Date String</label>
          <Input
            id="month_year"
            placeholder="Date String"
            value={month_year}
            onChange={e => this.handleStandardFieldChange(e)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <Input id="tags" placeholder="Tags" />
        </Form.Field>
        <Form.Field>
          <label>Icons (Reference Semantic UI Icon names)</label>
          <Input id="icons" placeholder="Icons" />
        </Form.Field>
      </Fragment>
    );
  };

  renderContentFields = () => {
    const { fields } = this.state;
    const { content } = fields;

    return Object.keys(content).map(key => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);

      return (
        <Form.Field key={Math.random()}>
          <label>{label}</label>
          <TextArea
            id={key}
            placeholder={label}
            value={content[key]}
            onChange={e => this.handleContentFieldChange(e)}
            required
          />
        </Form.Field>
      );
    });
  };

  render() {
    const { fields, active } = this.state;
    const { name } = fields;

    return (
      <Fragment>
        <Accordion.Title active={active} onClick={() => this.handleClick()}>
          <Icon name="dropdown" />
          {name}
        </Accordion.Title>
        <Accordion.Content active={active}>
          <Form onSubmit={() => this.handleSubmit()}>
            {this.renderStandardFields()}
            {this.renderContentFields()}
            <Form.Field>
              <Button>Update</Button>
            </Form.Field>
          </Form>
          <Button
            color="red"
            style={{ marginTop: "5px" }}
            onClick={() => this.handleDeleteClick()}
          >
            Delete
          </Button>
        </Accordion.Content>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateItem: data => dispatch(requestItemUpdate(data)),
    deleteItem: id => dispatch(requestItemDeletion(id)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AdminTile);
