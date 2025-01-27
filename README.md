# WEB2_lab5

url aplikacije: 'https://web2-lab5-0frw.onrender.com'

interpolation/one-way binding: da, /src/components/WishListItem.vue, :4, :7

two-way binding: da, /src/components/WishList.vue, :6, :7, :8

methods: da, /src/components/WishList.vue, :57, :58, :63, :67

computed properties: da, /src/components/WishList.vue, :50, :51

barem jedan scoped style: da, /src/components/WishList.vue, :79

koristiti barem jedan lifecycle hook: da, /src/components/WishList.vue, :72

routing (više stranica): da, /src/router/index.js, :10, :15, :20
aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) :15, :20
dinamičko usmjeravanje s 404 stranicom ("catch all"): da, /src/router/index.js, :25, /src/components/NotFound.vue

(barem) dvije komponente: da, /src/components/NotFound.vue, /src/components/WishList.vue, /src/components/WishListItem.vue
komponenta bez stanja, koristiti properties, da, /src/components/WishListItem.vue, :20
komponenta sa stanjem, da, /src/components/WishList.vue, :40, :42

barem jedna komponenta mora emitirati barem jedan event: da, /src/components/WishListItem.vue, :11, :12, :28, :31

store (Pinia): da, /src/stores/itemStore.js, /src/components/WishList.vue, :52

asinkroni dohvat podataka s backenda, možete:
koristiti Firebase ili Back4App, Mocky, itd.
vlastiti storage, ili
možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis: da, /src/services/mockBackend.js, :10, :25, /src/views/MainView.vue, :46, :50

ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente): da, /src/router/index.js, :17, :22