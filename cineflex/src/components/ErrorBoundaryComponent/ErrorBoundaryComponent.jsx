import { Component } from "react";
import style from "./ErrorBoundaryComponent.module.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorMessage: error.message });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className={style["error-message-container"]}>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
