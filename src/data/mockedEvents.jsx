import faker from "faker/locale/pt_BR"

export function generateEventList() {
  const events = [...Array(faker.datatype.number({min: 5, max: 15}))].map(() => {

    const totalVacancies = faker.datatype.number({min: 5, max: 30});
  
    return {
      _id: faker.datatype.uuid(),
      name: faker.name.title(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      photo: faker.image.imageUrl(),
      summary: faker.lorem.sentences(3),
      details: faker.lorem.sentences(6),
      volunteers: [...Array(faker.datatype.number(totalVacancies))],
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
  
    return {
      _id: faker.datatype.uuid(),
      name: faker.name.title(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      photo: faker.image.imageUrl(),
      summary: faker.lorem.sentences(3),
      details: faker.lorem.sentences(6),
      volunteers: [...Array(faker.datatype.number(totalVacancies))],
      totalVacancies,
      initialDate: faker.date.future(),
      finalDate: faker.date.future()
    }
  })

  return events;
}