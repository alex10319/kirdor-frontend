<script lang="ts">
    import Header from '@/components/Header.vue';

    export default{
        name: "DylanView",
        components:{
            Header
        },
        data(){
            return{
                
            }
        }
    }
</script>

<template>

    <Header/>

    <div class="contenedor-aside limited">
        <aside id="asideLeft" class="aside-tournament-container aside-left">
            <!-- Contenedor de Los Torneos -->
        </aside>
        <main id="main" class="main-center">
            <!-- Contenedor de las Tablas -->
        </main>
        <aside id="asideRight" class="aside-tournament-container aside-right">
            <button id="createTournament" class="create-tournament-btn" type="button">Crear Torneo</button>
            <div class="banner-aside-right">
                <div class="banner-aside-picture">
                    <img src="@/assets/img/games/game1.jpeg">
                </div>
                <div class="banner-aside-picture">
                    <img src="@/assets/img/games/game2.jpg">
                </div>
            </div>
        </aside>
    </div>

</template>

<style lang="scss">
    .contenedor-aside{
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: space-between;
        gap: 0.15rem;
        padding-top: 76px;
    }

    .main-center{
        width: 100%;
        padding: 0.35rem;
        background: rgba(23, 23, 23, 1.0);
    }

    .aside-tournament-container{
        height: max-content;
        width: 375px;
        background: rgba(23, 23, 23, 1.0);
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.25rem;
        padding-bottom: 0rem;
    }

    .create-tournament-btn{
        width: 100%;
        transition: background 0.25s ease-in-out;
        color: #F0F0F0 !important;
        text-shadow: 0px 0px 3px #000;
        border-radius: 6px;
        box-shadow: 0px 0px 12px rgb(0 0 0 / 60%) !important;
        cursor: pointer;
        background-position: right center;
        background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%);
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        padding: 0.45rem;
        padding-bottom: 0.3rem;
        outline: 2px solid transparent;
    }
    .create-tournament-btn:hover{
        background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  55%, #1A2980  100%);
        color: #FFFFFF !important;
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
        border-radius: 6px;
        cursor: pointer;
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
        object-fit: cover;
    }
</style>