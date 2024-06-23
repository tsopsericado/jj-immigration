
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
  programme: string
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