const { createApp, ref, onMounted } = Vue;

const app = createApp({
  setup() {
    const todoText = ref("");
    const todos = ref([]);

    function addTodo() {
      todos.value.push({
        id: uuid.v4(),
        text: todoText.value,
        checked: false,
      });
      todoText.value = "";
      updateTodos();
    }

    function deleteTodo(id) {
      todos.value = todos.value.filter((todo) => todo.id !== id);
      updateTodos();
    }

    function updateTodos() {
      localStorage.setItem("todos", JSON.stringify(todos.value));
    }

    onMounted(() => {
      todos.value = JSON.parse(localStorage.getItem("todos")) ?? [];
    });

    return {
      todos,
      todoText,
      addTodo,
      deleteTodo,
      updateTodos,
    };
  },
});

app.component("todo", {
  template: "#todo-template",
  props: {
    todo: Object,
  },
  setup(props, { emit }) {},
});

app.mount("#app");
