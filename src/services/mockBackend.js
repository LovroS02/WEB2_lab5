export const getLocalStorageItems = (key) => {
    return JSON.parse(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : []
}


export const setLocalStorageItems = (key, items) => {
    localStorage.setItem(key, JSON.stringify(items))
}

export const createWishList = (key, wishList) => {
    return new Promise(resolve => {
        if (mockDb[key]) {
            mockDb[key].wishLists.findIndex(wl => wl.name === wishList.name) === -1 ? mockDb[key].wishLists.push(wishList) : void 0
        }
        else {
            mockDb[key] = {
                wishLists: []
            }
            mockDb[key].wishLists.push(wishList)
        }
        resolve(wishList)
    })
}

export const getWishLists = (key) => {
    return new Promise(resolve => {
        resolve(mockDb[key]?.wishLists || [])
    })
}

let mockDb = {}