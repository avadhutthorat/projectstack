const initState = {
  projects: [
    { id: 1, title: "lyrics world", content: "Find songs lyrics" },
    { id: 2, title: "text generator", content: "sample text" }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Project Created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Project error created", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
