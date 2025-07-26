<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 imagen">
                <p class="p-4 mb-3 logo"><img src="/img/fm-fsj-logos.png"
                        class="img-fluid mx-auto d-block shadow rounded bg-white"
                        alt="Ferremobil y Ferretera San Juan logotipos">
                </p>
                <!-- Comienza carrusel con modal -->
                <!-- Carrusel -->
                <div id="galeria" class="carousel slide" data-ride="carousel" data-interval="false" data-touch="true">
                    <ol class="carousel-indicators">
                        <li data-target="#galeria" data-slide-to="0" class="active"></li>
                        <li data-target="#galeria" data-slide-to="1" v-if="images.includes('_001')"></li>
                        <li data-target="#galeria" data-slide-to="2" v-if="images.includes('_002')"></li>
                        <li data-target="#galeria" data-slide-to="3" v-if="images.includes('_003')"></li>
                        <li data-target="#galeria" data-slide-to="4" v-if="video != null"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href="#informacion" data-toggle="modal">
                                <img id="img" :src="imgPrincipal" class="d-block w-100" alt="Taladro">
                            </a>
                        </div>
                        <div class="carousel-item" v-if="images.includes('_001')">
                            <a href="#informacion" data-toggle="modal">
                                <img id="imgSec" :src="img1" class="d-block w-100" alt="Taladro">
                            </a>
                        </div>
                        <div class="carousel-item" v-if="images.includes('_002')">
                            <a href="#informacion" data-toggle="modal">
                                <img id="imgTer" :src="img2" class="d-block w-100" alt="Taladro">
                            </a>
                        </div>
                        <div class="carousel-item" v-if="images.includes('_003')">
                            <a href="#informacion" data-toggle="modal">
                                <img id="imgTer" :src="img3" class="d-block w-100" alt="Taladro">
                            </a>
                        </div>
                        <div class="carousel-item" v-if="video != null">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item"
                                    :src="'https://www.youtube.com/embed/' + video.replace('https://youtu.be/', '')"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#galeria" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#galeria" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Siguiente</span>
                    </a>
                </div>
                <!-- Modal -->
                <div class="modal fade" tabindex="-1" id="informacion">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="titulo">{{ descripcion }}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div id="galeriaModal" class="carousel slide" data-ride="carousel"
                                                data-interval="false" data-touch="true">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#galeriaModal" data-slide-to="0" class="active"></li>
                                                    <li data-target="#galeriaModal" data-slide-to="1"
                                                        v-if="images.includes('_001')"></li>
                                                    <li data-target="#galeriaModal" data-slide-to="2"
                                                        v-if="images.includes('_002')"></li>
                                                    <li data-target="#galeriaModal" data-slide-to="3"
                                                        v-if="images.includes('_003')"></li>
                                                    <li data-target="#galeriaModal" data-slide-to="4" v-if="video != null">
                                                    </li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active img-hover">
                                                            <inner-image-zoom :src="imgPrincipal" moveType="drag" :fullscreenOnMobile="true" :hideCloseButton="true" />
                                                    </div>
                                                    <div class="carousel-item" v-if="images.includes('_001')">
                                                        <inner-image-zoom :src="img1" moveType="drag" :fullscreenOnMobile="true" :hideCloseButton="true" />
                                                    </div>
                                                    <div class="carousel-item" v-if="images.includes('_002')">
                                                        <inner-image-zoom :src="img2" moveType="drag" :fullscreenOnMobile="true" :hideCloseButton="true" />
                                                    </div>
                                                    <div class="carousel-item" v-if="images.includes('_003')">
                                                        <inner-image-zoom :src="img3" moveType="drag" :fullscreenOnMobile="true" :hideCloseButton="true" />
                                                    </div>
                                                    <div class="carousel-item" v-if="video != null">
                                                        <div class="embed-responsive embed-responsive-16by9">
                                                            <iframe class="embed-responsive-item"
                                                                :src="'https://www.youtube.com/embed/' + video.replace('https://youtu.be/', '')"
                                                                allowfullscreen></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#galeriaModal" role="button"
                                                    data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Anterior</span>
                                                </a>
                                                <a class="carousel-control-next" href="#galeriaModal" role="button"
                                                    data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Siguiente</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div>
                                                <h5>Descripción</h5>
                                                <p id="descripcion">{{ descripcion }}</p>
                                                <!--<p>REVERSIBLE 0-1100 RPM.</p>-->
                                                <ul class="list-unstyled bg-danger text-white shadow p-3">
                                                    <li>CLAVE <b id="clave">{{ claveVue }}</b></li>
                                                    <li>LINEA <b id="linea">{{ linea }}</b></li>
                                                    <li>ALIAS <b id="alias">{{ alias }}</b></li>
                                                    <li>CLVPROV <b id="claveprov">{{ clvprov }}</b></li>
                                                    <li>CODIGO DE BARRAS<b id="codigoBarras">{{ codbar }}</b></li>
                                                    <li>Stock <b id="stock">{{ stock }}</b></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <h5 class="mt-md-5">Especificaciones</h5>
                                            <table class="table table-borderless table-striped table-hover table-sm mt-3">
                                                <tbody>
                                                    <tr v-for="feature in features" :key="feature.nombre_caracteristica">
                                                        <td>{{ feature.nombre_caracteristica }}</td>
                                                        <td>{{ feature.valor_caracteristica }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Termina carrusel con modal -->
            </div><!-- Cierra div de columna -->
            <div class="col-md-7 p-0">
                <h4 class="text-danger mt-3"><i class="fas fa-shopping-basket"></i> Lista de compra</h4>
                <p class="datos">
                    <span class="text-secondary"><i class="fas fa-user"></i> Le atiende:</span> <span id="vendedor"></span>
                    <br><span class="text-secondary"><i class="fas fa-calendar"></i> Fecha:</span> <span id="fecha"></span>
                </p>
                <div class="contenedor overflow-auto">
                    <table class="table table-sm table-striped mb-0">
                        <thead class="thead-dark">
                            <tr class="sticky-top">
                                <th scope="col">Descripción</th>
                                <th scope="col">Codigo</th>
                                <th scope="col">CANT.</th>
                                <th scope="col">Uni.</th>
                                <th scope="col">Base</th>
                            </tr>
                        </thead>
                        <tbody id="tabla">
                            <tr class="producto" style="height: 70px;" v-for="item in xmlItems" :key="item.CLAVE[0]"
                                v-on:click="updateProduct(item)">
                                <td class="d-flex justify-content-between">
                                    {{ item._ }} <i class="fa-solid fa-hand-pointer fa-beat fa-2xl text-danger"></i>
                                </td>
                                <td>{{ item.CLAVE[0] }}</td>
                                <td>{{ item.CANTIDAD[0] }}</td>
                                <td>{{ item.UNIDAD[0] }}</td>
                                <td>$ {{ ((item.IMPORTE[0] - item.DESCUENTO[0]) * ("1." + item.TASA_CUOTA[0])).toFixed(2) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="text-right pt-3 pr-3 m-0 h3"><span class="text-secondary">Total:</span> <span id="total"></span>
                </p>
                <div id="ComFocus"></div>
            </div>
        </div>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';
import axios from 'axios';
import io from 'socket.io-client';
export default {

    components: {
        'inner-image-zoom': InnerImageZoom
    },

    data() {
        return {
            xmlItems: [],
            name: null,
            claveVue: null,
            linea: null,
            alias: null,
            clvprov: null,
            codbar: null,
            stock: null,
            descripcion: null,
            video: null,
            images: [],
            imgPrincipal: null,
            img1: null,
            img2: null,
            img3: null,
            img4: null,
            features: [],
            xmlAPI: null,
            socket: io(`${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_PORT}`, { transports: ['websocket'] })
        };
    },

    mounted() {
        this.name = this.$route.params.name;
        var xmlhttp;

        this.socket.emit('data', this.name);

        this.socket.on('xmlChange', (data) => {
            console.log(data);
            xmlhttp = new XMLHttpRequest();
            axios.get(`http://${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_PORT}/api/xml/` + this.name).then(res => {
                this.LoadXML(res.data.xml);
            }).catch(err => {
                console.log(err);
            });
        });

        xmlhttp = new XMLHttpRequest();
        axios.get(`http://${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_PORT}/api/xml/` + this.name).then(res => {
            this.LoadXML(res.data.xml);
        }).catch(err => {
            console.log(err);
        });

    },
    methods: {
        updateProduct(product) {
            axios.get(`http://${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_PORT}/api/article/` + product.CLAVE[0]).then(res => {
                this.linea = res.data.article.linea_producto;
                this.alias = res.data.article.alias_producto;
                this.clvprov = res.data.article.clvprov_producto;
                this.codbar = res.data.article.codigo_barras_producto;
                this.stock = res.data.article.stock_producto;
                this.descripcion = res.data.article.descripcion_producto;
                this.modalFeatures(res.data.article.id_producto);
                this.Video(res.data.article.id_producto);
            });

            this.imagen(product.IMAGEN[0]);
        },

        LoadXML(xml) {
            var productos, i, xmlDoc;
            this.xmlAPI = xml;
            xmlDoc = JSON.parse(xml);
            this.xmlItems = JSON.parse(xml).CHARACTER.PRODUCTOS;

            var xmlObj = xmlDoc.CHARACTER;
            productos = xmlObj.PRODUCTOS;
            document.getElementById("fecha").innerHTML = xmlObj.DOCUMENTO[0].FECHA[0];
            document.getElementById("total").innerHTML = xmlObj.TOTAL[0]._;
            document.getElementById("vendedor").innerHTML = xmlObj.VENDEDOR[0];

            let imagenArchivo = this.xmlItems[this.xmlItems.length - 1].IMAGEN[0].trim();
            this.claveVue = this.xmlItems[this.xmlItems.length - 1].CLAVE[0].trim();
            let clave = this.claveVue;

            axios.get(`http://${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_PORT}/api/article/` + clave).then(res => {
                this.linea = res.data.article.linea_producto;
                this.alias = res.data.article.alias_producto;
                this.clvprov = res.data.article.clvprov_producto;
                this.codbar = res.data.article.codigo_barras_producto;
                this.stock = res.data.article.stock_producto;
                this.descripcion = res.data.article.descripcion_producto;
                this.modalFeatures(res.data.article.id_producto);
                this.Video(res.data.article.id_producto);
            });



            this.imagen(imagenArchivo);
        },

        imagen(clave) {

            axios.get(`http://${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_PORT}/api/image/` + clave).then(res => {
                this.images = res.data.images;
                this.imgPrincipal = `${import.meta.env.VITE_IMG_URL}` + clave.trim().toUpperCase() + '.jpg.webp'
                if (this.images.includes('_001')) {
                    this.img1 = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_001/' + clave.trim().toUpperCase() + '_001.jpg.webp';
                }
                if (this.images.includes('_002')) {
                    this.img2 = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_002/' + clave.trim().toUpperCase() + '_002.jpg.webp';
                }
                if (this.images.includes('_003')) {
                    this.img3 = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_003/' + clave.trim().toUpperCase() + '_003.jpg.webp';
                }
                if (this.images.includes('_004')) {
                    this.img4 = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_004/' + clave.trim().toUpperCase() + '_004.jpg.webp';
                }
            });

            $('.carousel').carousel(0);
        },

        modalFeatures(id) {
            axios.get(`http://${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_PORT}/api/features/` + id).then(res => {
                this.features = res.data.features;
            });
        },

        Video(id) {
            axios.get(`http://${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_PORT}/api/video/` + id)
                .then(res => {
                    this.video = res.data.video;
                })
                .catch(err => {
                    // Handle error
                    this.video = null;
                    //console.log(err.response.data);
                });
        },
    },
}
</script>
