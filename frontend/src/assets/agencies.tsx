import canalRiver from "../assets/logos/canal-river.svg";
import nrw from "../assets/logos/nrw.svg";
import environment from "../assets/logos/environment-agency.png";
import glenEagles from "../assets/logos/gleneagles.png";
import naturalEngland from "../assets/logos/natural-england.png";
import rspb from "../assets/logos/rspb.png";
import olympics from "../assets/logos/olympic-games.png";

export interface Agency {
  title: string;
  imgUrl: string;
}

export const agencies: Agency[] = [
  {
    title: "Canal & River Trust",
    imgUrl: canalRiver
  },
  {
    title: "Natural Resources Wales",
    imgUrl: nrw
  },
  {
    title: "Environment Agency",
    imgUrl: environment
  },
  {
    title: "Glen Eagles",
    imgUrl: glenEagles
  },
  {
    title: "Natural England",
    imgUrl: naturalEngland
  },
  {
    title: "RSPB",
    imgUrl: rspb
  },
  {
    title: "London 2012 Olympics",
    imgUrl: olympics
  }
];