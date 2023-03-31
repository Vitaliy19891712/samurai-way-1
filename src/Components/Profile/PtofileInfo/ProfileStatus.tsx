import React, { useState } from "react";

const ProfileStatus = (props: any) => {
  const [editMode, setEditMode] = useState(false);

  let activateEditMode = () => setEditMode(true);
  let activateUneditMode = () => setEditMode(false);

  return (
    <div>
      {editMode ? (
        <div>
          <input type="text" value={props.status} onBlur={activateUneditMode} autoFocus />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
