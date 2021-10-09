<template>
  <b-card no-body variant="primary" class="taskcard-body mt-2 mb-5">
    <b-card-header class="d-flex">
      <button :id="id" class="button-options"></button>
      <b-popover class="card-popover" :target="id" triggers="hover" placement="top">
        <b-button-group vertical>
          <template v-if="status === 'todo'">
            <b-button
              @click="moveTask({taskId: id,  currentStatus: status, newStatus: 'inProgress'})"
              size="sm"
            >In Progress</b-button>
          </template>
          <template v-if="status === 'inProgress'">
            <b-button-group>
              <b-button
                @click="moveTask({taskId: id,  currentStatus: status, newStatus: 'todo'})"
                size="sm"
              >To Do</b-button>
              <b-button
                @click="moveTask({taskId: id,  currentStatus: status, newStatus: 'done'})"
                size="sm"
              >Done</b-button>
            </b-button-group>
          </template>
          <template v-if="status === 'done'">
            <b-button
              @click="moveTask({taskId: id,  currentStatus: status, newStatus: 'inProgress'})"
              size="sm"
            >In Progress</b-button>
          </template>
          <b-button @click="deleteTask({taskId: id,  status})" size="sm" variant="danger">Delete</b-button>
        </b-button-group>
      </b-popover>
    </b-card-header>
    <b-card-body>
      <b-card-title class="mb-3">{{title}}</b-card-title>
      <b-card-text>{{description}}</b-card-text>
    </b-card-body>
  </b-card>
</template>
<script>
import {mapActions} from "vuex";

export default {
    name: "TaskCard",
    data: () => ({
      
    }),
    props: {
      title: {
        type: String,
        required: true,
        maxLength: 50
      },
      description: {
        type: String,
      },
      id: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true,
      }
    },
    computed: {
      // cardColorVariant () {
      //   // if(this.status === "todo") return "info";
      //   // if(this.status === "inProgress") return "warning";
      //   // if(this.status === "done") return "done";
      //   return "danger"
      // }
    },
    methods: {
      ...mapActions(["moveTask", "deleteTask"]),
    }
}
</script>
<style scoped>
.taskcard-body {
  width: calc(100% - 60px);
  height: auto;
  text-align: left;
}

.button-options {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background: grey;
  margin: auto 0 auto auto;
}
</style>