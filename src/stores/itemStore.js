import { getLocalStorageItems, setLocalStorageItems } from "@/services/mockBackend";
import { defineStore } from "pinia";

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: []
    }),
    actions: {
        fetchItems(key) {
            this.items = getLocalStorageItems(key)
        },
        addItem(key, item) {
            this.items.push(item)
            setLocalStorageItems(key, this.items)
        },
        updateItem(key, itemId, updatedData) {
            const itemIndex = this.items.findIndex(item => item.id === itemId)

            if (itemIndex !== -1) {
                this.items[itemIndex] = {
                    ...this.items[itemIndex],
                    ...updatedData
                }
                setLocalStorageItems(key, this.items)
            }
        },
        deleteItem(key, itemId) {
            this.items = this.items.filter(item => item.id !== itemId)
            setLocalStorageItems(key, this.items)
        }
    }
})