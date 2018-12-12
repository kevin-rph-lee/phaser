class Example3 extends Phaser.Scene{
  constructor(){
    super({key:'Example3'});
  }
  preload(){
    this.load.audio('test', ['/assets/music.mp3'])
  }

  create(){
    this.soundFX = this.sound.add('test', {loop: 'true'})
    this.soundFX.play();
  }
}
