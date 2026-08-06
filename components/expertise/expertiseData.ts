import {
  MonitorCog,
  Server,
  Network,
  FileSpreadsheet,
  Receipt,
  Headset,
} from "lucide-react";

export const expertiseData = [
  {
    id: 1,
    icon: MonitorCog,
    title: "Maintenance Informatique",
    description:
      "Maintenance préventive et corrective des postes de travail et des équipements informatiques.",

    skills: [
      "Diagnostic matériel",
      "Dépannage",
      "Installation de postes",
      "Migration Windows",
      "Sauvegarde des données",
      "Assemblage et remplacement de matériel",
    ],
  },

  {
    id: 2,
    icon: Server,
    title: "Administration Systèmes",
    description:
      "Administration des environnements Microsoft Windows Server.",

    skills: [
      "Windows Server",
      "Active Directory",
      "Gestion des utilisateurs",
      "DNS",
      "DHCP",
      "GPO",
    ],
  },

  {
    id: 3,
    icon: Network,
    title: "Réseaux",
    description:
      "Installation, configuration et maintenance des réseaux d'entreprise.",

    skills: [
      "TCP/IP",
      "Ethernet",
      "Wi-Fi",
      "Routeurs",
      "Switchs",
      "Brassage réseau",
    ],
  },

  {
    id: 4,
    icon: FileSpreadsheet,
    title: "Microsoft Office",
    description:
      "Accompagnement et assistance sur les outils bureautiques Microsoft.",

    skills: [
      "Word",
      "Excel",
      "Outlook",
      "PowerPoint",
      "Access",
      "Formation utilisateurs",
    ],
  },

  {
    id: 5,
    icon: Receipt,
    title: "Solutions TPV",
    description:
      "Installation, paramétrage et maintenance de solutions d'encaissement.",

    skills: [
      "Installation",
      "Configuration",
      "Formation",
      "Maintenance",
      "Télémaintenance",
      "Terminaux de paiement",
    ],
  },

  {
    id: 6,
    icon: Headset,
    title: "Support Utilisateurs",
    description:
      "Assistance technique, accompagnement et relation client.",

    skills: [
      "Support sur site",
      "Support à distance",
      "Formation",
      "Documentation",
      "Conseil",
      "Suivi client",
    ],
  },
];