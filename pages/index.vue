<template>
  <div class="flex flex-col items-center mt-10">
    <div class="w-1/2">
      <div class="flex gap-5">
        <input
          v-model="todoText"
          class="border border-black rounded-2xl outline-none h-[50px] w-full p-5"
          type="text"
          @keyup.enter="createTodo"
        />
        <button
          class="bg-blue-800 text-white px-5 py-2 rounded-xl hover:bg-blue-500 active:bg-blue-900 duration-200"
          @click="createTodo"
        >
          Создать
        </button>
      </div>
      <div class="flex flex-col gap-5 mt-10">
        <div
          v-for="(todo, index) in todoList"
          :key="index"
          class="w-full bg-gray-300 rounded-lg px-5 py-3 flex justify-between items-center"
        >
          <div class="font-medium">{{ index + 1 }}. {{ todo.title }}</div>
          <button
            class="rounded-lg bg-red-500 text-white px-5 py-2 hover:bg-red-400 active:bg-red-800 duration-200"
            @click="deleteTodo(index)"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData(context) {
    try {
      const response = await context.$axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=50'
      )
      const todoList = response.data
      return { todoList }
    } catch (e) {
      context.error({
        statusCode: 404,
        message: 'Сервер упал',
      })
    }
  },
  data() {
    return {
      todoText: '',
      todoList: [],
      counter: 0,
    }
  },
  methods: {
    createTodo() {
      if (this.todoText === '') {
        this.$toast.error('Todo не может быть пустым')
        return
      }
      const todo = {
        id: this.counter,
        text: this.todoText,
      }
      this.todoList.push(todo)
      this.counter += 1
      this.todoText = ''
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1)
    },
  },
}
</script>
<style scoped lang="scss"></style>
