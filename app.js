import App from './app.vue';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialItems = [
	{id: 1, name: 'Bob'},
	{id: 2, name: 'Alice'},
	{id: 3, name: 'Oscar'}
];

const store = new Vuex.Store({
	state: {
  	items: [],
    selectedItemId: null
  },
  mutations: {
  	setItems(state, payload) {
    	state.items = payload.items;
    },
    selectItem(state, payload) {
    	state.selectedItemId = payload.itemId;
    }
  },
  actions: {
  	loadItems(context) {
    	return new Promise(resolve => {
      	setTimeout(() => {
        	resolve(initialItems);
        }, 2000);
      });
    }
  }
});

new Vue({
	el: '#app',
  store,
	render: h => h(App)
});
