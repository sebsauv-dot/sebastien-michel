import {
  Monitor,
  Server,
  Network,
  FileText,
  Wrench,
  Database,
} from "lucide-react";

export const technologiesData = [
  {
    id: 1,
    title: "Systèmes",
    icon: Monitor,
    items: [
      "Toutes Versions Windows",
      "Linux",
      "Mac OS",
      
    ],
  },

  {
    id: 2,
    title: "Serveurs",
    icon: Server,
    items: [
      
      "Windows Server 2012",
      "Windows Server 2019",
    ],
  },

  {
    id: 3,
    title: "Réseaux",
    icon: Network,
    items: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "Active Directory",
      "Wi-Fi",
      "Ethernet",
    ],
  },

  {
    id: 4,
    title: "Microsoft Office",
    icon: FileText,
    items: [
      "Word",
      "Excel",
      "Outlook",
      "PowerPoint",
      "Access",
    ],
  },

  {
    id: 5,
    title: "Support & Télémaintenance",
    icon: Wrench,
    items: [
      "TeamViewer",
      "AnyDesk",
      "VNC",
      "Téléassistance",
      "Support utilisateurs",
    ],
  },

  {
    id: 6,
    title: "Solutions professionnelles",
    icon: Database,
    items: [
      "EBP",
      "Solutions TPV",
      "TPE",
      "Balances",
      "Terminaux d'encaissement",
    ],
  },
];