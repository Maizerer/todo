<template>
  <div class="flex flex-col items-center mt-10">
    <div class="w-1/2">
      <div class="flex gap-5">
        <input
          v-model="todoText"
          class="border border-black rounded-2xl outline-none h-[50px] w-full p-5"
          type="text"
          @keyup.enter="todoCreate"
        />
        <button
          class="bg-blue-800 text-white px-5 py-2 rounded-xl hover:bg-blue-500 active:bg-blue-900 duration-200"
          @click="todoCreate"
        >
          Создать
        </button>
      </div>
      <div class="flex flex-col gap-5 mt-10">
        <todo-item
          v-for="(todo, index) in todoList"
          :key="index"
          :todo="todo"
          :index="index"
          @delete="deleteTodo(index)"
          @change="changeTodo(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import todoItem from '~/components/TodoItem'
export default {
  name: 'IndexPage',
  components: {
    todoItem,
  },
  async asyncData({ error, store }) {
    try {
      await store.dispatch('todo/fetchTodos')
    } catch (e) {
      error({
        statusCode: 404,
        message: 'Сервер упал',
      })
    }
  },
  data() {
    return {
      todoText: '',
    }
  },
  computed: {
    ...mapState('todo', ['todoList', 'counter']),
  },
  methods: {
    ...mapActions('todo', ['fetchTodos']),
    ...mapMutations('todo', [
      'createTodo',
      'deleteTodo',
      'changeTodo',
      'setCounter',
    ]),
    todoCreate() {
      if (this.todoText === '') {
        this.$toast.error('Todo не может быть пустым')
        return
      }
      const todo = {
        id: this.counter,
        title: this.todoText,
        completed: false,
      }
      this.createTodo(todo)
      this.setCounter(this.counter + 1)
      this.todoText = ''
    },
  },
}
</script>
<style scoped lang="scss"></style>
