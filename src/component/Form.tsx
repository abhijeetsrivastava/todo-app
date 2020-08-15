import React from "react";
import {
  Form as BootStrapForm,
  ButtonGroup,
  ButtonToolbar,
  InputGroup,
} from "react-bootstrap";

import { Button } from "./ui";
import { FaAngleDoubleDown } from "react-icons/fa";

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
      <ButtonToolbar>
        <InputGroup>
          <BootStrapForm.Control
            type="text"
            placeholder="Add todo item"
            value={this.state.value.length !== 0 ? this.state.value : ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              this.handleChange(event.target.value)
            }
          />
        </InputGroup>
        <ButtonGroup>
          <Button
            disabled={this.state.value.length === 0}
            onClick={this.onClick}
          >
            <FaAngleDoubleDown />
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}
interface FormState {
  value: string;
}

interface FormProps {
  onClick: (text: string) => void;
}
