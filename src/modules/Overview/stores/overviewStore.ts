import { defineStore } from "pinia";
import { birdHouse } from "../utils/birdhouse.interface";
import { History } from "../../Birdhouse/utils/history.interface";
//import axios from "axios";

export const useOverviewStore = defineStore({
  id: "Overview",
  state: () => ({
    page: 1 as number,
    clicked: false as boolean,
    historyPage: 1 as number,
    historyCount: 1 as number,
    count: 1 as number,
    longitude: 0 as number,
    latitude: 0 as number,
    name: "" as string,
    ubid: "" as string, //PERSIST
    history: [] as History[],
    birdHouses: [] as birdHouse[],
  }),
  getters: {},
  actions: {},
  persist: {
    storage: sessionStorage,
    paths: ["ubid", "longitude", "latitude", "name", "clicked"],
  },
});
