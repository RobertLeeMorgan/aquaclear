import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";

export interface Service {
  title: string;
  imgDescription: string;
  imgUrl: string;
  description: string;
  route: string;
}

export const services: Service[] = [
  {
    title: "Aquatic Weed Cutting",
    imgDescription: "A beautiful lake with clear water",
    imgUrl: service1,
    description: "We provide expert aquatic weed cutting services to keep your water bodies healthy.",
    route: "/services/weed-cutting",
  },
  {
    title: "Reed Bed Control",
    imgDescription: "A reed bed with clear water",
    imgUrl: service2,
    description: "Our reed bed control services ensure your water bodies remain healthy and balanced.",
    route: "/services/reed-bed-control",
  },
  {
    title: "Silt Pumping",
    imgDescription: "A serene pond with clear water",
    imgUrl: service3,
    description: "We offer comprehensive silt pumping services to maintain water quality.",
    route: "/services/silt-pumping",
  },
  {
    title: "Rubbish & Flotsom Removal",
    imgDescription: "A healthy aquatic ecosystem",
    imgUrl: service4,
    description: "Keep your water bodies clean with our rubbish and flotsam removal services.",
    route: "/services/flotsam-removal",
  },
  {
    title: "Excavation & Ditching",
    imgDescription: "A well-maintained ditch",
    imgUrl: service5,
    description: "Our excavation and ditching services help manage water flow effectively.",
    route: "/services/excavation-ditching",
  },
  {
    title: "Tree Work",
    imgDescription: "A scenic view of trees by the water",
    imgUrl: service6,
    description: "We provide tree work services to maintain the health and aesthetics of your water bodies.",
    route: "/services/tree-work",
  }
];