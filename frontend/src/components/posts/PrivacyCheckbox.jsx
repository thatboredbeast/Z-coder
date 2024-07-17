const PrivacyCheckbox = ({ onCheckboxChange, selectedPrivacy }) => {
    return (
      <div className="flex">
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer ${
              selectedPrivacy === "private" ? "selected" : ""
            } `}
          >
            <span className="label-text">Private</span>
            <input
              type="checkbox"
              className="checkbox border-gray-200"
              checked={selectedPrivacy === "private"}
              onChange={() => onCheckboxChange("private")}
            />
          </label>
        </div>
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer  ${
              selectedPrivacy === "public" ? "selected" : ""
            }`}
          >
            <span className="label-text text-red-">Public</span>
            <input
              type="checkbox"
              className="checkbox border-gray-200"
              checked={selectedPrivacy === "public"}
              onChange={() => onCheckboxChange("public")}
            />
          </label>
        </div>
      </div>
    );
  };
  export default PrivacyCheckbox;
  