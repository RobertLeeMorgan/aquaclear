export interface MenuItem {
  to: string;
  label: string;
}

export const servicesLinks: MenuItem[] = [
  { to: "/services/weed-cutting", label: "Weed Cutting" },
  { to: "/services/reed-bed-control", label: "Reed Bed Control" },
  { to: "/services/silt-pumping", label: "Silt Pumping" },
  { to: "/services/flotsam-removal", label: "Flotsam Removal" },
  { to: "/services/excavation-ditching", label: "Excavation & Ditching" },
  { to: "/services/tree-work", label: "Tree Work" },
];

export const galleryLinks: MenuItem[] = [
  { to: "/gallery/weed-reed-cutting", label: "Weed & Reed Cutting" },
  { to: "/gallery/silting", label: "Silt Pumping" },
  { to: "/gallery/excavation-ditching", label: "Excavation & Ditching" },
];
