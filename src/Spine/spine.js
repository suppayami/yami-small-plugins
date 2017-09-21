import loader from './loader'

const newSpine = (spineName) => {
    let data = loader.loadSkeleton(spineName)
    let spine = new PIXI.spine.Spine(data)
    let setup = ysp.Spine.SETUP[spineName]

    spine.update = function (dt) {
        // hax: Container shouldn't call this without dt
        if (dt) {
            PIXI.spine.Spine.prototype.update.call(this, dt)
        }
    }

    if (setup.initAnimation.autoplay) {
        spine.state.setAnimation(0, setup.initAnimation.name, setup.initAnimation.loop)
    }
    spine.skeleton.setSkinByName(setup.skin)

    return spine
}

const playAnimation = (spine, animationName, loop) => {
    spine.state.setAnimation(0, animationName, loop)
}

const setSkinByName = (spine, skinName) => {
    spine.skeleton.setSkinByName(skinName)
}

export default {
    newSpine,
    playAnimation,
    setSkinByName,
}