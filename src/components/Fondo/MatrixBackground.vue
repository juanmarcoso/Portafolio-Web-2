<template>
    <div id="matrix-background">
        <canvas id="matrix-canvas"></canvas>
        <slot />
    </div>
    <MatrixBackground>
        <div class="texto-encima">
            <!-- Texto que deseas mostrar -->
            <p>Este texto debe ser visible</p>
        </div>
    </MatrixBackground>
</template>
  
<script src="./matrix.js"></script>
  
<style scoped>

#matrix-background {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
}

#matrix-canvas {
    width: 100%;
    height: 100%;
}

.texto-encima {
  position: relative;  /*O estática*/
  z-index: 2;  /*Encima del fondo y enlaces*/
  color: #fff;  /*Ajusta color para visibilidad*/
  top: 20px;  /*Ajusta posición*/
  left: 20px;
}

svg {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 95%;
    z-index: -1;
    border-radius: 5px;
}

.links {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 18px;
    font-family: sans-serif;
    z-index: 1;
}

a {
    text-decoration: none;
    color: black;
    margin-left: 1em;
}

a:hover {
    text-decoration: underline;
}

a img.icon {
    display: inline-block;
    height: 1em;
    margin: 0 0 -0.1em 0.3em;
}

</style>