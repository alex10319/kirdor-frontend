<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';
import { Team } from '@/store/types/state';

const teams = ref<Array<Team> | null>(null);
const loadingSearch = ref<boolean>(false);

const searchTeams = () => {
	loadingSearch.value = true

	setTimeout(() => {
		loadingSearch.value = false
	}, 2000)
}

onMounted(()=>{

});
</script>
<template>
	<Header />
	<div class="teams__view">
		<div class="teams__view--container">
			<h4 class="text-white text-xl">Listado de equipos</h4>
				<v-text-field :loading="loadingSearch"
				class="mt-4 mb-4 text-white"
				density="compact" 
				variant=""
				label="Buscar equipos"
				append-inner-icon="mdi-magnify" 
				single-line hide-details 
				bg-color="#2229"
				@click:append-inner="searchTeams"
				>
				</v-text-field>
			
			<div class="teams__view--container-cards">
				<div class="teams__view--container-cards__card">
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<div class="teams__view--container-cards__card--description">
						<img src="@/assets/img/drake2.webp" class="teams__view--container-cards__card--img" />
						<div class="description__content">
							<h4 class="title">Título del equipo</h4>
							<p>team description</p>
						</div>
					</div>
				</div>
				<div class="teams__view--container-cards__card">
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<div class="teams__view--container-cards__card--description">
						<img src="@/assets/img/drake2.webp" class="teams__view--container-cards__card--img" />
						<div class="description__content">
							<h4 class="title">Título del equipo</h4>
							<p>team description</p>
						</div>
					</div>
				</div>
				<div class="teams__view--container-cards__card">
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<div class="teams__view--container-cards__card--description">
						<img src="@/assets/img/drake2.webp" class="teams__view--container-cards__card--img" />
						<div class="description__content">
							<h4 class="title">Título del equipo</h4>
							<p>team description</p>
						</div>
					</div>
				</div>
				<div class="teams__view--container-cards__card">
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<div class="teams__view--container-cards__card--description">
						<img src="@/assets/img/drake2.webp" class="teams__view--container-cards__card--img" />
						<div class="description__content">
							<h4 class="title">Título del equipo</h4>
							<p>team description</p>
						</div>
					</div>
				</div>
				<div class="teams__view--container-cards__card">
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<div class="teams__view--container-cards__card--description">
						<img src="@/assets/img/drake2.webp" class="teams__view--container-cards__card--img" />
						<div class="description__content">
							<h4 class="title">Título del equipo</h4>
							<p>team description</p>
						</div>
					</div>
				</div>
				<div class="teams__view--container-cards__card">
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<div class="teams__view--container-cards__card--description">
						<img src="@/assets/img/drake2.webp" class="teams__view--container-cards__card--img" />
						<div class="description__content">
							<h4 class="title">Título del equipo</h4>
							<p>team description</p>
						</div>
					</div>
				</div>
				<div class="teams__view--container-cards__card">
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<div class="teams__view--container-cards__card--description">
						<img src="@/assets/img/drake2.webp" class="teams__view--container-cards__card--img" />
						<div class="description__content">
							<h4 class="title">Título del equipo</h4>
							<p>team description</p>
						</div>
					</div>
				</div>
				<div class="teams__view--container-cards__card">
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<span class="t_over"></span>
					<div class="teams__view--container-cards__card--description">
						<img src="@/assets/img/drake2.webp" class="teams__view--container-cards__card--img" />
						<div class="description__content">
							<h4 class="title">Título del equipo</h4>
							<p>team description</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>
<style lang="scss">
.teams__view {
	display: flex;
	justify-content: center;
	width: 100%;
	font-family: 'Rajdhani';
	background: #111;

	&--container {
		width: 100%;
		max-width: 1280px;
		min-height: 100vh;
		margin: 0 auto;
		background: #111;
		padding: 20px;
		padding-top: 90px;

		&-cards {
			display: flex;
			flex-wrap: wrap;
			padding: 5px;
			flex-direction: row;
			width: 100%;
			padding: 10px;
			gap: 20px;
			justify-content: center;
			background:#2229;
			border-radius: 10px;

			&__card {
				flex: 1;
				min-width: 250px;
				max-width: 320px;
				height: 300px;
				position: relative;
				cursor: pointer;
				transition:filter .3s ease-out;

				&:hover{
					transition: all 0.3s ease-out;
					transform: scale(1.01);
					filter:drop-shadow(0 0 15px #22f4) !important;
				}

				.t_over{
					width: 33.333%;
					height: 33.333%;
					position: absolute;
					z-index: 2;

					&:nth-child(1){ left:0; top:0; }
					&:nth-child(2){ left:33.333%; top:0; }
					&:nth-child(3){ left:66.666%; top:0; }
					&:nth-child(4){ left:0; top:33.333%; }
					&:nth-child(5){ left:33.333%; top:33.333%; }
					&:nth-child(6){ left:66.666%; top:33.333%; }
					&:nth-child(7){ left:0; top:66.666%; }
					&:nth-child(8){ left:33.333%; top:66.666%; }
					&:nth-child(9){ left:66.666%; top:66.666%; }

					&:nth-child(1):hover ~ .teams__view--container-cards__card--description {
						transform: rotateX(-20deg) rotateY(20deg);
					}
					&:nth-child(2):hover ~ .teams__view--container-cards__card--description {
						transform: rotateX(-20deg) rotateY(0deg);
					}
					&:nth-child(3):hover ~ .teams__view--container-cards__card--description {
						transform: rotateX(-20deg) rotateY(-20deg);
					}
					&:nth-child(4):hover ~ .teams__view--container-cards__card--description {
						transform: rotateX(0deg) rotateY(20deg);
					}
					&:nth-child(5):hover ~ .teams__view--container-cards__card--description {
						transform: rotateX(0deg) rotateY(0deg);
					}
					&:nth-child(6):hover ~ .teams__view--container-cards__card--description {
						transform: rotateX(0deg) rotateY(-20deg);
					}
					&:nth-child(7):hover ~ .teams__view--container-cards__card--description {
						transform: rotateX(20deg) rotateY(20deg);
					}
					&:nth-child(8):hover ~ .teams__view--container-cards__card--description {
						transform: rotateX(20deg) rotateY(0deg);
					}
					&:nth-child(9):hover ~ .teams__view--container-cards__card--description {
						transform: rotateX(20deg) rotateY(-20deg);
					}
				}
				&--img{
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
				&--description{
					transition: all .6s ease-out;
					transform: rotateX(0deg) rotateY(0deg);
					perspective: 1000px;
					transform-style: preserve-3d;
					position: relative;
					z-index: 1;
					bottom: 0;
					left: 0;
					width: 100%;
					border-radius: 12px;
					border:1px solid #0002;
					backdrop-filter: blur(5px);
					color: #fff;
					overflow: hidden;
					
					transform: translateZ(40px);
					font-weight: 700;
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					height: 100%;

					.description__content{
						position: absolute;
						bottom: 0;
						width: 100%;
						background:#0009;
						backdrop-filter: blur(10px);
						box-shadow: 0 0 10px #0009;
						left: 0;
						padding: 20px;
						padding-top:10px;
						p{
							font-size: 13px;
							color: var(--color-primary);
							font-weight: 400;
						}
						.title{
							font-weight: 600;
							font-size: 17px;
						}
					}
				}
			}
		}
	}
}
</style>