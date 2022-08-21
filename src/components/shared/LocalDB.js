export const testDB = {
  testcases: [
    {
      id: "1",
      title: "import meeting by rest", // title of the test case
      description: "This is a test case",
      requirement: "ST functional", // requirement of the test case
      assignee: "Faruch I", // assignee of the test case
      status: "Open", // status of the test case
      Run: "No Run", // run status of the test case
      suite: "1",
    },
    {
      id: "2",
      title: "meeting playback",
      description: "This is a test case",
      requirement: "MI functional",
      assignee: "Amit Zamir",
      status: "Done",
      Run: "Passed",
      suite: "0",
    },
    {
      id: "3",
      title: "Add edit and delte bookmarks of the meeting ",
      description: "This is a test case",
      requirement: "MI functional",
      assignee: "Yakov K",
      status: "Done",
      Run: "Passed",
      suite: "1",
    },
    {
      id: "4",
      title: "Perform recap of the meeting",
      description: "This is a test case",
      requirement: "MI functional",
      assignee: "Amit Zamir",
      status: "WIP",
      Run: "Failed",
      suite: "0",
    },
  ],
};
