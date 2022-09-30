<template>
  <div
    class="w-full bg-gray-300 rounded-lg px-5 py-3 flex justify-between items-center"
  >
    <div class="font-medium">{{ index + 1 }} {{ todo.title }}</div>
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
  },
}
</script>

<style scoped></style>
