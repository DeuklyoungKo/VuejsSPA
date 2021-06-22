const database = [
  {id: 1, name: 'Product A', price: 100, content: 'Product A detail'},
  {id: 2, name: 'Product B1', price: 200, content: 'Product B detail'},
  {id: 3, name: 'Product C', price: 300, content: 'Product C detail'}
]

export default {
  fetch (id) { return database },
  find (id) { return database.find(el => el.id === id) },
  asyncFind (id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 1000)
  }
}
