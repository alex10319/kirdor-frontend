<template>
    <div class="card">
        <img :src="imagen" class="card-img">
        <div class="card-description">
            <h3>{{ titulo }}</h3>
            <p>{{ descripcion }}</p>    
        </div>
    </div>
</template>
<script>
    export default{
        name: 'Card',
        props: {
            title: String,
            description: String,
            img: String
        },
        data(){
            return{
                titulo: this.title,
                descripcion: this.description,
                imagen: this.img
            }
        }
    }
</script>
<style scoped>
.card{
            border-radius: 20px;
            min-width: 250px;
            transition: all .3s;
            display: flex;
            gap:10px;
            overflow:hidden;
            cursor: pointer;
        }
        .card:hover{
            transform: scale(1.02);
        }
        .card-img{
            flex:.3;
            min-height: 120px;
            max-height: 150px;
            max-width: 160px;
            border-radius: 10px;
            object-fit: cover;
        }
        .card-description{
            padding: 10px;
        }
        </style>