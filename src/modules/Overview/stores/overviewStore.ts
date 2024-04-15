import { defineStore } from "pinia";
import { birdHouse } from "../utils/birdhouse.interface";
import { History } from "../../Birdhouse/utils/history.interface";
//import axios from "axios";

export const useOverviewStore = defineStore({
  id: "Overview",
  state: () => ({
    page: 1,
    count: 1,
    longitude: 0 as number,
    latitude: 0 as number,
    name: '' as string,
    ubid: '' as string, //PERSIST
    history: [] as History[],
    birdHouses: [] as birdHouse[],
  }),
  getters: {},
  actions: {
  },
  persist: {
    storage: localStorage,
    paths: ['ubid', 'longitude', 'latitude', 'name'],
  },
});
