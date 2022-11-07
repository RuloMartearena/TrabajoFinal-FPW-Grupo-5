import Phaser from 'phaser';
import { useState, useEffect } from 'react';
import Escena from './scenes/Escena';

function Dude() {

  const [listo, setListo] = useState(false);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }, // cambia la gravedad en el eje x e y
          debug: false
        }
      },
      scene: [Escena]
    };

    // Arranca el juego 
    // A la variable game se le asigna un nuevo objeto de tipo phaser
    var game = new Phaser.Game(config);

    game.events.on("LISTO", setListo);

    return () => {
      setListo(false);
      game.destroy(true);
    }
  }, [listo]);
}

export default Dude;