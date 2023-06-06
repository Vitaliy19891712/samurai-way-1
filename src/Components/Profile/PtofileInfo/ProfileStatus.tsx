import React, { ChangeEvent, useEffect, useState } from "react";

type PropsProfileType = {
  status: string;
  updateStatus?: (status: string) => void;
};

class ProfileStatus extends React.Component<PropsProfileType> {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  activateUneditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus && this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: Readonly<PropsProfileType>, prevState: Readonly<{}>, snapshot?: any): void {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input type="text" value={this.state.status} onBlur={this.activateUneditMode} autoFocus onChange={this.onStatusChange} />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
