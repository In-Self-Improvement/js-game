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

    this.doWalk();
    this.text1 = this.add.text(
      game.config.width / 2,
      game.config.height / 2,
      "Hello World"
    );
    this.text1.setOrigin(0.5, 0.5);
  }
  onCompleteHandler(tween, targets, custom) {
    var char = targets[0];
    char.x = 0;
    char.y = game.config.height / 2;
    char.alpha = 1;
    this.doWalk();
  }
  doWalk() {
    this.tweens.add({
      targets: this.char,
      duration: 3000,
      x: game.config.width,
      y: 0,
      alpha: 0,
      onComplete: this.onCompleteHandler.bind(this),
    });
  }
  update() {
    this.char.x += 5;
    if (this.char.x > game.config.width) {
      this.char.x = 0;
    }
  }
}
