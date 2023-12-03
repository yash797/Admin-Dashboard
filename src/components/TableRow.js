import React, { useState } from "react";

const TableRow = ({
  user,
  selected,
  handleRowSelection,
  handleDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <tr className={selected ? "selected" : ""}>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={(event) => handleRowSelection(event, user.id)}
        />
      </td>
      <td>{user.id}</td>
      <td contentEditable={isEditing} onBlur={handleSaveClick}>
        {user.name}
      </td>
      <td contentEditable={isEditing} onBlur={handleSaveClick}>
        {user.email}
      </td>
      <td contentEditable={isEditing} onBlur={handleSaveClick}>
        {user.role}
      </td>
      <td className="btn-container">
        {isEditing ? (
          <button onClick={handleSaveClick}>
            <i className="fas fa-save"></i>
          </button>
        ) : (
          <button onClick={handleEditClick}>
            <i className="fas fa-edit"></i>
          </button>
        )}
        <button onClick={() => handleDelete(user.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
