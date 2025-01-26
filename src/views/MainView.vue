<template>
  <div class="main">
    <div class="form">
      <form id="newWishListForm" @submit.prevent="createWishList">
        <input v-model="newWishList.name" type="text" placeholder="Name" required />
        <input v-model="user" type="text" placeholder="JohnDoe" required />
      </form>
      <button class="btn" type="submit" form="newWishListForm">Create wish list</button>
    </div>

    <div class="form">
      <form id="getWishLists" @submit.prevent="getWishLists">
        <input v-model="user" type="text" placeholder="JohnDoe" required />
      </form>
      <button class="btn" type="submit" form="getWishLists">Get wish lists</button>
    </div>

    <div class="wish-lists">
      <RouterLink
        v-for="wishList in wishLists"
        :key="wishList.id"
        :to="`/wish-lists/${wishList.id}`"
        >{{ wishList.name }}</RouterLink
      >
    </div>
  </div>

  <RouterView />
</template>

<script>
import { createWishList, getWishLists } from '../services/mockBackend.js'

export default {
  data() {
    return {
      user: '',
      newWishList: {
        id: Math.floor(Math.random() * 1000),
        name: '',
      },
      wishLists: [],
    }
  },
  methods: {
    async createWishList() {
      await createWishList(this.user, this.newWishList)
      this.newWishList = { id: Math.floor(Math.random() * 1000), name: '' }
    },
    async getWishLists() {
      this.wishLists = await getWishLists(this.user)
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  padding: 50px;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
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

.wish-lists {
  display: flex;
  padding: 20px;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  overflow-y: auto;
  height: 300px;
}
</style>
