import { db } from "../../FirebaseConfiguration";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

//----Add New Test Case to Firebase DB----//
export const AddNewTestCase = async (testCase) => {
  try {
    await addDoc(collection(db, "testCase"), testCase);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

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
