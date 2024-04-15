import BirdHousePage from '../views/BirdHousePage.vue';
import BirdsHistory from '../components/BirdsHistory.vue'

export default [
  {
    path: "/overview/birdhouse",
    name: "Birdhouse",
    redirect: '/overview/birdhouse/history',
    component: BirdHousePage,
    children: [
      {
        path: "history",
        component: BirdsHistory,
      }
    ]
  },
];