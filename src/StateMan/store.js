import create from "zustand";

const store = create((set) => ({
  testCase: null,
  sortData: null,
  setData: (data) => set((state) => ({ testCase: data })),
  setSortData: (data) => set((state) => ({ sortData: data })),

  AddNewTestCase: (payload) =>
    set((state) => ({ testCase: [...state.testCase, payload] })),

  deleteSuites: (payload) =>
    set((state) => ({ testCase: [...state.testCase] })),
}));

export default store;
