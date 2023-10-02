<script setup lang="ts">
	import {ref,onMounted} from 'vue';
    import Header from '@/components/Header.vue';

		const tab = ref<any>(null);
		const text = ref<String | null>(null);

		onMounted(()=>{
			text.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
		})
</script>
<template>
    <Header/>
    <div class="torneos__content">
        <div class="torneos__content--aside">

        </div>
        <div class="torneos__content--container">
					<div class="torneos__container--cont">
						<div class="torneos__banner">
							<v-carousel class="torneos__banner-container" style="height: 100%;" 
							hide-delimiters
							cycle interval="3000"
        			:hide-delays="[1000, 1000]"
							show-arrows="hover"
							>
								<v-carousel-item>
									<img src="@/assets/img/tournaments/1.jpg" alt="" class="torneos__banner--carousel-img">
								</v-carousel-item>
								<v-carousel-item>
									<img src="@/assets/img/tournaments/2.jpg" alt="" class="torneos__banner--carousel-img">
								</v-carousel-item>
								<v-carousel-item>
									<img src="@/assets/img/tournaments/3.jpg" alt="" class="torneos__banner--carousel-img">
								</v-carousel-item>
							</v-carousel>
						</div>
						
						<v-card class="v-theme--dark torneos__mycard">
							<v-tabs
								v-model="tab"
								centered
								stacked
							>
								<v-tab value="tab-1" class="tab--content">
									<img src="@/assets/img/tournaments/valorant.png" class="tab-icon">
									Valorant
								</v-tab>
								<v-tab value="tab-2" class="tab--content">
									<img src="@/assets/img/tournaments/callofduty.webp" class="tab-icon">
									CallOfDuty
								</v-tab>
								<v-tab value="tab-3" class="tab--content">
									<img src="@/assets/img/tournaments/csgo.webp" class="tab-icon">
									CounterStrike GlobalOffensive
								</v-tab>
							</v-tabs>
							<v-window v-model="tab" class="window__container--table">
								<v-window-item
									v-for="i in 3"
									:key="i"
									:value="'tab-' + i"
								>
									<div class="torneos__table">
										<div class="torneos__table--header">
											<div class="torneos__table-header--item">
												<i class="mdi mdi-calendar-range"></i>Fecha</div>
											<div class="torneos__table-header--item">
												<i class="mdi mdi-trophy"></i>
												Torneo</div>
											<div class="torneos__table-header--item">
												<i class="mdi mdi-surround-sound"></i>Rondas</div>
											<div class="torneos__table-header--item">
												<i class="mdi mdi-nintendo-game-boy"></i>Juego</div>
											<div class="torneos__table-header--item">
												<i class="mdi mdi-text-short"></i>Resultado</div>
											<div class="torneos__table-header--item">
												<i class="mdi mdi-account-group"></i>Jugadores</div>
											<div class="torneos__table-header--item">
												<i class="mdi mdi-numeric"></i>Puntaje Ganado</div>
										</div>
										<div class="torneos__table--body">
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
											<div class="torneos__table-body--element">
												<div class="torneos__table-body--item">
													<p>
														<span>Hoy</span><span>15:43 hs</span>
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>
														MyTournament 123
													</p>
												</div>
												<div class="torneos__table-body--item">
													<p>4</p>
												</div>
												<div class="torneos__table-body--item">
													<span class="table__body--item--game">CounterStrike GlobalOffensive</span>
												</div>
												<div class="torneos__table-body--item">
													<p>alex10319#0001 <span class="text-success">winner</span></p>
												</div>
												<div class="torneos__table-body--item">
													<p>500/1000</p>
												</div>
												<div class="torneos__table-body--item">
													<p class="text-warning">900</p>
												</div>
											</div>
										</div>
									</div>
								</v-window-item>
							</v-window>
						</v-card>
					</div>
        </div>
        <div class="torneos__content--aside">
							<aside id="asideRight" class="aside-tournament-container aside-right">
									<button id="createTournament" class="create-tournament-btn" type="button">Crear un torneo</button>
									<div class="banner-aside-right">
											<div class="banner-aside-picture">
													<img src="@/assets/img/tournaments/aside2.jpeg">
											</div>
											<div class="banner-aside-picture">
													<img src="@/assets/img/tournaments/aside1.jpg">
											</div>
									</div>
							</aside>
        </div>
    </div>
</template>
<style lang="scss">
    .torneos__content{
        width: 100%;
        display: flex;
        justify-content: center;
				gap: 10px;
						padding-top: 80px;
        .torneos__content--aside{
            flex:.3;
						height: 100%;
						.contenedor-aside{
								width: 100%;
								height: max-content;
								display: flex;
								justify-content: space-between;
								gap: 0.15rem;
						}
						.aside-tournament-container{
								height: max-content;
								width: 100%;
								background: #222;
								border-radius: 2px;
								display: flex;
								flex-direction: column;
								gap: 0.25rem;
								padding: 0.25rem;
								padding-bottom: 0rem;
						}

						.create-tournament-btn{
								width: 100%;
								transition: background 0.25s ease-in-out;
								border-radius: 17px;
								cursor: pointer;
								font-size: 12px;
								color: #222;
								padding: 10px;
								font-weight: 500;
								border:1px solid #fff1;
								color: #fff;
								transition: all .3s;
								text-transform: uppercase;
								font-weight: 600;
								margin-bottom: 5px;
								background:#333;
								box-shadow: 0 0 15px #fff2;

								&:hover{
									transform: scale(1.02);
									box-shadow: 0 0 15px #fa1;
									background:#fa1;
								}
						}
						.banner-aside-right{
								width: 100%;
								height: max-content;
								display: flex;
								flex-direction: column;
								gap: 0.25rem;
								padding-bottom: 0.25rem;
						}
						.banner-aside-picture{
								width: 100%;
								overflow: hidden;
								border-radius: 12px;
								display: flex;
								align-items: center;
								justify-content: center;
						}
						.banner-aside-picture:hover img{
								transform: scale(1.01);
						}
						.banner-aside-picture img{
								width: 100%;
								transition: all 0.25s ease-in-out;
								height: 100%;
								object-fit:cover;
        		}
					}
				.torneos__content--container{
					max-width: 1280px;
					margin: 0 auto;
					flex:1;
					height: 100%;
					.torneos__container--cont{
						width: 100%;
						display: flex;
						flex-direction: column;
						padding-bottom: 20px;
						
						.torneos__banner{
							padding: 10px;
							display: flex;
							height: 300px;
							padding: 5px;
							background-color: #222;
							&-container{
								width: 100%;
								height: 100%;
								button{
									background-color: #2229;
									transition: all .3s;
									&:hover{
										background-color: #222;
										box-shadow: 0 0 15px #fa1;
									}
									.v-btn__content{
										i{
											color: #fff !important;
										}
										
									}
								}
								.torneos__banner--carousel-img{
									width: 100%;
									height: 100%;
									object-fit: cover;
									
								}
							}
						}

						.torneos__mycard{
							width: 100%;
							height: 100%;
							flex:1;
						}

						.v-tabs{
							height: 60px !important;
						}
						.tab--content{
							height: 50px !important;
							.v-btn__content{
								display: flex !important;
								gap: 10px;
								align-items: center;
								flex-direction: row;
							}
							.v-tab__slider{
								background:var(--color-primary);
							}
							
							.tab-icon{
								width: 30px;
								object-fit: cover;
							}
						}
						
						.window__container--table{
							width: 100%;
							height: 100%;
							padding: 10px;
							.torneos__table{
								width: 100%;
								display: flex;
								height: 100%;
								flex-direction: column;
								padding-bottom: 20px;

								&--header{
									width: 100%;
									min-height: 40px;
									max-height: 70px;
									flex:.1;
									display: grid;
									grid-template-columns: repeat(7,1fr);
									background: linear-gradient(to left, rgba(255, 81, 47, .6) 0%, rgba(255, 81, 47, 0));

									.torneos__table-header--item{
										width: 100%;
										text-align: center;
										font-size: 10px;
										display: flex;
										align-items: center;
										justify-content: center;
										text-transform: uppercase;
										i{
											color: var(--color-primary);
											font-size: 20px;
											margin-right: 10px;
										}
									}
								}
								&--body{
									width: 100%;
									min-height: 400px;
									flex:1;
									display: flex;
									flex-direction: column;
									padding: 10px;

									.torneos__table-body--element{
										display: grid;
										grid-template-columns: repeat(7,1fr);
										border-bottom: 1px solid #4449;
										transition: background .3s, transform .3s;
										&:hover{
												border:1px solid #9999;
												border-radius: 25px;
												background: #9992;
												transform: scale(1.02);
											}
										.torneos__table-body--item{
											width: 100%;
											text-align: center;
											font-size: 12px;
											display: flex;
											align-items: center;
											justify-content: center;
											padding: 10px;
											
											p{
												display: flex;
												flex-direction: column;
											}
										}
									}
								}
							}
						}
					}
				}
			}
</style>
