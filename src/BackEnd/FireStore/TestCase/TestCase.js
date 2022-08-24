import { db } from "../../FirebaseConfiguration";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

//----get all  Tests Case from Firebase DB----//
export const GetAllTestCase = async () => {
  try {
    var data = [];
    var testCase = {};
    const querySnapshot = await getDocs(collection(db, "testCase"));
    querySnapshot.forEach((doc) => {
      testCase = doc.data();
      testCase.id = doc.id;
      data.push(testCase);
    });
    return data;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
export const getTestCaseByTitle = async (title) => {
  let testCase = null;

  const TestCaseSnapshot = await getDocs(collection(db, "testCase"));

  TestCaseSnapshot.forEach((doc) => {
    if (doc.data().title === title) {
      const newtestCase = {
        id: doc.id,
        title: doc.data().title,
        Run: doc.data().Run,
        assignee: doc.data().assignee,
        description: doc.data().description,
        requirement: doc.data().requirement,
        status: doc.data().status,
        suite: doc.data().suite,
      };

      testCase = newtestCase;
    }
  });

  return testCase;
};

//////////  //////////////////////////////////////////////////////////////////////////////////
//----Add New Test Case to Firebase DB----//
export const AddNewTestCase = async (testCase) => {
  try {
    await addDoc(collection(db, "testCase"), testCase);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//----Update Test Case Add To Suite----//
export const addToSuite = async (selectedTestsCaseId) => {
  try {
    for (let i = 0; i < selectedTestsCaseId.length; i++) {
      await updateDoc(doc(db, "testCase", selectedTestsCaseId[i]), {
        suite: "1",
      });
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//----Delete Tests Case----//
export const deleteTestsCase = async (selectedTestsCaseId) => {
  try {
    for (let i = 0; i < selectedTestsCaseId.length; i++) {
      await deleteDoc(doc(db, "testCase", selectedTestsCaseId[i]));
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
//----Update Test Case delete from Suite----//
export const deleteSuite = async (selectedTestsCaseId) => {
  try {
    for (let i = 0; i < selectedTestsCaseId.length; i++) {
      await updateDoc(doc(db, "testCase", selectedTestsCaseId[i]), {
        suite: "0",
      });
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
