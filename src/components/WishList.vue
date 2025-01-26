<template>
  <div class="wish-list">
    <h1>Wish List</h1>
    <div class="form">
      <form id="newItemForm" @submit.prevent="addItem">
        <input v-model="newItem.title" type="text" placeholder="Title" required />
        <input v-model="newItem.imgUrl" type="text" placeholder="Image url" />
        <input v-model="newItem.description" type="text" placeholder="Description" />
      </form>
      <button class="btn" type="submit" form="newItemForm">Add</button>
    </div>

    <div class="wish-list-items" v-if="items.length">
      <WishListItem
        v-for="item in items"
        :key="item.id"
        v-bind="item"
        @updateItem="updateItem"
        @deleteItem="deleteItem"
      />
    </div>
    <p v-else>Wishlist is empty</p>
  </div>
</template>

<script>
import WishListItem from './WishListItem.vue'
import { useItemStore } from '../stores/itemStore.js'
import { useRoute } from 'vue-router'

export default {
  components: { WishListItem },
  setup() {
    const route = useRoute()

    return {
      wishListId: route.params.id,
    }
  },
  data() {
    return {
      newItem: {
        id: Math.floor(Math.random() * 100),
        title: '',
        imgUrl: '',
        description: '',
      },
    }
  },
  computed: {
    items() {
      const store = useItemStore()

      return store.items
    },
  },
  methods: {
    addItem() {
      const store = useItemStore()
      store.addItem(this.wishListId, this.newItem)
      this.newItem = { id: Math.floor(Math.random() * 100), title: '', imgUrl: '', description: '' }
    },
    updateItem(itemId, updatedData) {
      const store = useItemStore()
      store.updateItem(this.wishListId, itemId, updatedData)
    },
    deleteItem(itemId) {
      const store = useItemStore()
      store.deleteItem(this.wishListId, itemId)
    },
  },
  mounted() {
    const store = useItemStore()
    store.fetchItems(this.wishListId)
  },
}
</script>

<style scoped>
.wish-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  overflow-y: unset;
  gap: 20px;
}

.form {
  display: flex;
  align-items: center;
  gap: 10px;
}

form {
  display: flex;
  gap: 10px;
}

.wish-list-items {
  display: flex;
  padding: 20px;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  overflow-y: auto;
  height: 600px;
}

p {
  font-size: 20px;
}
</style>
