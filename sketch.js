// properties of the system: # of oscillators, coupling strength
var n, k, step;
// vars to save the states of the oscillators
//  average properties of the oscillators
//  "var avg_phi, avg_omega;" stored in oscillators[0], angular_frequencies[0]
var oscillators;
var angular_frequencies;

function setup() {
  step = 0;
  n = 30;
  k = 5;
  oscillators = [];
  angular_frequencies = [];
  oscillators[0] = 0;
  angular_frequencies[0] = 0;
  createCanvas(400,400);
  frameRate(30);
  for (i = 1; i < n+1; i++){
    oscillators.push(random(TWO_PI));
    angular_frequencies.push(random(0.012,0.018))
    oscillators[0] += oscillators[i];
    angular_frequencies[0] += angular_frequencies[i];
  }
  oscillators[0] = oscillators[0]/n;
  angular_frequencies[0] = angular_frequencies[0]/n;

}

function draw() {
  background(81);
  if (step == frameRate()) {step = 0;}
  stroke(255);
  for (i in oscillators){
    if (i == 0) {strokeWeight(12)} else {strokeWeight(4)}
    x = 200-120*cos(oscillators[i]+angular_frequencies[i]*step);
    y = 200-120*sin(oscillators[i]+angular_frequencies[i]*step);
    point(x,y);
  }
  step++;
 }
