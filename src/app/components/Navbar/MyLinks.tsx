export interface MenuItem {
  name: string;
  link?: string;
  children?: MenuItem[];
}


export const links = [

  {
    NAME: "A PROPOS DE NOUS",
    link: "/",
  },

  {
    name: "TRAVAILLER",
    children: [
      { name: "EMIT", link: "/" },
      { name: "PERMIS DE TRAVAIL", link: "/" },
      { name: "PROLONGATION DE PERMIS DE TRAVAIL", link: "/" },
    ],
  },

  {
    name: "IMMIGRER",
    children: [

      { name: "ENTREES EXPRESS - TRAVAILLEURS QUALIFIES FEDERALE(TQF)", link: "/" },
      { name: "ENTREES EXPRESS - CATEGOGIE DE L'EXPERIENCE CANADIENNE (CEC)", link: "/" },
      { name: "PROGRAMMES DU QUEBEC (PEQ)", link: "/" },
      { name: "PROGRAMMES DU QUEBEC (PEQ)", link: "/" },
      { name: "PROGRAMMES DES CANDIDATS DES PROVINCES (PCP)", link: "/" },
      { name: "PARRAINER VOTRE EPOUX, CONJOINT DE FAIT OU ENFANT A CHARGE ", link: "/" },
      { name: "PARRAINER VOS PARENTS OU VOS GRAND-PARENTS", link: "/" },
    ],
  },



  {
    name: "VISITER",
    children: [
      { name: "VISA VISITEUR AU CANADA", link: "/" },
      { name: "SUPERVISA POUR LES PARENTS ET LES GRAND-PARENTS", link: "/" },

    ],
  },



  {
    name: "ETUDIER",
    children: [


      { name: "PERMIS D'ETUDE", link: "/" },
      { name: "PROLONGATION DE PERMIS D'ETUDE", link: "/" },

    ],
  },

];