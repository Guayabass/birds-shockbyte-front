import { defineStore } from "pinia";
//import axios from "axios";

export const useOverviewStore = defineStore({
  id: "Overview",
  state: () => ({
    page: 1,
    count: 1,
    birdHouses: [],
  }),
  getters: {},
  actions: {
  },
});
