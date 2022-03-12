Vue.component("Note", {
  template: `
  <div class="note">
    <header class="note-header">
      <i @click="editNote" class="fas fa-edit"></i>
      <i @click="deleteNote" class="fas fa-trash-alt"></i>
    </header>
    <textarea
      :readonly = "!isEditable"
      ref="textarea"
      :value="note.text"
      :class = "{editable:isEditable}"
      class="textarea"
      name="note-text"
      cols="30"
      rows="10"
      
    >{{note.text}}</textarea>
  </div>
  `,
  props: {
    note: {
      type: Object,
    },
  },
  data: () => ({
    isEditable: true,
  }),
  methods: {
    editNote() {
      this.isEditable = !this.isEditable;

      if (!this.isEditable) {
        this.$emit("update-note", {
          id: this.note.id,
          text: this.$refs.textarea.value,
        });
      }
    },
    focus() {
      this.$refs.textarea.focus();
    },
    deleteNote() {
      this.$emit("delete-note", this.note.id);
    },
  },
  mounted() {
    this.focus();
  },
  watch: {
    isEditable: function (value) {
      if (value) this.focus();
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    notes: [],
  },
  mounted() {
    try {
      this.notes = JSON.parse(localStorage.getItem("notes"));
    } catch (error) {
      localStorage.removeItem("notes");
    }
  },
  methods: {
    createNote() {
      this.notes.push({
        id: uuid.v4(),
        text: "",
      });
    },
    updateNote(newNote) {
      this.notes = this.notes.map((note) => {
        if (note.id === newNote.id) return newNote;
        return note;
      });
      this.saveNotes();
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
      this.saveNotes();
    },

    saveNotes() {
      const parsedNotes = JSON.stringify(
        this.notes.filter((note) => note.text.length > 0)
      );
      localStorage.setItem("notes", parsedNotes);
    },
  },
});
