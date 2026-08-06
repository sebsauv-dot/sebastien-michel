import { Project } from "@/types/Project";

export const projects: Project[] = [

{
id:1,

title:"Migration Microsoft 365",

subtitle:"Modernisation du système collaboratif",

category:"Cloud",

client:"PME",

description:
"Migration complète de la messagerie et des outils collaboratifs vers Microsoft 365.",

image:"/images/projects/m365.webp",

technologies:[
"Microsoft 365",
"Exchange Online",
"Teams",
"OneDrive",
"Azure AD"
],

missions:[
"Migration Exchange",
"Configuration Outlook",
"Déploiement Teams",
"Configuration OneDrive",
"Formation utilisateurs"
],

results:[
"Migration sans interruption",
"Continuité de service",
"Sécurisation MFA"
]

},

{
id:2,

title:"Déploiement d'un parc informatique",

subtitle:"Windows 11",

category:"Infrastructure",

client:"Entreprise",

description:
"Installation et préparation complète de postes de travail Windows.",

image:"/images/projects/windows11.webp",

technologies:[
"Windows 11",
"Active Directory",
"GPO",
"BitLocker"
],

missions:[
"Installation",
"Configuration",
"Intégration domaine",
"Déploiement logiciels"
],

results:[
"Déploiement rapide",
"Configuration homogène",
"Postes sécurisés"
]

},

];