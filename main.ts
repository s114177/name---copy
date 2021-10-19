function doSomething (num: number) {
    picture = image.create(100, 100)
    picture.fill(3)
    picture.drawRect(50, 50, 50, 50, 0)
    picture = sprites.create(picture, SpriteKind.Player)
}
let picture: Image = null
scene.setBackgroundColor(3)
doSomething(100)
