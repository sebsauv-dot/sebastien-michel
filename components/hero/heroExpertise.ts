import {
   Briefcase,
  Monitor,
  Network,
  Receipt,
  Users,
  Wrench,
} from "lucide-react";

export const heroExpertise = [
  {
    id: "maintenance",
    label: "Maintenance informatique",
    icon: Wrench,

    title: "Maintenance Informatique",

    description:
      "Plus de 30 ans d'expérience dans la maintenance préventive et corrective des infrastructures informatiques.",

    skills: [
      "Diagnostic matériel",
      "Installation de postes",
      "Migration Windows",
      "Maintenance préventive",
      "Maintenance corrective",
      "Sauvegarde",
    ],
  },

  {
    id: "office",
    label: "Microsoft Office",
    icon: Briefcase,

    title: "Microsoft Office",

    description:
      "Accompagnement des utilisateurs et maîtrise des outils bureautiques Microsoft.",

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
    id: "windows",
    label: "Windows & Server",
    icon: Monitor,

    title: "Administration Windows",

    description:
      "Administration de postes clients et d'environnements Windows Server.",

    skills: [
      "Windows 10",
      "Windows 11",
      "Windows Server",
      "Active Directory",
      "DNS",
      "DHCP",
    ],
  },

  {
    id: "network",
    label: "Réseaux",
    icon: Network,

    title: "Infrastructure Réseau",

    description:
      "Installation et maintenance des réseaux informatiques professionnels.",

    skills: [
      "TCP/IP",
      "Ethernet",
      "Wi-Fi",
      "Routeurs",
      "Switchs",
      "Brassage",
    ],
  },

  {
    id: "tpv",
    label: "Solutions TPV",
    icon: Receipt,

    title: "Solutions d'encaissement",

    description:
      "Installation et maintenance de solutions professionnelles d'encaissement.",

    skills: [
      "Installation",
      "Paramétrage",
      "Formation",
      "Maintenance",
      "Télémaintenance",
      "Terminaux de paiement",
    ],
  },

  {
    id: "support",
    label: "Support Utilisateurs",
    icon: Users,

    title: "Support Utilisateurs",

    description:
      "Accompagnement des utilisateurs sur site et à distance.",

    skills: [
      "Assistance",
      "Télémaintenance",
      "Formation",
      "Documentation",
      "Conseil",
      "Suivi",
    ],
  },
];