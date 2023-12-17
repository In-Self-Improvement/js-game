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
    this.char = this.add.sprite(
      game.config.width / 2,
      game.config.height / 2,
      "char"
    );
    var frameNames = this.anims.generateFrameNumbers("char");
    this.anims.create({
      key: "walk",
      frames: frameNames,
      frameRate: 8,
      repeat: -1,
    });
    this.char.play("walk");
  }
  update() {
    this.char.x += 5;
    if (this.char.x > game.config.width) {
      this.char.x = 0;
    }
  }
}
