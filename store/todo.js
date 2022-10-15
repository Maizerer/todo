export const state = () => ({
  todoList: [],
  counter: 0,
})

export const mutations = {
  setCounter(state, payload) {
    state.counter = payload
  },
  setTodos(state, payload) {
    state.todoList = payload
  },
  createTodo(state, todoItem) {
    state.todoList.unshift(todoItem)
  },
  deleteTodo(state, index) {
    state.todoList.splice(index, 1)
  },
  changeTodo(state, index) {
    state.todoList[index].completed = !state.todoList[index].completed
  },
}

export const actions = {
  async fetchTodos({ commit }) {
    const response = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=50'
    )
    commit('setTodos', response.data)
  },
}
