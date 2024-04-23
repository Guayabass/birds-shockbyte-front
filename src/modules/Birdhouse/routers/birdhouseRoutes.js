import BirdHousePage from "../views/BirdHousePage.vue";
import BirdsHistory from "../components/BirdsHistory.vue";
import ChartComponent from "../components/ChartComponent.vue";

export default [
  {
    path: "/overview/birdhouse",
    name: "Birdhouse",
    redirect: "/overview/birdhouse/history",
    component: BirdHousePage,
    children: [
      {
        path: "history",
        name: "History",
        component: BirdsHistory,
      },
      {
        path: "chart",
        name: "Graph",
        component: ChartComponent,
      },
    ],
  },
];
