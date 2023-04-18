import React, { ChangeEvent, useEffect, useState } from "react";

type PropsProfileType = {
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileStatusWithHooks = (props: PropsProfileType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const activateUneditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  // componentDidUpdate(prevProps: Readonly<PropsProfileType>, prevState: Readonly<{}>, snapshot?: any): void {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({ status: this.props.status });
  //   }
  // }

  return (
    <div>
      {editMode ? (
        <div>
          <input type="text" value={status} onBlur={activateUneditMode} autoFocus onChange={onStatusChange} />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
