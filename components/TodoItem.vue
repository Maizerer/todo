<template>
  <div
    class="w-full bg-gray-300 rounded-lg px-5 py-3 flex justify-between items-center"
  >
    <button
      class="px-2 py-2 bg-white "
      @click="doneTodo"
    ></button>
    <div :class="{done:completed}">{{ index + 1 }} {{ todo.title }}</div>
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
    completed:{
      type: Boolean,
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
