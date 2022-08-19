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
        steps: [
          {
            id: "1",
            name: "Step 1",
            description: "This is a step",
            status: "pass",
            expected: "This is the expected result",
            actual: "This is the actual result",
          },
          {
            id: "2",
            name: "Step 2",
            description: "This is a step",
            status: "pass",
            expected: "This is the expected result",
            actual: "This is the actual result",
          },
        ],
      },
      {
        id: "2",
        title: "meeting playback",
        description: "This is a test case",
        requirement: "MI functional",
        assignee: "Amit Zamir",
        status: "Done",
        Run: "Passed",
        suite: "1",
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
        suite: "1",
      },
    ],
    suites: [
      {
        id: "1",
        title: "import meeting by rest",
        description: "This is a test case",
        requirement: "ST functional",
        assignee: "Faruch I",
        status: "Open",
        Run: "No Run",
        suite: "1",
        steps: [
          {
            id: "1",
            name: "Step 1",
            description: "This is a step",
            status: "pass",
            expected: "This is the expected result",
            actual: "This is the actual result",
          },
          {
            id: "2",
            name: "Step 2",
            description: "This is a step",
            status: "pass",
            expected: "This is the expected result",
            actual: "This is the actual result",
          },
        ],
      },
      {
        id: "2",
        title: "meeting playback",
        description: "This is a test case",
        requirement: "MI functional",
        assignee: "Amit Zamir",
        status: "Done",
        Run: "Passed",
        suite: "1",
      },
      {
        id: "3",
        title: "Add edit and delte bookmarks of the meeting",
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
        suite: "1",
      },
    ],
  };
  