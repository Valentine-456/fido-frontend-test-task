<template>
  <div id="app">
    <ModalNewCard />
    <div class="crud-create-button-container">
      <b-button v-b-modal.newTask class="crud-create-button mr-3" variant="success">+ Add New Item</b-button>
    </div>
    <div class="columns-container">
      <div class="column">
        <h3>To Do</h3>
        <div class="d-flex flex-column px-5">
          <TaskCard
            v-for="(task, i) in todo"
            :key="i"
            :title="task.title"
            :description="task.description"
            :id="task.id"
            status="todo"
          ></TaskCard>
        </div>
      </div>
      <div class="column">
        <h3>In Progress</h3>
        <div class="d-flex flex-column px-5">
          <TaskCard
            v-for="(task, i) in inProgress"
            :key="i"
            :title="task.title"
            :description="task.description"
            :id="task.id"
            status="inProgress"
          ></TaskCard>
        </div>
      </div>
      <div class="column">
        <h3>Done</h3>
        <div class="d-flex flex-column px-5">
          <TaskCard
            v-for="(task, i) in done"
            :key="i"
            :title="task.title"
            :description="task.description"
            :id="task.id"
            status="done"
          ></TaskCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import TaskCard from "@/components/TaskCard";
import ModalNewCard from "@/components/ModalNewCard";

export default {
  name: "App",
  data: () => ({}),
  computed: {
    ...mapState(["todo", "inProgress", "done"])
  },
  components: {
   TaskCard,
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

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.column h3 {
  max-height: 30px;
  margin-bottom: 30px;
}
</style>
