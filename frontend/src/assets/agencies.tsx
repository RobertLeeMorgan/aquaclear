import canalRiver from "../assets/canal-river.svg";
import nrw from "../assets/nrw.svg";
import environment from "../assets/environment-agency.png";
import glenEagles from "../assets/gleneagles.png";
import naturalEngland from "../assets/natural-england.png";
import rspb from "../assets/rspb.png";
import olympics from "../assets/olympic-games.png";

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