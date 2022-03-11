// import { v4 as uuidv4 } from "uuid";

Vue.component("Note", {
  template: `
  <div class="note">
          <header class="note-header">
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>
          </header>
          <textarea
            class="textarea"
            name="note-text"
            cols="30"
            rows="10"
          ></textarea>
        </div>
  `,
});

var app = new Vue({
  el: "#app",
  data: {
    notes: [],
  },
  methods: {
    createNote() {
      this.notes.push({
        id: uuid.v4(),
        text: "",
      });
    },
  },
});
