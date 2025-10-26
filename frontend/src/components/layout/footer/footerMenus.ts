export interface MenuItem {
  label: string;
  path: string;
}

export interface Menus {
  services: MenuItem[];
  company: MenuItem[];
  legal: MenuItem[];
}


export const footerMenus: Menus = {
  services: [
    { label: "Weed Cutting", path: "/services/weed-cutting" },
    { label: "Reed Bed Control", path: "/services/reed-bed-control" },
    { label: "Silt Pumping", path: "/services/silt-pumping" },
    { label: "Flotsam Removal", path: "/services/flotsam-removal" },
    { label: "Excavation & Ditching", path: "/services/excavation-ditching" },
    { label: "Tree Work", path: "/services/tree-work" },
  ],
  company: [
    { label: "About us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Clients", path: "/clients" },
    { label: "Truxor", path: "/truxor" },
  ],
  legal: [
    { label: "Terms of use", path: "/terms" },
    { label: "Privacy policy", path: "/privacy" },
  ],
};
