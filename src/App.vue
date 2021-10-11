<template>
  <div id="app">
    <ModalNewCard />
    <div class="crud-create-button-container">
      <b-button v-b-modal.newTask class="crud-create-button mr-3" variant="success">+ Add New Item</b-button>
    </div>
    <div class="columns-container">
      <TasksColumn heading="To Do" status="todo" :tasks="todo" />
      <TasksColumn heading="In Progress" status="inProgress" :tasks="inProgress" />
      <TasksColumn heading="Done" status="done" :tasks="done" />
    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from "vuex";
import TasksColumn from "@/components/TasksColumn";
import ModalNewCard from "@/components/ModalNewCard";

export default {
  name: "App",
  data: () => ({}),
  computed: {
    ...mapState(["todo", "inProgress", "done"])
  },
  components: {
   TasksColumn,
   ModalNewCard
  },
  methods: {
    ...mapActions(["initializeStore"]),
  },
  created(){
    this.initializeStore();
 }
};
</script>
<style scoped>
*:not([class^="card-"]) {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

*::selection {
  background: transparent;
  color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.crud-create-button-container {
  height: 40px;
  max-width: 1200px;
  width: calc(100% - 30px);
  display: flex;
  margin: 30px auto;
  justify-content: flex-end;
}

.crud-create-button {
  max-width: 170px;
}

.columns-container {
  display: flex;
  height: 100%;
  max-width: 1200px;
  width: calc(100% - 30px);
  margin: 0px auto;
}

@media screen and (max-width: 900px) {
  .columns-container {
    flex-direction: column;
    height: 100%;
    max-width: 1200px;
    width: calc(100% - 30px);
    margin: 0px auto;
  }
}
</style>
