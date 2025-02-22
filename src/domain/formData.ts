
export type FormData = {
  name: any
  nom: string,
  prenom: string,
  etatCivil: string,
  dateDeNaissance: string,
  country: string,
  currentCountry: string,
  email: string,
  telephone: string,
  detail: string,
  program: string,
  salutation: string,

}

export type FormDatatwo = {
  niveauEtude: string,
  emploi: string,
  fonction: string,
  experience: string,
  // marié: string,
  age: string,
  niveau: string,
  emplois: string,
  sonexperience: string,
  enfant: string
}

export type Salutation = {
  value: string,
  label: string
}

export type ContactEmailDataType = {
  name: string,
  surname: string,
  tel: string,
  entreprise: string,
  ville: string,
  email: string,
  message: string
}

export type InitialValues = {
  name: "",
  surname: "",
  email: "",
  tel: "",
  message: "",
  ville: "",
  entreprise: "",
}