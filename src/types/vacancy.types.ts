export interface IVacancies {
  objects: IVacancy[],
  total?: number,
  more?: boolean,
}

export interface IVacancy {
  id: number,
  profession: string,
  firm_name: string,
  town: {
    title: string,
  },
  type_of_work: {
    title: string,
  }
  payment_to: number,
  payment_from: number,
  no_agreement?: number,
  currency: string,
  vacancyRichText: string,
}

