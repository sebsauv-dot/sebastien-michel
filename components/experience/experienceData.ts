import {
  Server,
  Network,
  ShoppingCart,
  Printer,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export const experienceData = [
  {
    id: 1,
    icon: ShoppingCart,
    company: "NCPI",
    location: "Saint-Gély-du-Fesc",
    period: "2021 - Aujourd'hui",
    title: "Technicien Maintenance TPV",
    description:
      "Installation, paramétrage et maintenance de solutions d'encaissement pour les commerces avec accompagnement des utilisateurs.",

    technologies: [
      "TPV",
      "Windows Server 2019",
      "TPE",
      "Balances",
      "Réseaux",
    ],

    missions: [
      "Installation de caisses",
      "Configuration TPE",
      "Paramétrage",
      "Formation utilisateurs",
      "Maintenance",
      "Téléassistance",

    ],
  },

  {
    id: 2,
    icon: Printer,
    company: "Burotik 34",
    location: "Béziers",
    period: "2019 - 2020",
    title: "Technicien Bureautique",
    description:
      "Installation et maintenance de copieurs professionnels avec interventions sur site et assistance technique.",

    technologies: [
      "Konica Minolta",
      "Triumph Adler",
      "Windows",
      "Réseaux",
    ],

    missions: [
      "Installation",
      "Maintenance",
      "SAV",
      "Diagnostic",
      "Support",
      "Formation",


    ],
  },

  {
    id: 3,
    icon: Server,
    company: "BDX Multimédia",
    location: "Bédarieux",
    period: "2007 - 2018",
    title: "Technicien Maintenance Informatique",
    description:
      "Gestion complète de parcs informatiques pour les professionnels, maintenance matérielle et logicielle, administration de serveurs Windows et accompagnement des utilisateurs.",

    technologies: [
      "Windows",
      "Windows Server",
      "Active Directory",
      "EBP",
      "TCP/IP",
      "Sauvegarde",
    ],

    missions: [
      "Maintenance informatique",
      "Gestion de parc",
      "Installation de serveurs",
      "Support utilisateurs",
      "Création de sites Internet",
      "Relation clients",

    ],
  },

  {
    id: 4,
    icon: Network,
    company: "Collège Les Arbourys",
    location: "Magalas",
    period: "2005 - 2008",
    title: "Responsable Informatique",
    description:
      "Administration complète du réseau informatique de l'établissement scolaire avec gestion des serveurs et assistance quotidienne aux utilisateurs.",

    technologies: [
      "Windows Server",
      "Active Directory",
      "DHCP",
      "GPO",
      "Réseaux",
    ],

    missions: [
      "Administration serveurs",
      "Gestion du réseau",
      "Maintenance",
      "Sauvegardes",
      "Support utilisateurs",
      "Sécurité",

    ],
  },

  {
    id: 5,
    icon: GraduationCap,
    company: "Formation & Assistance",
    location: "Divers clients",
    period: "Tout au long du parcours",
    title: "Accompagnement des utilisateurs",
    description:
      "Formation des utilisateurs, assistance sur site et à distance, résolution d'incidents et accompagnement lors des déploiements.",

    technologies: [
      "TeamViewer",
      "AnyDesk",
      "VNC",
      "Microsoft Office",
      "NcRetail Magasin, Resaurant, Boulangerie, Mode"
    ],

    missions: [
      "Formation",
      "Support",
      "Télémaintenance",
      "Documentation",
      "Assistance",
      "Conseil",
    ],
  },

  {
    id: 6,
    icon: Briefcase,
    company: "Gestion commerciale",
    location: "BDX Multimédia, NCPI",
    period: "2007 - 2021",
    title: "Gestion Commerciale",
    description:
      "Gestion des devis, Commandes, Factures, achats fournisseurs, Gestion des Fournisseurs, ventes et relation clientèle tout en conservant les responsabilités techniques.",

    technologies: [
      "EBP Gestion Commerciale",
      "NcGestion",
    ],

    missions: [
      "Devis, Commandes, Factures",
      "Achats Fournisseurs",
      "GestionFournisseurs",
      "Relation clients",
      "Conseils",
      "Vente auprès particuliers et professionnels",
    ],
  },
];