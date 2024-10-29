const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%-/~{[|`]}';
const longitudCaracteres = caracteres.length;
const tamanoFuente = 16;
const columnaGap = 20;
const filaGap = tamanoFuente;

export default {
  mounted() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const columnas = [];
    const cantidadColumnas = Math.floor(canvas.width / columnaGap);

    for (let i = 0; i < cantidadColumnas; i++) {
      columnas[i] = 0;
    }

    function dibujarCaracter(x, y) {
      const caracter = caracteres.charAt(Math.floor(Math.random() * longitudCaracteres));
      ctx.fillStyle = `hsl(0, 0%, ${Math.random() * 50 + 50}%)`;
      ctx.font = `${tamanoFuente}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(caracter, x, y);
    }

    function animar() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cantidadColumnas; i++) {
        const x = i * columnaGap;
        const y = columnas[i];

        dibujarCaracter(x, y);

        if (y > canvas.height || Math.random() > 0.975) {
          columnas[i] = -tamanoFuente;
        } else {
          columnas[i] += filaGap;
        }
      }

      requestAnimationFrame(animar);
    }

    animar();
  }
}