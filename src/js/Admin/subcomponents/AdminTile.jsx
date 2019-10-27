import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Accordion,
  Icon,
  Form,
  Input,
  TextArea,
  Button,
  Grid,
  Modal,
  Confirm,
} from "semantic-ui-react";

import {
  requestItemUpdate,
  requestItemDeletion,
  requestItemCreation,
} from "../actions";

class AdminTile extends Component {
  constructor(props) {
    super(props);

    const { content, month_year, id, name, icons, tags } = props;
    this.state = {
      active: false,
      deleteModalActive: false,
      fields: {
        id,
        name,
        month_year,
        icons,
        tags,
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

  handleRowClick = () => {
    const { active } = this.state;
    this.setState({
      ...this.state,
      active: !active,
    });
  };

  handleEditSubmit = () => {
    const { updateItem } = this.props;
    const { fields } = this.state;

    updateItem(fields);
  };

  handleDeleteClick = () => {
    this.setState({
      deleteModalActive: true,
    });
  };

  handleCancel = () => {
    this.setState({
      deleteModalActive: false,
    });
  };

  handleDelete = () => {
    const { deleteItem, id } = this.props;

    deleteItem(id);
  };

  handleCreateSubmit = () => {
    const { createItem, closeModal } = this.props;
    const { fields } = this.state;

    createItem(fields);
    closeModal();
  };

  renderStandardFields = () => {
    const { fields } = this.state;
    const { name, month_year, tags, icons } = fields;

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
          <Input
            id="tags"
            value={tags}
            placeholder="Tags"
            onChange={e => this.handleStandardFieldChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Icons (Reference Semantic UI Icon names)</label>
          <Input
            id="icons"
            value={icons}
            placeholder="Icons"
            onChange={e => this.handleStandardFieldChange(e)}
          />
        </Form.Field>
      </Fragment>
    );
  };

  renderContentFields = () => {
    const { id } = this.props;
    const { fields } = this.state;
    const { content } = fields;

    return Object.keys(content).map(key => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);

      return (
        <Form.Field key={`${key}_${id}`}>
          <label>{label}</label>
          <TextArea
            key={`${label}_${id}`}
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

  renderEditContent = () => {
    const { fields, active, deleteModalActive } = this.state;
    const { name } = fields;

    return (
      <Fragment>
        <Confirm
          open={deleteModalActive}
          onConfirm={() => this.handleDelete()}
          onCancel={() => this.handleCancel()}
        />
        <Accordion.Title active={active} onClick={() => this.handleRowClick()}>
          <Icon name="dropdown" />
          {name}
        </Accordion.Title>
        <Accordion.Content active={active}>
          <Form onSubmit={() => this.handleEditSubmit()}>
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
  };

  renderCreateContent = () => {
    return (
      <Fragment>
        <Modal.Header>Create New Item</Modal.Header>
        <Modal.Content>
          <Grid columns={1} centered>
            <Grid.Column>
              <Form onSubmit={() => this.handleCreateSubmit()}>
                {this.renderStandardFields()}
                {this.renderContentFields()}
                <Form.Field>
                  <Button>Create</Button>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </Fragment>
    );
  };

  render() {
    const { create } = this.props;

    return create ? this.renderCreateContent() : this.renderEditContent();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateItem: data => dispatch(requestItemUpdate(data)),
    deleteItem: id => dispatch(requestItemDeletion(id)),
    createItem: data => dispatch(requestItemCreation(data)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AdminTile);
