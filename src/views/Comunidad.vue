<script setup lang="ts">
import Header from '@/components/Header.vue';
import Clip from '@/components/Clip.vue';
import { ref, onMounted } from 'vue';
import { User } from '@/store/types/state';
import { useStore } from 'vuex';
import config from '@/config';

const user = ref<User | null>(null);
const store = useStore();
const publicationDescription = ref<any | null>(null);
const publicationPhoto = ref<any | null>(null);
const fileInput = ref<any>(null);
const loader = ref<boolean>(false);
const errorMessage = ref<String | any>(null);
const publications = ref<Array<Object>>([]);
const prepareNumber = (value: Number) => {
	//se espera que si tenemos el id 12 el return sea "#0012"
	// Convierte el valor numérico en una cadena y rellena con ceros a la izquierda
	const paddedValue = String(value).padStart(4, '0');

	// Devuelve la cadena con el signo de almohadilla (#) precediendo a los dígitos
	return `#${paddedValue}`;
}

const uploadPublication = async () => {
	if (publicationDescription.value || publicationPhoto.value) {
		const data = {
			photo: publicationPhoto.value,
			description: publicationDescription.value
		}
		
		const formData = new FormData();

		formData.append('photo',data.photo);
		formData.append('description',data.description);

		try{
			loader.value = true;
			const response = await store.dispatch('uploadPublication',formData);
			publications.value.push(response);
			config.Toast.fire({
				icon: 'success',
				title: 'Tu publicación se subió correctamente',
				color: '#fff',
				background:'#222'
			});
		}catch(e:any){
			if(e.response.data.message){
				errorMessage.value = e.response.data.message;
			}else{
				errorMessage.value = e;
			}

			config.Toast.fire({
				icon: 'error',
				title: errorMessage.value,
				color: '#fff',
				background:'#222'
			});
		}finally{
			loader.value = false;
		}
	} else {
		config.Toast.fire({
			icon: 'error',
			title: 'Debes incluír una descripción o una foto a tu publicación!',
			color: '#fff',
			background: '#222'
		})
	}
}

const openFile = () => {
	fileInput.value.click();
}
const handleFileChange = (event:any) => {
	console.log(event);
	const selectedFile = event.target.files[0];
	if (selectedFile) {
		// Aquí puedes realizar las acciones necesarias con el archivo seleccionado
		publicationPhoto.value = selectedFile;

		// También puedes subir el archivo al servidor o realizar otras operaciones
	} else {
		publicationPhoto.value = null;
	}
}
const clearImage = () => {
	publicationPhoto.value = null;
	fileInput.value = null;
}

onMounted(() => {
	user.value = store.getters.user;
});
</script>
<template>
	<Header />
	<main id="comunity" class="comunity-main">
		<div class="comunity__section--container">
			<div class="comunity__section-container--notices">
				<div class="notices--content">
					<div class="notices__content--banner">
						<i class="mdi mdi-chevron-right banner-arrow"></i>
						<i class="mdi mdi-chevron-left banner-arrow arrow-left"></i>

						<div class="banner-item">
							<img class="notices__content-banner--img" src="@/assets/img/drake2.webp" />
							<h2 class="title">Título de la Card</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quae! Nemo voluptatem, reiciendis
								culpa rerum quidem mollitia doloremque? Ducimus possimus alias non quae aut. Magnam quis perferendis saepe
								in et.</p>
							<v-btn class="btn">Participar</v-btn>
						</div>
					</div>

					<div class="notices__content--publications">
						<div class="myPublication relative overflow-hidden">
							<template v-if="loader">
										<div v-html="config.loader" class="loader__container" style="top:0;left:0;">
											
										</div>
									</template>
							<v-form class="myPublication--header" @submit.prevent="uploadPublication" enctype="multipart/form-data">
								
								<div class="profile">
									<img class="img" src="@/assets/img/gif/userconnected.gif" />
									<div class="name-cont">
										<p class="name" v-if="user">{{ user.username }}{{ prepareNumber(user.id) }}</p>
										<span class="tag">Republic Of Gamers</span>
									</div>
									<i class="mdi mdi-dots-vertical menu"></i>
								</div>

								<div class="publication">
									<textarea name="publicationtext" id="" cols="30" rows="10" placeholder="¿Qué estás pensando?..."
										v-model="publicationDescription"></textarea>
								</div>

								<div class="mt-4 flex items-center">
									<input type="file" @change="handleFileChange" ref="fileInput" hidden>
									<v-btn class="btn btn-dark mr-4" type="submit">Publicar</v-btn>
									<v-btn class="btn btn-gray" @click="openFile"><i class="mdi mdi-image mr-2 text-green"></i>Foto / <i
											class="mdi mdi-video text-warning"></i> Video</v-btn>
									<div class="relative w-full ml-2 h-36" v-if="publicationPhoto">
										<p class="p-2 pb-3 text-info rounded-xl" style="background: #222">{{ publicationPhoto.name }}</p>
										<i class="mdi mdi-close text-warning absolute top-0 right-0 cursor-pointer" @click="clearImage" style="top:-5px;right:-5px;z-index:10;"></i>
									</div>
								</div>
							</v-form>
						</div>

						<div class="other-publication">
							<div class="user">
								<img class="photo" src="@/assets/img/gif/userconnected.gif">
								<p>
									Alex Roldan#0001<br />
									<span>Republic Of Gamers</span>
								</p>
							</div>
							<img class="img" src="@/assets/comunity-background.png" />
							<div class="publication-description">
								<div>
									<h2 class="title">Título de la publicación</h2>
									<p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorum! Quasi
										dolorum labore accusamus dolores, modi vitae repudiandae praesentium provident quis aliquam commodi
										iusto fugit quae, minima molestiae quo necessitatibus?</p>
								</div>
							</div>
							<div class="mt-4 flex">
								<v-btn class="btn btn-dark mr-2 comment-buttons"><i class="mdi mdi-thumb-up mr-2 text-blue"></i> Me
									gusta</v-btn>
								<v-btn class="btn btn-gray ml-2 comment-buttons"><i class="mdi mdi-comment mr-2 text-orange"></i>
									Comentar</v-btn>
							</div>
						</div>
					</div>
				</div>
				<div class="aside-cont">
					<div class="comunity__section-container--aside">
						<div class="aside__teams--container">
							<div class="title-cont">
								<h3>Mejores Equipos</h3>
								<span class="btn">Ver ranking</span>
							</div>
							<div class="aside__teams">
								<div class="team">
									<img src="@/assets/img/gamer/bygamers.gif" />
									<div class="team-title">
										<p class="title">Equipo random</p>
										<span class="tag">Only Teams</span>
									</div>
									<div class="menu">
										<div class="number">
											<span>1</span>
										</div>
										<p>
											<i class="mdi mdi-trophy trophy"></i><br />
											<span>400</span>
										</p>
									</div>
								</div>
								<hr class="separator" />
								<div class="team">
									<img src="@/assets/img/gamer/bygamers.gif" />
									<div class="team-title">
										<p class="title">Equipo random</p>
										<span class="tag">Only Teams</span>
									</div>
									<div class="menu">
										<div class="number">
											<span>1</span>
										</div>
										<p>
											<i class="mdi mdi-trophy trophy"></i><br />
											<span>400</span>
										</p>
									</div>
								</div>
								<hr class="separator" />
								<div class="team">
									<img src="@/assets/img/gamer/bygamers.gif" />
									<div class="team-title">
										<p class="title">Equipo random</p>
										<span class="tag">Only Teams</span>
									</div>
									<div class="menu">
										<div class="number">
											<span>1</span>
										</div>
										<p>
											<i class="mdi mdi-trophy trophy"></i><br />
											<span>400</span>
										</p>
									</div>
								</div>
								<hr class="separator" />
								<div class="team">
									<img src="@/assets/img/gamer/bygamers.gif" />
									<div class="team-title">
										<p class="title">Equipo random</p>
										<span class="tag">Only Teams</span>
									</div>
									<div class="menu">
										<div class="number">
											<span>1</span>
										</div>
										<p>
											<i class="mdi mdi-trophy trophy"></i><br />
											<span>400</span>
										</p>
									</div>
								</div>
								<hr class="separator" />
							</div>
						</div>
						<div class="genres-container">
							<div class="title">
								<h2 class="title_tag">
									Juegos
								</h2>
								<span class="btn">Ver Todos &ltcc;</span>
							</div>
							<div class="clips-cont">
								<Clip :title="'Pokemon Go'" />
								<Clip :title="'Yu Gi Oh'" />
								<Clip :title="'Fortnite'" />
								<Clip :title="'Call Of Duty'" />
								<Clip :title="'Valorant'" />
								<Clip :title="'Cs Go'" />
							</div>
						</div>
						<div class="last__tournament">
							<h2>Último Torneo Lanzado</h2>
							<div class="last__tournament--cont">
								<img class="img" src="@/assets/img/gif/catglitched.gif" />
								<h4 class="title">Título del torneo</h4>
								<p class="description">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias in exercitationem quis. Commodi sunt
									odit fugiat reiciendis obcaecati, minus labore amet sint aut atque voluptates est? Distinctio ratione
									nam molestias?
								</p>
								<div class="btns">
									<v-btn class="btn btn-primary text-white">Particiar</v-btn>
									<v-btn class="btn btn-secondary">Ver detalles</v-btn>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</main>
</template>
<style scoped lang="scss">
// Header {
// 	background-color: rgba(37, 37, 37, 1);
// 	padding: 10px 10px;
// }

#header.scrolled {
	background-color: rgba(0, 0, 0, 1);
}

.comunity__section--container {
	display: flex;
	justify-content: flex-end;
	min-height: 100vh;
	background-color: #222;
	width: 100%;



	--aside-colors: #3332;
	--aside-shadow: 0 0 15px #0004;

	.comunity__section-container--notices {
		display: flex;
		flex: 1;
		max-width: 1400px;
		position: relative;
		margin: 0 auto;
		background-color: #3332;
		box-shadow: 0 0 15px #0004;
		padding-top: 100px;

		.notices--content {
			flex: 1;
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			padding: 20px;
			max-width: 900px;
			margin-right: 0 auto;

			.notices__content--banner {
				width: 100%;
				border-radius: 25px;
				background-color: #222;
				border: 1px solid #fff1;
				box-shadow: 0 0 20px #0009;
				z-index: 1;
				overflow: hidden;
				position: relative;

				.banner-arrow {
					position: absolute;
					z-index: 1;
					top: 50%;
					transform: translateY(-50%);
					padding: 15px;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
					background: #2229;
					cursor: pointer;
					right: 5px;

					&.arrow-left {
						left: 5px;
						right: auto;
					}

					&:hover {
						background: #222;
					}
				}

				.banner-item {
					height: 300px;
					display: flex;
					justify-content: center;
					align-items: initial;
					color: #fff;
					flex-direction: column;
					position: relative;

					&::after {
						content: '';
						z-index: -1;
						width: 120px;
						height: 50px;
						background: transparent;
						box-shadow: -90px -20px 120px #fa1;
						position: absolute;
						right: -140px;
						bottom: -20px;
					}
				}



				p {
					padding-left: 60px;
					margin: 15px 0px;
					font-size: 17px;
					max-width: 600px;
					line-height: 22px;
				}

				.title {
					font-size: 3em;
					padding-left: 60px;
					background: var(--bg-primary);
					background-clip: text;
					-webkit-background-clip: text;
					color: transparent;
				}

				.btn {
					min-width: 140px;
					background: var(--bg-primary);
					width: fit-content;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-left: 60px;
					padding: 15px;
					border-radius: 15px;
					box-shadow: 0 0 10px #fff2;
					color: #fff;
				}

				.notices__content-banner--img {
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					object-fit: cover;
					filter: brightness(.7);
				}
			}

			.notices__content--publications {
				display: flex;
				flex-direction: column;
				gap: 20px;

				.myPublication {
					width: 100%;
					display: flex;
					flex-direction: column;
					gap: 10px;
					margin-bottom: 25px;
					padding: 15px;
					margin-top: 35px;

					background: #333;
					border-radius: 20px;

					.myPublication--header {
						color: #fff;
						width: 100%;

						.profile {
							display: flex;
							justify-content: space-between;
							gap: 10px;
							align-items: center;
							width: 100%;

							.menu {
								cursor: pointer;
								font-size: 24px;
								font-weight: 100;
							}

							.img {
								width: 50px;
								height: 50px;
								border-radius: 50%;
								object-fit: cover;
							}

							.name-cont {
								padding-left: 10px;
								margin-right: auto;

								.name {
									font-size: 18px;
									font-weight: 600;
								}

								.tag {
									color: #999;
									font-size: 14px;
								}
							}

						}

					}

					.publication {
						display: flex;
						justify-content: center;
						width: 100%;
						margin-top: 20px;

						textarea {
							border: none;
							outline: none;
							width: 100%;
							height: 200px;
							background: #222;
							color: #aaa;
							padding: 20px;
							border-radius: 15px;
							resize: none;
							font-weight: 300;

							&:focus {
								outline: 1px solid #fff2;
							}
						}
					}
				}

				.other-publication {
					width: 100%;
					min-height: 400px;
					background: var(--aside-colors);
					box-shadow: var(--aside-shadow);
					border-radius: 10px;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					padding: 20px;
					justify-content: space-between;
					position: relative;

					.user {
						position: absolute;
						top: 10px;
						left: 10px;
						display: flex;
						gap: 15px;
						background: #222;
						align-items: center;
						justify-content: center;
						padding: 5px;
						border-radius: 10px;
						box-shadow: 0 0 10px #0009;

						.photo {
							width: 50px;
							height: 50px;
							border-radius: 50%;
							cursor: pointer;
						}

						p {
							color: #fff;
							font-size: 14px;
							cursor: pointer;

							span {
								font-size: 12px;
								color: #aaa;
							}
						}
					}

					.img {
						width: 100%;
						height: auto;
						max-height: 500px;
						object-fit: cover;
						border-radius: 10px;
						cursor: pointer;
					}

					.publication-description {
						margin-top: 15px;
						color: #fff;
						display: flex;
						justify-content: space-between;

						.title {
							font-size: 19px;
							margin-bottom: 10px;
							margin-left: 10px;
						}

						.description {
							padding: 10px;
							border-radius: 10px;
							border: 1px solid #fff1;
						}
					}

					.comment-buttons {
						flex: 1;
					}
				}
			}
		}

		.aside-cont {
			position: relative;

			.comunity__section-container--aside {
				height: 90vh;
				overflow-y: auto;
				flex: 1;
				max-width: 500px;
				display: flex;
				flex-direction: column;
				padding: 20px 10px;
				position: fixed;

				.aside__teams--container {
					position: relative;
					overflow: hidden;
					border-radius: 15px;
					border: 1px solid #0002;
					background-color: var(--aside-colors);
					box-shadow: var(--aside-shadow);

					&::before {
						position: absolute;
						z-index: 1;
						content: '';
						background: #222;
						width: 100%;
						height: 15px;
						bottom: 0;
					}

					.title-cont {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 10px 20px;
						padding-top: 15px;
						color: #fff;

						.btn {
							color: #aaa;
							cursor: pointer;
						}
					}

					.aside__teams {
						display: flex;
						flex-direction: column;
						border-radius: 15px;
						height: 180px;
						overflow: hidden;
						overflow-y: auto;
						padding: 15px 15px;

						.team {
							display: flex;
							width: 100%;
							height: fit-content;
							justify-content: center;
							align-items: center;
							background: #1118;
							padding: 10px;
							border-radius: 10px;
							transition: all .2s;
							cursor: pointer;

							&:hover {
								transform: scale(1.01);
							}

							.team-title {
								display: flex;
								flex-direction: column;
								margin-right: auto;
								margin-left: 20px;

								.title {
									color: #fff;
									letter-spacing: .5px;
									font-size: 17px;
								}

								.tag {
									font-size: 12px;
									color: #aaa;
								}
							}

							.menu {
								font-size: 12px;
								text-align: center;
								color: #fff;
								cursor: pointer;
								display: flex;
								flex-direction: row;
								align-items: center;
								gap: 15px;

								.trophy {
									font-size: 14px;
									color: gold;
								}

								.number {
									background: gold;
									border-radius: 50%;
									width: 20px;
									height: 20px;
									display: flex;
									justify-content: center;
									align-items: center;
									margin-bottom: 5px;
									color: #222;
									font-weight: 700;
									font-size: 15px;
								}
							}

							img {
								width: 55px;
								height: 55px;
								border-radius: 50%;
								object-fit: cover;
							}
						}

						.separator {
							border: 1px solid #3337;
							margin: 10px auto;
							width: 90%;
						}
					}
				}

				.genres-container {
					display: flex;
					padding: 10px;
					margin-top: 15px;
					flex-direction: column;
					gap: 15px;
					background-color: var(--aside-colors);
					border-radius: 20px;
					border: 1px solid #0002;
					box-shadow: var(--aside-shadow);

					.title {
						color: #aaa;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 5px;

						.title_tag {
							font-weight: 500;
							color: #fff;
						}

						.btn {

							cursor: pointer;
						}
					}

					.clips-cont {
						display: flex;
						flex-wrap: wrap;
						gap: 12px;
					}
				}

				.last__tournament {
					display: flex;
					flex-direction: column;
					gap: 10px;
					margin-top: 30px;
					color: #fff;

					.last__tournament--cont {
						display: flex;
						flex-direction: column;
						padding: 10px 20px;
						min-height: 300px;
						background-color: #fa1;
						border-radius: 10px;
						background-color: #3339;
						margin-top: 15px;
						gap: 15px;

						img {
							width: 50%;
							object-fit: cover;
							height: 150px;
							margin: 0 auto;
							border-radius: 10px;
						}

						.title {
							font-size: 20px;
						}

						.description {
							font-size: 15px;
							line-height: 20px;
						}

					}
				}
			}
		}

		.btns {
			display: flex;
			justify-content: center;
			gap: 15px;
			padding: 10px;
			padding-top: 0px;

		}


		.btn-secondary {
			background-color: transparent;
			border: 1px solid #fff5;
			color: #fff;

			&:hover {
				background-color: #225;
			}
		}

		.btn-dark {
			background: #222;
			color: #fff;
		}

		.btn-gray {
			background: #2227;
			color: #fff;
		}
	}
}
</style>