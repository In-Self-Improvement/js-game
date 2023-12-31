class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.image("road", "images/road.jpg");
    this.load.image("cars", "images/cars.png", {
      frameWidth: 60,
      frameHeight: 126,
    });
  }
  create() {
    var road = new Road({ scene: this });
    road.x = game.config.width / 2;
  }
  update() {}
}
