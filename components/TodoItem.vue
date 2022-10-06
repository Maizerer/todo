<template>
  <div
    class="w-full bg-gray-300 rounded-lg px-5 py-3 flex justify-between items-center"
  >
    <button
      class="rounded-xl px-2 py-2 bg-blue-600 hover:bg-blue-400 active:bg-blue-800 duration-200"
      @click="doneTodo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mb-1 mr-1">
      <path class="fill-current text-white" d="M10.5,14.7928932 L17.1464466,8.14644661 C17.3417088,7.95118446 17.6582912,7.95118446 17.8535534,8.14644661 C18.0488155,8.34170876 18.0488155,8.65829124 17.8535534,8.85355339 L10.8535534,15.8535534 C10.6582912,16.0488155 10.3417088,16.0488155 10.1464466,15.8535534 L7.14644661,12.8535534 C6.95118446,12.6582912 6.95118446,12.3417088 7.14644661,12.1464466 C7.34170876,11.9511845 7.65829124,11.9511845 7.85355339,12.1464466 L10.5,14.7928932 Z"/>
      </svg>

    </button>
    <div :class="{done:todo.completed}">{{ index + 1 }} {{ todo.title }}</div>
    <button
      class="rounded-lg bg-red-500 text-white px-5 py-2 hover:bg-red-400 active:bg-red-800 duration-200"
      @click="deleteTodo"
    >
      Удалить
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteTodo() {
      this.$emit('delete')
    },
    doneTodo(){
      this.$emit('change')
    }
  },
}
</script>

<style scoped>
  .done{
    text-decoration: line-through;
  }
</style>
