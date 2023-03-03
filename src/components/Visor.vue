<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 imagen">
                <p class="p-4 mb-3 logo"><img src="/img/fm-fsj-logos.png"
                        class="img-fluid mx-auto d-block shadow rounded bg-white"
                        alt="Ferremobil y Ferretera San Juan logotipos">
                </p>
                <!--
            			<p class="m-0"><img id="img" src="http://192.168.0.250/20TIN0.jpeg" class="img-fluid mx-auto d-block rounded"></p>
            -->
                <!-- Comienza carrusel con modal -->
                <!-- Carrusel -->
                <div id="galeria" class="carousel slide" data-ride="carousel" data-interval="false" data-touch="true">
                    <ol class="carousel-indicators">
                        <li data-target="#galeria" data-slide-to="0" class="active"></li>
                        <li data-target="#galeria" data-slide-to="1"></li>
                        <li data-target="#galeria" data-slide-to="2"></li>
                        <li data-target="#galeria" data-slide-to="3" v-if="video != null"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href="#informacion" data-toggle="modal"><img id="img" src="/img/23TAL011.jpg"
                                    class="d-block w-100" alt="Taladro"></a>
                        </div>
                        <div class="carousel-item">
                            <img id="imgSec" src="/img/23TAL011_001.jpg" class="d-block w-100" alt="Taladro">
                        </div>
                        <div class="carousel-item">
                            <img id="imgTer" src="/img/23TAL011_003.jpg" class="d-block w-100" alt="Taladro">
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
                                                    <li data-target="#galeriaModal" data-slide-to="1"></li>
                                                    <li data-target="#galeriaModal" data-slide-to="2"></li>
                                                    <li data-target="#galeriaModal" data-slide-to="3" v-if="video != null">
                                                    </li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img id="imgModal" src="/img/23TAL011.jpg" class="d-block w-100"
                                                            alt="Taladro">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img id="imgSecModal" src="/img/23TAL011_001.jpg"
                                                            class="d-block w-100" alt="Taladro">
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img id="imgTerModal" src="/img/23TAL011_003.jpg"
                                                            class="d-block w-100" alt="Taladro">
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
                    <span class="text-secondary"><i class="fas fa-user"></i> Nombre:</span> <span id="vendedor"></span>
                    <br><span class="text-secondary"><i class="fas fa-calendar"></i> Fecha:</span> <span id="fecha"></span>
                </p>
                <div class="contenedor overflow-auto">
                    <table class="table table-sm table-striped mb-0">
                        <thead class="thead-dark">
                            <tr class="sticky-top">
                                <th scope="col">Descripción</th>
                                <th scope="col">Cod. fabricante</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Unidad</th>
                                <th scope="col">Base</th>
                            </tr>
                        </thead>
                        <tbody id="tabla">
                            <tr class="producto" style="height: 50px;" v-for="item in xmlItems" :key="item.CLAVE[0]"
                                v-on:click="updateProduct(item)">
                                <td>{{ item._ }}</td>
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
import axios from 'axios';
import io from 'socket.io-client';
export default {

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

            this.imagen2(product.IMAGEN[0]);
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



            this.imagen2(imagenArchivo);
        },

        imagen2(clave) {
            axios.get(`http://${import.meta.env.VITE_API_IP}:${import.meta.env.VITE_PORT}/api/image/` + clave).then(res => {
                console.log(res.data);
            });
            var imgTmp = `${import.meta.env.VITE_IMG_URL}` + clave.trim().toUpperCase();
            if ((document.getElementById("img").src != imgTmp + '.jpg') && (document.getElementById("img").src != imgTmp + '.jpeg')) {
                var image_url = document.getElementById("img").src = `${import.meta.env.VITE_IMG_URL}` + clave.trim().toUpperCase() + '.jpg';
                if (this.imageExists(image_url) != false) {
                    document.getElementById("img").src = `${import.meta.env.VITE_IMG_URL}` + clave.trim().toUpperCase() + '.jpg';
                    document.getElementById("imgModal").src = `${import.meta.env.VITE_IMG_URL}` + clave.trim().toUpperCase() + '.jpg';
                } else {
                    document.getElementById("img").src = `http://${import.meta.env.VITE_SERVER_IP}/` + clave.trim().toUpperCase() + '.jpeg';
                    document.getElementById("imgModal").src = `http://${import.meta.env.VITE_SERVER_IP}/` + clave.trim().toUpperCase() + '.jpeg';
                }
                document.getElementById("imgSec").src = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_001/' + clave.trim().toUpperCase() + '_001.jpg';
                document.getElementById("imgSecModal").src = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_001/' + clave.trim().toUpperCase() + '_001.jpg';
                document.getElementById("imgTer").src = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_002/' + clave.trim().toUpperCase() + '_002.jpg';
                document.getElementById("imgTerModal").src = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_002/' + clave.trim().toUpperCase() + '_002.jpg';

                $('.carousel').carousel(0);
            }
        },

        changeImages() {
            console.log('hola');
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

        imagen(clave) {
            //var imgTmp = `${import.meta.env.VITE_IMG_URL}` + clave.trim().toLowerCase();
            var imgTmp = `${import.meta.env.VITE_IMG_URL}` + clave.trim().toUpperCase();
            if ((document.getElementById("img").src != imgTmp + '.jpg') && (document.getElementById("img").src != imgTmp + '.jpeg')) {
                var image_url = document.getElementById("img").src = 'http://localhost/xml/images/' + clave.trim().toUpperCase() + '.jpg';
                console.log(this.imageExists(image_url));
                if (this.imageExists(image_url) != false) {
                    document.getElementById("img").src = 'http://localhost/xml/images/' + clave.trim().toUpperCase() + '.jpg';
                    document.getElementById("imgModal").src = 'http://localhost/xml/images/' + clave.trim().toUpperCase() + '.jpg';
                } else {
                    document.getElementById("img").src = `http://${import.meta.env.VITE_SERVER_IP}/` + clave.trim().toUpperCase() + '.jpeg';
                    document.getElementById("imgModal").src = `http://${import.meta.env.VITE_SERVER_IP}/` + clave.trim().toUpperCase() + '.jpeg';
                }
                document.getElementById("imgSec").src = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_001/' + clave.trim().toUpperCase() + '_001.jpg';
                document.getElementById("imgSecModal").src = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_001/' + clave.trim().toUpperCase() + '_001.jpg';
                document.getElementById("imgTer").src = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_002/' + clave.trim().toUpperCase() + '_002.jpg';
                document.getElementById("imgTerModal").src = `${import.meta.env.VITE_IMG_SECUNDARIA_URL}` + '_002/' + clave.trim().toUpperCase() + '_002.jpg';
            }
        },

        imageExists(image_url) {

            var http = new XMLHttpRequest();

            http.open('GET', image_url, true);
            http.send();

            return http.status != 404;
        }
    },
}
</script>
