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
    imgUrl: "/images/services/service1.webp",
    description: "We provide expert aquatic weed cutting services to keep your water bodies healthy.",
    route: "/services/weed-cutting",
  },
  {
    title: "Reed Bed Control",
    imgDescription: "A reed bed with clear water",
    imgUrl: "/images/services/service2.webp",
    description: "Our reed bed control services ensure your water bodies remain healthy and balanced.",
    route: "/services/reed-bed-control",
  },
  {
    title: "Silt Pumping",
    imgDescription: "A serene pond with clear water",
    imgUrl: "/images/services/service3.webp",
    description: "We offer comprehensive silt pumping services to maintain water quality.",
    route: "/services/silt-pumping",
  },
  {
    title: "Rubbish & Flotsom Removal",
    imgDescription: "A healthy aquatic ecosystem",
    imgUrl: "/images/services/service4.webp",
    description: "Keep your water bodies clean with our rubbish and flotsam removal services.",
    route: "/services/flotsam-removal",
  },
  {
    title: "Excavation & Ditching",
    imgDescription: "A well-maintained ditch",
    imgUrl: "/images/services/service5.webp",
    description: "Our excavation and ditching services help manage water flow effectively.",
    route: "/services/excavation-ditching",
  },
  {
    title: "Tree Work",
    imgDescription: "A scenic view of trees by the water",
    imgUrl: "/images/services/service6.webp",
    description: "We provide tree work services to maintain the health and aesthetics of your water bodies.",
    route: "/services/tree-work",
  }
];