import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { MdLibraryAdd } from "react-icons/md";

export class ItemHeader extends React.Component<
  ItemHeaderProps,
  ItemHeaderState
> {
  constructor(props: ItemHeaderProps) {
    super(props);
    this.state = {
      value: "",
    };
  }

  private handleChange = (text: string) => {
    this.setState({
      value: text,
    });
  };

  private onClick = () => {
    this.setState({
      value: "",
    });
    this.props.onClick(this.state.value);
  };

  render() {
    return (
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Add todo item"
          value={this.state.value.length !== 0 ? this.state.value : ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            this.handleChange(event.target.value)
          }
        />
        <InputGroup.Append>
          <InputGroup.Text
            onClick={this.state.value.length !== 0 ? this.onClick : undefined}
          >
            <MdLibraryAdd
              color={this.state.value.length !== 0 ? "black" : "gray"}
            />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

interface ItemHeaderState {
  value: string;
}

interface ItemHeaderProps {
  onClick: (text: string) => void;
}
