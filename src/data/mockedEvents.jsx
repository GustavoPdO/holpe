import faker from "faker/locale/pt_BR"

export function generateEventList() {
  const events = [...Array(faker.datatype.number({min: 5, max: 15}))].map(() => {

    const totalVacancies = faker.datatype.number({min: 5, max: 30});
    const volunteers = [...new Array(faker.datatype.number(totalVacancies))].map(() => generateUser())
  
    return {
      _id: faker.datatype.uuid(),
      name: faker.name.title(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      photo: faker.image.imageUrl(null, null, "company", true),
      summary: faker.lorem.sentences(3),
      details: faker.lorem.sentences(6),
      volunteers,
      totalVacancies,
      initialDate: faker.date.future(),
      finalDate: faker.date.future()
    }
  })

  return events;
}

export function generateEventListWithQty(qty = 3) {
  const events = [...Array(faker.datatype.number({min: qty, max: qty}))].map(() => {

    const totalVacancies = faker.datatype.number({min: 5, max: 30});
    const volunteers = [...new Array(faker.datatype.number(totalVacancies))].map(() => generateUser());
  
    return {
      _id: faker.datatype.uuid(),
      name: faker.name.title(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      photo: faker.image.imageUrl(null, null, "event", true),
      summary: faker.lorem.sentences(3),
      details: faker.lorem.sentences(6),
      volunteers,
      totalVacancies,
      initialDate: faker.date.future(),
      finalDate: faker.date.future()
    }
  })

  return events;
}

function generateUser() {
  return {
    _id: faker.datatype.uuid(),
    name: faker.name.firstName(0) + " " + faker.name.lastName(),
    avatar: faker.image.imageUrl(null, null, "people", true),
    email: faker.internet.email()
  }
}

export const mockedUser = {
  name: faker.name.firstName(0) + " " + faker.name.lastName(),
  avatar: faker.image.imageUrl(null, null, "people", true),
  description: faker.lorem.lines(2),
  documentNumber: "12345678-123",
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  address : {
    street: faker.address.streetName(),
    number: faker.datatype.number(999),
    addressComplement: "",
    postal: faker.address.zipCode(),
    city: faker.address.cityName(),
    uf: faker.address.stateAbbr(),
  },
  facebook: "",
  instagram: ""
}