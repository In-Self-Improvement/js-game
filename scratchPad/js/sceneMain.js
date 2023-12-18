class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.spritesheet("char", "images/boy.png", {
      frameWidth: 120,
      frameHeight: 200,
    });
  }
  create() {
    this.char = this.add.sprite(0, game.config.height / 2, "char");
    var frameNames = this.anims.generateFrameNumbers("char");
    this.anims.create({
      key: "walk",
      frames: frameNames,
      frameRate: 8,
      repeat: -1,
    });
    this.char.play("walk");

    this.tweens.add({
      targets: this.char,
      duration: 5000,
      x: game.config.width,
      y: 0,
      alpha: 0,
    });
  }
  update() {
    this.char.x += 5;
    if (this.char.x > game.config.width) {
      this.char.x = 0;
    }
  }
}
