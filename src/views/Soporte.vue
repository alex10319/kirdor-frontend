<script setup lang="ts">
    import { ref, onMounted } from  'vue';

    import Header from '@/components/Header.vue';
</script>
<template>
    <Header/>
		<div class="supportView">
			<div class="card">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque in sunt pariatur, tempore impedit fugit quas incidunt repudiandae distinctio minus, sequi veniam non doloremque. Ut mollitia velit iusto itaque?
			</div>
		</div>
</template>
<style lang="scss">
	.supportView{
		width: 100%;
		height: 100vh;
		padding: 10px;
		background-color: #222;
		display: flex;
		justify-content: center;
		align-items: center;

		.card{
			color:#fff;
		}
	}
</style>