<script lang="ts" setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import { User } from '@/store/types/state';
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import config from '@/config';
  import { format, parseISO } from 'date-fns';
  import { es } from 'date-fns/locale';

  const store = useStore();

  const user = ref<User | null>(null);
  const tab = ref<any>(null);
  const team__title = ref<string | null>(null);
  const team__description = ref<string | null>(null);
  const team__photo = ref<any>(null);
  const ref__team__photo = ref<any>(null);
  const loader = ref<boolean>(false);
  const message = ref<String | any>('');
  const teamStats = ref<any>(null);

  const verifyInput = (value:any) => {
    if(value) return true;

    return 'Este campo es requerido!';
  }
  const handleFileChange = () => {
    team__photo.value = ref__team__photo.value.files;
  }
  const createTeam = async () => {
    if(team__title.value!==null && team__title.value!=='' && team__description.value!==null && 
    team__description.value!=='' && team__photo.value!==null){
      const data = {
        title: team__title.value,
        description: team__description.value,
        photo: team__photo.value[0]
      }
      const formData = new FormData();
      formData.append('title',data.title);
      formData.append('description',data.description);
      formData.append('photo',data.photo);
      try{
        loader.value = true;
        await store.dispatch('createTeam',formData);
        message.value='Tu equipo fue creado correctamente!';
        config.Toast.fire({
          icon: 'success',
          title: message.value,
          color:'#fff',
          background:'#222',
          timer: 3000
        });
      }catch(e:any){
        if(e && e.response.data.message){
          message.value = e.response.data.message;
        }else{
          message.value = e;
        }

        config.Toast.fire({
          icon: 'error',
          title: message.value,
          color:'#fff',
          background:'#222',
          timer: 3000
        });
      }finally{
        loader.value = false;
      }
    }else{
      config.Toast.fire({
        icon: 'error',
        title: 'Los campos son obligatorios.',
        color:'#fff',
        background:'#222',
        timer: 3000
      });
    }
    
  }
  
  const formatDate = (dateString: any): string => {
    if(!dateString){
      return '';
    }
    const parsedDate = parseISO(dateString);
    const formattedDate = format(parsedDate, 'dd MMMM yyyy', { locale: es });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1); // Capitalizar la primera letra del mes
  }


  onMounted(() => {
    user.value = store.getters.user;
  });
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
                    <v-file-input
                     append-inner-icon="mdi-paperclip" accept="image/*" 
                     prepend-icon="" label="Cambiar foto de perfil" variant="solo" 
                     bg-color="#2229" class="v-theme--dark"
                     />

                    <v-text-field label="Cambiar tag de usuario" 
                    variant="solo" bg-color="#2229" 
                    class="v-theme--dark"/>

                    <v-textarea label="Cambiar descripción de usuario"
                     variant="solo" bg-color="#2229" 
                     class="v-theme--dark"/>
                    <v-col class="text-right">
                      <v-btn color="warning">Guardar cambios</v-btn>
                    </v-col>
                  </div>
                  
								</v-window-item>

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

                <v-window-item
                :key="5"
                :value="'tab-5'"
                >
                  <div class="user__container--teams" v-if="user">
                    <template v-if="user.team.length==0">
                      <h4 class="title">No tienes equipo, crea uno para comenzar...<br/> O bien, solicita ingresar a uno existente.</h4>
                      <div class="text-center">
                        <v-btn class="cta__see-teams--list">Ver listado de equipos</v-btn>
                      </div>
                      <div class="create__team--container mt-4">
                        <v-form @submit.prevent="createTeam" class="create__team--form" enctype="multipart/form-data">
                          <h4 class="create__team--title mb-2">Crear equipo</h4>
                          <v-row class="w-full relative">
                            <template v-if="loader">
                              <div v-html="config.loader" class="loader__container"></div>
                            </template>
                            <v-col cols="12" sm="12">
                              <v-text-field label="Título del equipo" variant="solo" 
                              bg-color="#222" class="v-theme--dark"
                              v-model="team__title"
                              :rules="[verifyInput]"
                              />
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-textarea label="Descripción de tu equipo" variant="solo" 
                              bg-color="#222" class="v-theme--dark"
                              v-model="team__description"
                              :rules="[verifyInput]"
                              />
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-file-input append-inner-icon="mdi-paperclip" accept="image/*" 
                              prepend-icon="" label="Foto portada del equipo" 
                              variant="solo" bg-color="#222" class="v-theme--dark"
                              ref="ref__team__photo" @change="handleFileChange"
                              />
                            </v-col>
                          </v-row>
                          <v-btn type="submit" class="cta__create--team">Crear</v-btn>
                        </v-form>
                      </div>
                    </template>
                    <template v-if="user.team.length>0">
                      <div class="user__container--team">
                        <div class="user__container-team--header">
                          <div class="user__container-team--header__img">
                            <img src="@/assets/img/user/teams/default.png">
                          </div>
                          <div class="user__container-team--header__description">
                            <h4 class="team__title mt-2">
                              Creador:
                            </h4>
                            <v-row style="flex:none;" class="w-full">
                              <v-col cols="12" sm="6" class="m-0" style="height:fit-content;">
                                <p>{{ user.team[0].owner_stats.name }}</p>
                              </v-col>
                              <v-col cols="12" sm="6" class="m-0" style="height:fit-content;">
                                <p>{{ user.team[0].owner_stats.username }}</p>
                              </v-col>
                              <v-col cols="12" sm="6" class="m-0" style="height:fit-content;">
                                <p>{{ user.team[0].owner_stats.email }}</p>
                              </v-col>
                              <v-col cols="12" sm="6" class="m-0" style="height:fit-content;">
                                <p>Se unió en: {{ formatDate(user.team[0].owner_stats.created_at) }}</p>
                              </v-col>
                            </v-row>
                            <h4 class="team__title m-0 underline">
                              {{ user.team[0].title }}
                            </h4>
                            <p class="team__description m-0">
                              {{ user.team[0].description }}
                            </p>
                          </div>
                        </div>
                        <div class="user__container-team--body">
                          <div class="user__container-team--body__users">
                            <h4>Listado de Usuarios en este Equipo:</h4>
                            <div class="user__container-team--body__users--list">
                              <div class="user__container-team--body__users--list-box zoom-in">
                                <img src="@/assets/img/drake2.webp" />
                                <div class="this__box--shadow"></div>
                                <div class="this__box--description">
                                  <p>User: alex10319</p>
                                  <p>Ranking: #0001</p>
                                </div>
                              </div>
                              <div class="user__container-team--body__users--list-box zoom-in">
                                <img src="@/assets/img/gif/catglitched.gif" />
                                <div class="this__box--shadow"></div>
                                <div class="this__box--description">
                                  <p>User: alex10319</p>
                                  <p>Ranking: #0001</p>
                                </div>
                              </div>
                              <div class="user__container-team--body__users--list-box zoom-in">
                                <img src="@/assets/img/drake.jpg" />
                                <div class="this__box--shadow"></div>
                                <div class="this__box--description">
                                  <p>User: alex10319</p>
                                  <p>Ranking: #0001</p>
                                </div>
                              </div>
                              <div class="user__container-team--body__users--list-box zoom-in">
                                <img src="@/assets/img/gaming-background.jpg" />
                                <div class="this__box--shadow"></div>
                                <div class="this__box--description">
                                  <p>User: alex10319</p>
                                  <p>Ranking: #0001</p>
                                </div>
                              </div>
                            </div>
                            <div class="text-center w-full">
                              <p class="text-warning cursor-pointer underline cta__viewAllDetails">Ver todos los detalles del equipo...</p>
                            </div>
                          </div>
                        </div>

                        <div class="user__container-team--table">
                          <h4 class="mb-4">Registro de Torneos Jugados:</h4>
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
                        </div>
                      </div>
                    </template>
                  </div>
                </v-window-item>
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
							</v-window>
						</v-card>
    </div>
    
  </div>
  <Footer/>
</template>
<style lang="scss">
.zoom-in{
  transition: transform .3s ease-in-out;
  &:hover{
    transform: scale(1.01);
  }
}
.user__page--container{
  .v-field__append-inner{
    i{
      color: #fff;
    }
  }
  .v-field__field{
            color: #fff;
          }
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
      .user__container--teams{
        .title{
          text-align: center;
          font-size: 1.2em;
          margin-bottom: 15px;
        }
        .cta__see-teams--list{
          color: #fff;
          background: var(--bg-primary);
          text-transform:none;

          &:hover{
            box-shadow: 0 0 15px #fa1;
          }
        }

        .create__team--container{
          .create__team--title{
            font-size: 20px;
          }
          .create__team--form{
            border-radius: 15px;

            .cta__create--team{
              background:#222;
              border:1px solid #fff2;
              border-radius: 10px;
              font-weight: 200;
              width: 100%;
            }
          }
        }

        .user__container--team{
          display:flex;
          flex-direction: column;
          gap:15px;
          width: 100%;
          padding: 10px;
          background:#3333;
          border-radius: 10px;

          .user__container-team--header{
            display: flex;
            width: 100%;
            justify-content:space-between;
            padding: 15px;
            gap:15px;

            

            .user__container-team--header__img{
              flex:1;
              max-width: 350px;
              height:350px;
              object-fit: cover;
              background:#2224;
              border-radius: 15px;
              border:1px solid #fff1;
              overflow:hidden;
              position: relative;
              background:#111;
              box-shadow: 0 0 15px #0009;
              backdrop-filter: blur(15px);
              
              &:before{
                  content: '';
                  position:absolute;
                  width: 100px;
                  z-index: 1;
                  height: 100px;
                  background:#fa1;
                  top:-100px;
                  left: -100px;
                  box-shadow: 100px 120px 250px #fa1;
                }

              img{
                width:100%;
                height:100%;
                object-fit: cover;
              }
            }
            .user__container-team--header__description{
              flex:1;
              display: flex;
              flex-direction: column;
              gap:5px;
              text-align: initial;
              align-items: initial;
              padding: 15px;
              border-radius: 15px;
              background: #2224;
              border:1px solid #fff1;
              overflow:hidden;
              position: relative;
              background:#111;
              backdrop-filter: blur(15px);
              box-shadow: 0 0 15px #0009;
              

              &:before{
                content: '';
                position:absolute;
                width: 100px;
                z-index: 1;
                height: 100px;
                background:#fa1;
                bottom:-100px;
                right: -100px;
                box-shadow: -100px -120px 250px #fa1;
              }

              .team__title{
                font-size: 25px;
                  line-height: 35px;
                  color: var(--color-primary);
                .subtitle{
                  font-size: 17px;
                  line-height: 25px;
                  text-decoration: underline;
                  color: #fff;
                }
              }
              .team__description{
                color: #aaa;
                font-size: 18px;
                .subtitle{
                  font-size: 17px;
                  line-height: 25px;
                  text-decoration: underline;
                  color: #fff;
                }
              }
            }
          }
          .user__container-team--body{

            .cta__viewAllDetails{
              padding: 10px;
              border-radius: 15px;
              border:1px solid #fff1;
              background:#111;
              box-shadow: 0 0 15px #0009;
              margin-top: 15px;
              cursor: pointer;
              transition: transform .3s;

              &:hover{
                transform: scale(1.01);
              }
            }
            &__users{
              display: flex;
              flex-direction: column;
              gap: 10px;
              padding: 10px 20px;

              &--list{
                display: flex;
                flex-direction: row;
                gap:10px;
                flex-wrap: wrap;

                &-box{
                  flex:1;
                  min-width: 250px;
                  max-width: 350px;
                  height: 250px;
                  border-radius: 10px;
                  border:1px solid #fff1;
                  background:#111;
                  position: relative;
                  overflow:hidden;
                  box-shadow: 0 0 15px #0009;

                  img{
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                  }

                  .this__box--shadow{
                    width: 100%;
                    height: 40%;
                    bottom: -2%;
                    position: absolute;
                    z-index: 1;
                    background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(51, 51, 51, 0) 90%);
                  }

                  .this__box--description{
                    display: flex;
                    flex-direction: column;
                    gap:5px;
                    color: #fff;
                    position:absolute;
                    z-index: 2;
                    bottom:10px;
                    left:15px;
                  }
                }
              }
            }
          }

          .user__container-team--table{
            padding: 10px 20px;
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
    
  }
}
</style>