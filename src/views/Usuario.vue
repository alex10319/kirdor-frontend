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
					<img src="@/assets/img/tournaments/1.jpg" class="user__banner--carousel-img" />
				</v-carousel-item>
				<v-carousel-item>
					<img src="@/assets/img/tournaments/2.jpg" class="user__banner--carousel-img" />
				</v-carousel-item>
				<v-carousel-item>
					<img src="@/assets/img/tournaments/3.jpg" class="user__banner--carousel-img" />
				</v-carousel-item>
				<v-carousel-item>
					<img src="@/assets/img/tournaments/4.jpg" class="user__banner--carousel-img" />
				</v-carousel-item>
			</v-carousel>
      <div class="user__banner-gradient"></div>
      <div class="user__banner-title--container">
        <div class="user__banner--title">
          <h4 class="title">alex10319#0001</h4>
          <p class="subtitle">
            <i class="mdi mdi-clipboard-account text-warning"></i>
            Perfil de la plataforma</p>
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
									<img src="@/assets/img/user/usuario.png" class="tab-icon">
									Perfil
								</v-tab>
								<v-tab value="tab-2" class="tab--content">
									<img src="@/assets/img/user/configuraciones.png" class="tab-icon">
									Configuración
								</v-tab>
								<v-tab value="tab-3" class="tab--content">
									<img src="@/assets/img/user/diagrama.png" class="tab-icon">
									Torneos
								</v-tab>
								<v-tab value="tab-4" class="tab--content">
									<img src="@/assets/img/user/desplazarse.png" class="tab-icon">
									Historial
								</v-tab>
								<v-tab value="tab-5" class="tab--content">
									<img src="@/assets/img/user/reunion.png" class="tab-icon">
									Equipos
								</v-tab>
								<v-tab value="tab-6" class="tab--content">
									<img src="@/assets/img/user/control-de-juego.png" class="tab-icon">
									Juegos
								</v-tab>
								<v-tab value="tab-7" class="tab--content">
									<img src="@/assets/img/user/tech-support.png" class="tab-icon">
									Soporte
								</v-tab>
							</v-tabs>
							<v-window v-model="tab" class="window__container--table">
								<v-window-item
									:key="1"
									:value="'tab-1'"
								>
                  <div class="user__container--window">
                    <div class="user__window--element">
                      <img src="@/assets/img/user/defaultuser.jpg" class="profile-img" alt="">
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
</style>