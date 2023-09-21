<template>
  <Header/>
  <main id="main">
    <div class="main-view">
      <div class="main-bg">
        <img src="@/assets/img/bg7.avif">
      </div>
      <div class="main-view-container intro-y">
        <div class="main-item-with-bg">
          <img src="@/assets/logo.png" style="width:150px;object-fit: contain;" alt="Golden Cup Kirdor Logo">
          <br>
          <div class="flex">
            <h1 class="main-title-special mr-4" style="letter-spacing: 0px;text-transform: none;"><i>KIRDOR</i></h1>
            <h1 class="main-title-special" style="letter-spacing: 0px;text-transform: none;"><i>eSPORTS</i></h1>
          </div>
          <ul class="main-title">
            <li><p class="main-title-special" style="line-height: 22px;font-size:1.3em;font-weight:700;color:#fff;margin-bottom:5px;">La Plataforma de torneos para los videojuegos que estabas esperando</p></li>
            <li><span class="title-arrow-right"></span><p>Crea, clasifica y avanza hacia la victoria</p></li>
            <br>
          </ul>
          <div class="cta-content">
            <a class="cta-join">
              Únete Ahora
            </a>
            <a class="cta-tournament">
              Ver Torneos
            </a>
          </div>
        </div>
      </div>

      
      <div class="games-container"> 
          <h2 class="games-title">LISTADO DE JUEGOS</h2> 
          <div class="games-slider">
            <i class="ri-arrow-left-s-line games-arrow arrow-left glider-prev"></i>
            <i class="ri-arrow-right-s-line games-arrow arrow-right glider-next"></i>
            <div class="games-cont intro-y glider">
              <div class="game">
                <img src="@/assets/img/games/pokemon.jpg">
                <p class="game-text">Pokemón GO</p>
              </div>
              <div class="game">
                <img src="@/assets/img/games/freefire.avif">
                <p class="game-text">Free Fire</p>
              </div>
              <div class="game">
                <img src="@/assets/img/games/codmobile.webp">
                <p class="game-text">Call Of Duty Mobile</p>
              </div>
              <div class="game">
                <img src="@/assets/img/games/codwarzone.jpg">
                <p class="game-text">Call Of Duty Warzone</p>
              </div>
              <div class="game">
                <img src="@/assets/img/games/csgo.jpg">
                <p class="game-text">Counter Strike Global Offensive</p>
              </div>
              <div class="game">
                <img src="@/assets/img/games/valorant.jpg">
                <p class="game-text">Valorant</p>
              </div>
              <div class="game">
                <img src="@/assets/img/games/pes.jpg">
                <p class="game-text">PES/eFootball</p>
              </div>
              <div class="game">
                <img src="@/assets/img/games/ea.png">
                <p class="game-text">EA Sports FC (FIFA)</p>
              </div>
              <div class="game">
                <img src="@/assets/img/games/yugioh.webp">
                <p class="game-text">YU GI OH </p>
              </div>
            </div>
          </div>
        </div>
    </div>

    
      

      <div class="about--container">
        <div class="about--bg">
          <img src="@/assets/img/drake.jpg">
        </div>
        <div class="about-items-container limited">
          <div class="about--item">
            <i class="ri-arrow-left-s-line games-arrow arrow-left games-arrow-left"></i>
            <i class="ri-arrow-right-s-line games-arrow arrow-right games-arrow-right"></i>
            <div class="about-slider" style="width:60%;">
              <div class="about-slider_item" style="position:relative;display:flex;justify-content:center;" v-for="(character,index) of characteres" :key="index">
                <img :src="character.img" class="about-item-character">
                <div class="about-item-menu">
                  <span class="about-item-title">{{ character.title }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="about--item">
            <div class="about_item--body">
              <h2 class="about-item-body--title">Kirdor: La plataforma líder para torneos eSports y competiciones en línea</h2>
              <h3 class="text-2xl mt-5 mb-4">Kirdor permíte a los usuarios crear y personalizar torneos según sus preferencias.</h3>
              <div class="about-item-body-separator"></div>
              <div class="about-item-item">
                <img src="@/assets/img/trofeo.png" style="width:30px;height:30px;object-fit:cover;">
                <div>
                  <h4>Sistema de Torneos Personalizados:</h4>
                  <p class="mt-2">Desde llaves clasificatorias hasta torneos en fase de grupos y tablas de<br>posiciones, nuestra plataforma versátil se adapta a cualquier formato de competición.</p>
                </div>
              </div>
              <div class="about-item-item" style="margin-top:40px;">
                <img src="@/assets/img/comunidad.png" style="width:30px;height:30px;object-fit:cover;">
                <div>
                  <h4>Comunidades y Seguidores:</h4>
                  <p class="mt-2">Kirdor fomenta la formación de comunidades sólidas y brinda<br>herramientas para interactuar con seguidores.</p>
                </div>
              </div>
              <div class="about-item-item" style="margin-top:40px;">
                <img src="@/assets/img/trofeo2.png" style="width:30px;height:30px;object-fit:cover;">
                <div>
                  <h4>Ranking Internacional de Jugadores:</h4>
                  <p class="mt-2">Los jugadores pueden medir su habilidad y progreso mediante nuestro<br>completo sistema de clasificación.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cards-container">
        <div class="cards-bg-container">
          <img src="@/assets/background-register.png" alt="">
        </div>
        <div class="cards-max-container">
          <h4 class="cards-title">Aquí el título de las tarjetas</h4>
          <p class="cards-subtitle">Pequeña descripción acerca de esta sección y su contenido, detallando un poco más</p>
          <br>
          <br>
          <!-- <div class="card-paragraph-box">
            <div class="card-child-paragraph">
              <img src="@/assets/icono-8.png" alt="a plant of mario bros the game">
              <div class="card-cont-text">
                <p class="cards-paragraph-3">Contenido pequeño con título</p>
                <p class="cards-paragraph-4">Contenido pequeño con descripción y un icono de un videojuego bastante interesante.</p>
              </div>
            </div>
            <div class="card-child-paragraph">
              <img src="@/assets/icono-9.png" alt="a nintendo console of videogame">
              <div class="card-cont-text">
                <p class="cards-paragraph-3">Contenido pequeño con título</p>
                <p class="cards-paragraph-4">Contenido pequeño con descripción y un icono de un videojuego bastante interesante.</p>
              </div>
            </div>
            <div class="card-child-paragraph">
              <img src="@/assets/icono-10.png" alt="a joystick of videogames">
              <div class="card-cont-text">
                <p class="cards-paragraph-3">Contenido pequeño con título</p>
                <p class="cards-paragraph-4">Contenido pequeño con descripción y un icono de un videojuego bastante interesante.</p>
              </div>
            </div>
            <div class="card-child-paragraph">
              <img src="@/assets/icono-11.png" alt="a joystick of videogames">
              <div class="card-cont-text">
                <p class="cards-paragraph-3">Contenido pequeño con título</p>
                <p class="cards-paragraph-4">Contenido pequeño con descripción y un icono de un videojuego bastante interesante.</p>
              </div>
            </div>
          </div> -->
          <div class="cards-design">
            <div class="card-max">
              <div class="card-box">
                <div class="card-box-image">
                  <img src="@/assets/img/games/codwarzone.jpg" alt="a videogame picture">
                </div>
                <div class="card-box-description">
                  <div class="card-box-content-title">
                    <h4 class="card-box-title">Título de La Tarjeta</h4>
                    <h5 class="card-box-subtitle">Subtítulo de La Tarjeta</h5>
                  </div>
                  <img src="@/assets/icono.png" alt="" class="card-description-icon">
                  <p class="card-box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus voluptatem, esse nam veritatis sint laudantium iure unde perferendis vero accusantium inventore, nulla totam ea asperiores quisquam estas.</p>
                </div>
              </div>
            </div>
            <div class="card-max">
              <div class="card-box">
                <div class="card-box-image">
                  <img src="@/assets/img/games/pokemon.jpg" alt="a videogame picture">
                </div>
                <div class="card-box-description">
                  <div class="card-box-content-title">
                    <h4 class="card-box-title">Título de La Tarjeta</h4>
                    <h5 class="card-box-subtitle">Subtítulo de La Tarjeta</h5>
                  </div>
                  <img src="@/assets/icono-7.png" alt="" class="card-description-icon card-box-image-pokemon">
                  <p class="card-box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus voluptatem, esse nam veritatis sint laudantium iure unde perferendis vero accusantium inventore, nulla totam ea asperiores quisquam estas.</p>
                </div>
              </div>
            </div>
            <div class="card-max">
              <div class="card-box">
                <div class="card-box-image">
                  <img src="@/assets/img/games/codmobile.webp" alt="a videogame picture">
                </div>
                <div class="card-box-description">
                  <div class="card-box-content-title">
                    <h4 class="card-box-title">Título de La Tarjeta</h4>
                    <h5 class="card-box-subtitle">Subtítulo de La Tarjeta</h5>
                  </div>
                  <img src="@/assets/icono.png" alt="" class="card-description-icon">
                  <p class="card-box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus voluptatem, esse nam veritatis sint laudantium iure unde perferendis vero accusantium inventore, nulla totam ea asperiores quisquam estas.</p>
                </div>
              </div>
            </div>
            <div class="card-max">
              <div class="card-box">
                <div class="card-box-image">
                  <img src="@/assets/img/games/yugioh.webp" alt="a videogame picture">
                </div>
                <div class="card-box-description">
                  <div class="card-box-content-title">
                    <h4 class="card-box-title">Título de La Tarjeta</h4>
                    <h5 class="card-box-subtitle">Subtítulo de La Tarjeta</h5>
                  </div>
                  <img src="@/assets/icono-7.png" alt="" class="card-description-icon card-box-image-pokemon">
                  <p class="card-box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus delectus voluptatem, esse nam veritatis sint laudantium iure unde perferendis vero accusantium inventore, nulla totam ea asperiores quisquam estas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="end-page-footer">
        <div class="end-page-footer-container">
          <div class="footer-side footer-side-1">
            <div class="footer-logo-container">
              <img src="@/assets/logo.png" alt="">
            </div>
            <div class="footer-spacer"></div>
            <div class="footer-description">
              <p class="footer-description-p"><i class="footer-icon ri-chat-smile-2-line"></i> soporte@kirdor-company.com</p>
              <p class="footer-description-p"><i class="footer-icon ri-corner-down-right-line"></i> Seguridad y Protección</p>
              <p class="footer-description-p"><i class="footer-icon ri-question-answer-line"></i> Asistencia en Tiempo Real</p>
            </div>
            <div class="footer-spacer"></div>
            <div class="footer-menu">
              <li class="nav-li" @click="this.$router.push('/')"><p>Inicio</p></li>
              <li class="nav-li"><p>Comunidad</p></li>
              <li class="nav-li"><p>Torneos</p></li>
              <li class="nav-li"><p>Acerca de</p></li>
              <li class="nav-li"><p>Soporte</p></li>
            </div>
          </div>
          <div class="footer-side footer-side-2">Todos los derechos reservados kirdor esports 2023-2030</div>
        </div>
      </div>
      </div>
  </main>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Glider from 'glider-js';
export default {
  name: 'HomeView',
  components: {
    Header
  },
  data(){
    return {
      gliderInstance: null,
      gliderInstance2: null,
      characteres: [
        {
          title: 'Valorant',
          img: 'src/assets/img/characteres/lol.webp'
        },
        {
          title: 'Call Of Duty Mobile',
          img: 'src/assets/img/characteres/callofduty2.png'
        },
        {
          title: 'Pokemon GO',
          img: 'src/assets/img/characteres/pokemon2.png'
        },
        {
          title: 'Free Fire',
          img: 'src/assets/img/characteres/freefire.png'
        },
        {
          title: 'Yu Gi Oh',
          img: 'src/assets/img/characteres/yu-gi-oh.webp'
        },
        {
          title: 'Call Of Duty Warzone',
          img: 'src/assets/img/characteres/codwarzone.png'
        },
        {
          title: 'CS Global Offensive',
          img: 'src/assets/img/characteres/csgo.png'
        },
        {
          title: 'Ea Sports FC',
          img: 'src/assets/img/characteres/pes2.png'
        },
        {
          title: 'PES/eFootball',
          img: 'src/assets/img/characteres/fifa.png'
        }
      ]
    }
  },
  mounted() {
      if (this.gliderInstance) {
        this.gliderInstance.destroy(); // Destroy the Glider instance
        this.gliderInstance = null; // Reset the reference
      }
    this.createGlider(); // Create the Glider when the component mounts

    this.sliderAuto(this.gliderInstance, 5000,4)
    this.sliderAuto(this.gliderInstance2, 5000,1)
  },
  beforeDestroy() {
      if (this.gliderInstance) {
        this.gliderInstance.destroy();
        this.gliderInstance = null;
        this.gliderInstance2.destroy();
        this.gliderInstance2 = null;
      }
    this.destroyGlider(); // Destroy the Glider before the component is destroyed
  },
  beforeRouteUpdate(to, from, next) {
      if (this.gliderInstance) {
        this.gliderInstance.destroy(); // Destroy the Glider instance
        this.gliderInstance = null; // Reset the reference
        this.gliderInstance2.destroy();
        this.gliderInstance2 = null;
      }
    this.destroyGlider(); // Destroy the Glider before the route is updated
    next(); // Continue with the route update
  },
  updated() {
      if (this.gliderInstance) {
        this.gliderInstance.destroy(); // Destroy the Glider instance
        this.gliderInstance = null; // Reset the reference
        this.gliderInstance2.destroy();
        this.gliderInstance2 = null;
      }
    this.createGlider(); // Create the Glider after the route is updated
  },
  methods: {
    createGlider() {
      if (this.gliderInstance) {
        this.gliderInstance.destroy(); // Destroy the Glider instance
        this.gliderInstance = null; // Reset the reference
        this.gliderInstance2.destroy();
        this.gliderInstance2 = null;
      }
      this.gliderInstance = new Glider(document.querySelector('.glider'), {
        slidesToShow: 4.5,
        slidesToScroll: 4.5,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
      this.gliderInstance2 = new Glider(document.querySelector('.about-slider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        autoplay: {
          delay: 500, // Set the delay between slide transitions (in milliseconds)
          disableOnInteraction: false
        },
        arrows: {
          prev: '.games-arrow-left',
          next: '.games-arrow-right'
        }
      });
    },
    sliderAuto(slider, miliseconds,index) {
      const slidesCount = slider.track.childElementCount;
      let slideTimeout = null;
      let nextIndex = index;

      function slide () {
        slideTimeout = setTimeout(
          function () {
            if (nextIndex >= slidesCount ) {
              nextIndex = 0;
            }
            slider.scrollItem(nextIndex++);
          },
          miliseconds
        );
      }

      slider.ele.addEventListener('glider-animated', function() {
        window.clearInterval(slideTimeout);
        slide();
      });

      slide();
    },
    destroyGlider() {
      if (this.gliderInstance) {
        this.gliderInstance.destroy(); // Destroy the Glider instance
        this.gliderInstance = null; // Reset the reference
        this.gliderInstance2.destroy();
        this.gliderInstance2 = null;
      }
    }
  }
}
</script>
