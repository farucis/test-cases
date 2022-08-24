import create from "zustand";

const store = create((set) => ({
  testCase: null,
  sortData: null,
  tempData: null,
  setData: (data) => set((state) => ({ testCase: data })),
  setSortData: (data) => set((state) => ({ sortData: data })),
  setTempData: (data) => set((state) => ({ tempData: data })),

  AddNewTestCase: (payload) =>
    set((state) => ({ testCase: [...state.testCase, payload] })),

  deleteSuites: (payload) =>
    set((state) => ({ testCase: [...state.testCase] })),

  FilterisOpen: false,
  setFilterIsOpen: (payload) => set(() => ({ FilterisOpen: payload })),

  selectedFilterName:null,
  setSelectedFilterName: (payload) => set(() => ({ selectedFilterName: payload })),


}));

export default store;
