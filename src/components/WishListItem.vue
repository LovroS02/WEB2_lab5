<template>
  <div class="wish-list-item">
    <div class="left-side">
      <p>{{ title }}</p>
      <img :src="imgUrl || 'https://placehold.co/200'" />
      <div @input="updateDescription" class="description" contenteditable="true">
        {{ description }}
      </div>
    </div>
    <div class="right-side">
      <button class="btn" @click="updateItem">Update</button>
      <button class="btn" @click="deleteItem">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['updateItem', 'deleteItem'],
  props: ['id', 'title', 'imgUrl', 'description'],
  data() {
    return {
      newDescription: '',
    }
  },
  methods: {
    updateItem() {
      this.$emit('updateItem', this.id, { description: this.newDescription })
    },
    deleteItem() {
      this.$emit('deleteItem', this.id)
    },
    updateDescription(event) {
      this.newDescription = event.target.innerHTML
    },
  },
}
</script>

<style scoped>
.wish-list-item {
  display: flex;
  align-items: center;
  padding: 30px;
  justify-content: space-between;
  font-size: 20px;
  background-color: bisque;
  width: 500px;
  border-radius: 10px;
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
}

.description {
  border: 0;
  border-radius: 5px;
  height: 20px;
  padding: 5px;
  color: black;
  font-size: 20px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 100%;
  height: 100%;
  border: 1px groove gray;
  text-align: center;
}

.description:focus {
  outline: 0;
}

img {
  width: 200px;
  height: 200px;
}

p {
  margin: 0;
}

.right-side {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
