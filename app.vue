<template>
	<select v-model="selectedItemId">
		<option v-for="item in items" :value="item.id" :selected="selectedItemId === item.id">
			{{item.name}}
		</option>
	</select>
</template>

<script>
	export default {
		computed: {
		items() {
			return this.$store.state.items;
		},
		selectedItemId: {
			get() {
				return this.$store.state.selectedItemId;
			},
			set(selectedItemId) {
				this.$store.commit('selectItem', {itemId: selectedItemId});
			}
		}
	},
	created() {
		this.$store.dispatch('loadItems')
			.then(items => {
				this.$store.commit('setItems', {items});
			});
	}
};
</script>
