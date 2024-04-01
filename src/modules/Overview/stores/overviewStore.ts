import { defineStore } from "pinia";
import { birdHouse } from "../utils/birdhouse.interface";
//import axios from "axios";

export const useOverviewStore = defineStore({
  id: "Overview",
  state: () => ({
    page: 1,
    count: 1,
    birdHouses: [] as birdHouse[],
  }),
  getters: {},
  actions: {
  },
});
