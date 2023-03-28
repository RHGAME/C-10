var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var squariad= createSprite(200, 200, 20, 20);
var pino1= createSprite(200, 300, 20, 20);
var pino2= createSprite(180, 320, 20, 20);
var pino3= createSprite(220, 320, 20, 20);
var pino4= createSprite(160, 340, 20, 20);
var pino5= createSprite(200, 340, 20, 20);
var pino6= createSprite(240, 340, 20, 20);


squariad.shapeColor = 'whith'
pino1.shapeColor = 'yellow'
pino2.shapeColor = 'blue'
pino3.shapeColor = 'red'
pino4.shapeColor = 'purple'
pino5.shapeColor = 'orange'
pino6.shapeColor = 'pink'


createEdgeSprites();

squariad.velocityX=4
squariad.velocityY=0.5

function draw() {
background(" green");

squariad.bounceOff(edges);
pino1.bounceOff(edges);
pino2.bounceOff(edges);
pino3.bounceOff(edges);
pino4.bounceOff(edges);
pino5.bounceOff(edges);
pino6.bounceOff(edges);

squariad.bounce(pino1) 
squariad.bounce(pino2) 
squariad.bounce(pino3)
squariad.bounce(pino4) 
squariad.bounce(pino5)
squariad.bounce(pino6)

pino1.bounce(squariad)
pino1.bounce(pino2) 
pino1.bounce(pino3)
pino1.bounce(pino4) 
pino1.bounce(pino5) 
pino1.bounce(pino6)

pino2.bounce(squariad) 
pino2.bounce(pino1) 
pino2.bounce(pino3) 
pino2.bounce(pino4) 
pino2.bounce(pino5) 
pino2.bounce(pino6) 

pino3.bounce(squariad) 
pino3.bounce(pino1) 
pino3.bounce(pino2)
pino3.bounce(pino3) 
pino3.bounce(pino4) 
pino3.bounce(pino5) 
pino3.bounce(pino6)

pino4.bounce(squariad) 
pino4.bounce(pino1)
pino4.bounce(pino2)
pino4.bounce(pino3)
pino4.bounce(pino5)
pino4.bounce(pino6)

pino5.bounce(squariad)
pino5.bounce(pino1)
pino5.bounce(pino2)
pino5.bounce(pino3)
pino5.bounce(pino4)
pino5.bounce(pino6)

pino6.bounce(squariad)
pino6.bounce(pino1)
pino6.bounce(pino2)
pino6.bounce(pino3)
pino6.bounce(pino4)
pino6.bounce(pino5)


drawSprites();
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
