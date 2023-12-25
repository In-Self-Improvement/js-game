class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.spritesheet("char", "images/boy.png", {
      frameWidth: 120,
      frameHeight: 200,
    });
    // image
    this.load.image("face", "images/face.png");
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
      "GAME OVER",
      { fontFamily: "Anton", color: "#ff0000", fontSize: 48 }
    );
    this.text1.setOrigin(0.5, 0.5);

    //image
    this.face = this.add.image(
      game.config.width / 2,
      game.config.height / 2,
      "face"
    );
    this.face.setInteractive();
    this.face.on("pointerdown", this.onDown, this);
    this.face.on("pointerup", this.onUp, this);
  }
  onUp() {
    this.face.alpha = 1;
  }
  onDown() {
    this.face.alpha = 0.5;
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
