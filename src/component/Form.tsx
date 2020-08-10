import React from "react";
import { Form as BootStrapForm } from "react-bootstrap";
import { Button } from "./Button";
import "../css/Form.css";

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
      <div>
        <BootStrapForm.Group>
          <BootStrapForm.Control
            size="sm"
            type="text"
            placeholder="Add todo item"
            value={this.state.value.length !== 0 ? this.state.value : ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              this.handleChange(event.target.value)
            }
          />
        </BootStrapForm.Group>
        <Button
          disabled={this.state.value.length === 0}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
interface FormState {
  value: string;
}

interface FormProps {
  onClick: (text: string) => void;
}
