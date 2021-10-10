<template>
  <b-modal id="newTask" title="New Item" hide-footer>
    <b-form>
      <b-form-input
        id="input-1"
        v-model="newItem.title"
        type="text"
        placeholder="Title"
        class="my-3"
        required
      ></b-form-input>
      <b-form-textarea
        id="textarea"
        v-model="newItem.description"
        placeholder="Description"
        rows="3"
        max-rows="6"
        class="my-4"
      ></b-form-textarea>
      <div class="d-flex justify-content-end">
        <b-button @click="cancel" class="mx-3">Cancel</b-button>
        <b-button @click="save" class="ml-3" variant="success">Save</b-button>
      </div>
    </b-form>
  </b-modal>
</template>
<script>
import {mapActions} from "vuex";

export default {
    name: "ModalNewCard",
    data: () => ({
      newItem: {
        title: "",
        description: ""
      }
    }),
    methods: {
      ...mapActions(["createTask"]),
      cancel() {
        this.newItem.title = "";
        this.newItem.description = "";
        this.$bvModal.hide('newTask');
      },
      save() {
        const task = this.createTask({
          title: this.newItem.title,
           description: this.newItem.description,
        });
        if(task) this.cancel();
      }
    }
}
</script>