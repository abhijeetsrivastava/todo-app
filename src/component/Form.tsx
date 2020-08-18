import React from "react";
import { Form as BootStrapForm, InputGroup } from "react-bootstrap";
import { MdLibraryAdd } from "react-icons/md";

export class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
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
        <BootStrapForm.Control
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

interface FormState {
  value: string;
}

interface FormProps {
  onClick: (text: string) => void;
}
