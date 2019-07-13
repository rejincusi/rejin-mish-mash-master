const groupAdultsByAgeRange = (people) => {
  let groupings = {}
  
  // 18 to 20 
  const below20 = people.filter(person => person.age >= 18 && person.age <= 20)
  if (below20.length > 0) {
    groupings['20 and younger'] = below20
  }
  // 21 to 30
  const above20 = people.filter(person => person.age >= 21 && person.age <= 30)
  if (above20.length > 0) {
    groupings['21-30'] = above20
  }

  // 31 to 40
  const above30 = people.filter(person => person.age >= 31 && person.age <= 40)
  if (above30.length > 0) {
    groupings['31-40'] = above30
  }

  // 41 to 50
  const above40 = people.filter(person => person.age >= 41 && person.age <= 50)
  if (above40.length > 0) {
    groupings['41-50'] = above40
  }

  // 51 and older
  const above50 = people.filter(person => person.age >= 51)
  if (above50.length > 0) {
    groupings['51 and older'] = above50
  }

  return groupings
}

module.exports = { groupAdultsByAgeRange }

