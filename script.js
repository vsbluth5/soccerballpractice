console.log("loaded!")
const scene = document.querySelector('a-scene')
console.log(scene)

const player = document.querySelector('#player')
const theball = document.querySelector('#theball')
const theNet = document.querySelector('#net')
const words = document.querySelector('#score')

player.addEventListener('collide', function(e) {
    console.log('Player has collided with body #' + e.detail.body.id);

    // e.detail.target.el; // Original entity (playerEl).
    // e.detail.body.el; // Other entity, which playerEl touched.
    // e.detail.contact; // Stats about the collision (CANNON.ContactEquation).
    // e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
});

theball.addEventListener('collide', function(e) {
    if (e.detail.body.el == theNet) {
        console.log("Ball hit the net");
        words.setAttribute('visible', "true")

    }
});
