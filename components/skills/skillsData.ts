import {
  MonitorCog,
  Server,
  Network,
  Wrench,
  Database,
  Users,
} from "lucide-react";

export const skillsData = [
  {
    id: 1,
    icon: MonitorCog,
    title: "Maintenance Informatique",
    description:
      "Installation, diagnostic, dépannage, maintenance préventive et corrective des postes de travail.",

    skills: [
      "Diagnostic matériel",
      "Réinstallation Windows",
      "Migration de postes",
      "Sauvegarde",
      "Assemblage PC",
      "Support technique",
    ],
  },

  {
    id: 2,
    icon: Server,
    title: "Windows Server",
    description:
      "Administration de serveurs Microsoft pour les PME.",

    skills: [
      "Active Directory",
      "DNS",
      "DHCP",
      "GPO",
      "Gestion utilisateurs",
      "Sauvegardes",
    ],
  },

  {
    id: 3,
    icon: Network,
    title: "Réseaux",
    description:
      "Installation et maintenance des infrastructures réseau.",

    skills: [
      "TCP/IP",
      "Ethernet",
      "Wi-Fi",
      "Brassage",
      "Switch",
      "Routeur",
    ],
  },

  {
    id: 4,
    icon: Database,
    title: "Solutions TPV",
    description:
      "Installation et maintenance de solutions d'encaissement.",

    skills: [
      "Installation",
      "Paramétrage",
      "Formation",
      "Maintenance",
      "TPE",
      "Balances",
    ],
  },

  {
    id: 5,
    icon: Wrench,
    title: "Support Utilisateurs",
    description:
      "Assistance sur site et à distance.",

    skills: [
      "Télémaintenance",
      "AnyDesk",
      "TeamViewer",
      "Support",
      "Documentation",
      "Formation",
    ],
  },

  {
    id: 6,
    icon: Users,
    title: "Relation Client",
    description:
      "Accompagnement, conseil et suivi des entreprises.",

    skills: [
      "Conseil",
      "Formation",
      "Suivi",
      "Commercial",
      "Devis",
      "Achats",
    ],
  },
];