<script lang="ts" setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  import { ref, onMounted } from 'vue';

  const tab = ref<any>(null);
</script>
<template>
  <Header/>
  <div class="user__page--container">
    <div class="user__banner--container">
      <v-carousel style="height: 100%;" 
							hide-delimiters
							cycle interval="3000"
        			:hide-delays="[1000, 1000]"
              show-arrows="hover"
							>
				<v-carousel-item>
					<!-- <img src="@/assets/img/tournaments/4.jpg" class="user__banner--carousel-img" /> -->
				</v-carousel-item>
				<v-carousel-item>
					<!-- <img src="@/assets/img/tournaments/4.jpg" class="user__banner--carousel-img" /> -->
				</v-carousel-item>
				<v-carousel-item>
					<!-- <img src="@/assets/img/tournaments/4.jpg" class="user__banner--carousel-img" /> -->
				</v-carousel-item>
				<v-carousel-item>
					<!-- <img src="@/assets/img/tournaments/4.jpg" class="user__banner--carousel-img" /> -->
				</v-carousel-item>
			</v-carousel>
      <div class="user__banner-gradient"></div>
      <div class="user__banner-title--container">
        <div class="user__banner--title">
          <h4 class="title">alex10319#0001</h4>
          <p class="subtitle">
            <i class="mdi mdi-clipboard-account text-warning"></i>
            Perfil de La Plataforma</p>
        </div>
      </div>
    </div>

    <div class="user__page--content">
      <v-card class="v-theme--dark torneos__mycard" style="background:#111;">
							<v-tabs
								v-model="tab"
								centered
								stacked
							>
								<v-tab value="tab-1" class="tab--content">
									<img src="@/assets/img/user/icono-1.png" class="tab-icon">
									Perfil
								</v-tab>
								<v-tab value="tab-2" class="tab--content">
									<img src="@/assets/img/user/icono-2.png" class="tab-icon">
									Configuración
								</v-tab>
								<v-tab value="tab-3" class="tab--content">
									<img src="@/assets/img/user/icono-3.png" class="tab-icon">
									Torneos
								</v-tab>
								<v-tab value="tab-4" class="tab--content">
									<img src="@/assets/img/user/icono-4.png" class="tab-icon">
									Historial
								</v-tab>
								<v-tab value="tab-5" class="tab--content">
									<img src="@/assets/img/user/icono-5.png" class="tab-icon">
									Equipos
								</v-tab>
								<v-tab value="tab-6" class="tab--content">
									<img src="@/assets/img/user/icono-6.png" class="tab-icon">
									Juegos
								</v-tab>
								<v-tab value="tab-7" class="tab--content">
									<img src="@/assets/img/user/icono-7.png" class="tab-icon">
									Soporte
								</v-tab>
							</v-tabs>
							<v-window v-model="tab" class="window__container--table">
                <!-- Perfil -->
								<v-window-item
									:key="1"
									:value="'tab-1'"
								>
                  <div class="user__container--window">
                    <div class="user__window--element">
                      <img src="@/assets/img/user/defaultuser.jpg" class="profile-img">
                      <div class="user__window-element--description">
                        <p class="title">Name</p>
                        <p class="tag">Username</p>
                        <span class="under-tag">tag del usuario</span>
                      </div>
                    </div>
                    <div class="user__window--element">
                      <div class="flex-col flex">
                        <h4 class="bold mb-2 text-xl">Resumen</h4>
                        <v-row class="text-secondary">
                          <v-col cols="12" sm="6">
                            <span class="text-warning">Ranking: <i class="mdi mdi-trophy"></i></span>123
                          </v-col>
                          <v-col cols="12" sm="6">
                            <span class="text-warning">Publicaciones: <i class="mdi mdi-alpha-p"></i></span>123
                          </v-col>
                          <v-col cols="12" sm="6">
                            <span class="text-warning">Reportes: <i class="mdi mdi-alert"></i></span>123
                          </v-col>
                          <v-col cols="12" sm="6">
                            <span class="text-warning">Torneos Jugados: <i class="mdi mdi-play"></i></span>123
                          </v-col>
                          <v-col cols="12" sm="6">
                            <span class="text-warning">Victorias: <i class="mdi mdi-robot-happy"></i></span>123
                          </v-col>
                          <v-col cols="12" sm="6">
                            <span class="text-warning">Derrotas: <i class="mdi mdi-emoticon-sad"></i></span>123
                          </v-col>
                        </v-row>
                      </div>
                      <div class="flex-col mt-4 flex">
                        <h4 class="bold mb-2 text-xl">Descripción del Usuario</h4>
                        <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum facilis quae rem ipsa vel id dolorem deleniti ipsam, molestiae, eligendi quasi cumque. Harum veritatis ducimus reprehenderit eaque, temporibus impedit.</p>
                      </div>
                    </div>
                  </div>
                  <div class="user-description mt-4 text-white">
                    <h4 class="mb-4 text-2xl">Cambios Generales</h4>
                    <v-file-input append-inner-icon="mdi-paperclip" accept="image/*" prepend-icon="" label="Cambiar foto de perfil" variant="solo" bg-color="#2229" class="v-theme--dark"/>
                    <v-text-field label="Cambiar tag de usuario" variant="solo" bg-color="#2229" class="v-theme--dark"/>
                    <v-textarea label="Cambiar descripción de usuario" variant="solo" bg-color="#2229" class="v-theme--dark"/>
                    <v-col class="text-right">
                      <v-btn color="warning">Guardar cambios</v-btn>
                    </v-col>
                  </div>
                  
								</v-window-item>
                <!-- Final Perfil -->

                <!-- Historial -->
                <v-window-item 
                :key="4"
                :value="'tab-4'"
                >

                  <!-- Contenedor Central -->
                  <div class="torneos__content--container">
                    <div class="section-info__titles">
                      <h4>Sección de Historial</h4>
                      <span>En esta pequeña sección de tu perfil te mostramos todo el historial de tu cuenta, desde Torneos en los que participaste hasta tus victorias, derrotas y puntos.</span>
                    </div>
                    <div class="torneos__container--cont">
                        <div class="history__table">
                              <div class="history__table--header">
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-calendar-range"></i>Fecha</div>
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-trophy"></i>
                                  Torneo</div>
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-surround-sound"></i>Rondas</div>
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-nintendo-game-boy"></i>Juego</div>
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-text-short"></i>Resultado</div>
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-account-group"></i>Jugadores</div>
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-numeric"></i>Puntaje Ganado</div>
                              </div>
                              <div class="history__table--body">
                                <div class="history__table-body--element">
                                  <div class="history__table-body--item">
                                    <p>
                                      <span>2/10/2023</span><span>15:00hs</span>
                                    </p>
                                  </div>
                                  <div class="history__table-body--item">
                                    <p>
                                      Mi Torneo
                                    </p>
                                  </div>
                                  <div class="history__table-body--item">
                                    <p>Paralelas</p>
                                  </div>
                                  <div class="history__table-body--item">
                                    <span class="table__body--item--game">Fortnite
                                    </span>
                                  </div>
                                  <div class="history__table-body--item">
                                    <p>alex10319#0001 <span class="text-success">Ganador</span></p>
                                  </div>
                                  <div class="history__table-body--item">
                                    <p>25/30</p>
                                  </div>
                                  <div class="history__table-body--item">
                                    <p class="text-warning">+550</p>
                                  </div>
                                </div>
                              </div>
                        </div>
                    </div>
                  </div>

                </v-window-item>
                <!-- Final Historial -->

                <!-- Juegos -->
                <v-window-item 
                :key="6"
                :value="'tab-6'"
                >

                  <!-- Contenedor Central -->
                  <div class="torneos__content--container">
                    <div class="section-info__titles">
                      <h4>Sección de Juegos</h4>
                      <span>En esta pequeña sección de tu perfil te mostramos tus juegos recientemente agregados, jugados y en los cuales participaste en un Torneo con tus amigos.</span>
                    </div>
                    <div class="torneos__container--cont">
                        <div class="history__table">
                              <div class="history__table--header">
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-nintendo-game-boy"></i>Juego Agregado
                                </div>
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-calendar-range"></i>Fecha
                                </div>
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-account-group"></i>Último Torneo
                                </div>
                                <div class="history__table-header--item">
                                  <i class="mdi mdi-trophy"></i>Ranking
                                </div>
                              </div>

                              <div class="history__table--body">
                                <div class="history__table-body--element">
                                  <div class="history__table-body--item">
                                    <span class="table__body--item--game">Fortnite
                                      <img class="table__body--item--game-img" src="@/assets/img/tournaments/fortnite.jpeg">
                                    </span>
                                  </div>
                                  <div class="history__table-body--item">
                                    <p>
                                      <span>2/10/2023</span><span>15:00hs</span>
                                    </p>
                                  </div>
                                  <div class="history__table-body--item">
                                    <p>
                                      <span>26/09/2023</span><span>10:00hs</span>
                                    </p>
                                  </div>
                                  <div class="history__table-body--item">
                                    <p>Top: #<span>54</span></p>
                                  </div>
                                </div>
                              </div>
                        </div>
                    </div>
                  </div>
                  
                </v-window-item>
                <!-- Final Juegos -->

							</v-window>
						</v-card>
    </div>
    
  </div>
  <Footer/>
</template>
<style lang="scss">
.user__page--container{
  width: 100%;
  height: 100%;
  .user__banner--container{
    width: 100%;
    height: 350px;
    position:relative;
    display: flex;
    justify-content: center;

    .user__banner--carousel-img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .v-btn{
      background: #222;
        .v-btn__content{
          color: #fff;
        }
    }

    .user__banner-gradient{
      width: 100%;
      height: 40%;
      bottom: -2%;
      position: absolute;
      z-index: 1;
      background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(51, 51, 51, 0) 50%);
    }
    .user__banner-title--container{
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      color: #fff;
      padding-bottom: 10px;
      z-index: 2;


      .title{
        font-size: 2em;

      }
    }
  }

  .user__page--content{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    .tab--content{
			height: 60px !important;
      padding: 10px;
			.v-btn__content{
				display: flex !important;
				gap: 10px;
				align-items: center;
				flex-direction: row;
			}
      .tab-icon{
        width: 30px;
        object-fit: cover;
      }
      .v-tab__slider{
				background:var(--color-primary);
			}
    }

    .window__container--table{
      padding: 0 0px;
      padding-bottom: 15px;

      .user__container--window{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 15px;
        justify-content: center;

        .user__window--element{
          flex:1;
          border-radius: 20px;
          background:#2222;
          padding: 10px;
          &:first-child{
            padding: 0px;
            flex:.5;
            background-color: #2229;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: relative;
            max-height: 250px;

            .profile-img{
              flex:1;
              width: 100%;
              object-fit: cover;
              box-shadow: 0 0 15px #fff2;
            }
            .user__window-element--description{
              padding: 10px;
              display: flex;
              flex-direction: column;
              position: absolute;
              z-index: 1;
              bottom: 0;
              left: 0;
              width: 100%;

              &:before{
                content: '';
                width: 100%;
                height: 150%;
                bottom: -2%;
                position: absolute;
                z-index: -1;
                left: 0;
                background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(51, 51, 51, 0) 50%);
              }
              .title{
                font-weight: 600;
                font-size: 20px;
                color: var(--color-primary);
              }

              .tag{
                color: #fdfdfd;
                font-weight: 500;
              }
              .under-tag{
                color: #fdfdfd;
                position: absolute;
                bottom: 15px;
                right: -10px;
                font-weight: 500;
                background: #2229;
                padding: 10px;
                width: 150px;
                border-radius: 10px;
                text-transform: uppercase;
                font-weight: 600;
              }
            }
          }

          .text-secondary{
            color: #aaa !important;
          }
          
        }
      }

      .user-description{
        i{
          color: #fff;
        }
        .v-field__field{
            color: #fff;
          }
      }
    }
  }
}


.history__table{
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-bottom: 20px;

  &--header{
    width: 100%;
    min-height: 40px;
    max-height: 78px;
    flex:.1;
    display: grid;
    grid-template-columns: repeat(7,1fr);
    background: linear-gradient(-90deg, rgba(255, 81, 47, 0.60) 0%, rgba(255, 81, 47, 0));
    border-radius: 6px;
    gap: 0.5rem;

    .history__table-header--item{
      width: 100%;
      text-align: center;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      cursor: pointer;
      text-shadow: 0px 0px 3px #000;
      color: #dddddd;
      transition: all 0.25s ease-in-out;
        
      i{
        color: #fa1;
        font-size: 22px;
        margin-right: 10px;
      }
    }
    .history__table-header--item:hover{
      color: #ffffff;
    }
  }

  &--body{
    width: 100%;
    min-height: 200px;
    flex:1;
    display: flex;
    flex-direction: column;
    margin-top: 0.25rem;

    .history__table-body--element{
      display: grid;
      grid-template-columns: repeat(7,1fr);
      border:1px solid transparent;
      border-bottom: 1px solid #4449;
      transition: all 0.25s ease-in-out;
      cursor: pointer;
      gap: 0.5rem;

      &:hover{
        border:1px solid #9999;
        border-radius: 12px;
      }

      .history__table-body--item{
        width: 100%;
        text-align: center;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
                      
        p{
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
      }
      .text-success{
        text-transform: uppercase;
      }
    }
  }
}

.table__body--item--game{
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .table__body--item--game-img{
    width: 32px;
    height: 32px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 50%;
  }
}

.section-info__titles{
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  background: rgba(23, 23, 23, 1.0);
  padding: 0.5rem;
  border-radius: 6px;

  h4{
    text-transform: uppercase;
    font-size: 22px;
    color: var(--color-primary);
    text-shadow: 0px 0px 3px #000;
  }
  span{
    color: #bdbdbd;
    font-size: 17px;
    text-shadow: 0px 0px 3px #000;
  }
}
</style>