import React from "react";
import FileField from "../components/fields/FileField";

const initialState = [<FileField label="screenshot" />];

const screenshotsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_SCREENSHOTS":
      return [...actions.fileField];

    default:
      return state;
  }
};

export default screenshotsReducer;
