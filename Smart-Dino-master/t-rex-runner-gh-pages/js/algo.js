var R = require('./ml/recurrent.js');
var N = require('./ml/neat.js');


// Create and assign inputs and outputs matrices
inputs = new R.Mat(4,1);

inputs.insertData(0, 0, this.currentSpeed,);
inputs.insertData(1, 0, this.horizon.obstacles[0].xPos);
inputs.insertData(2, 0, this.horizon.obstacles[0].yPos);
inputs.insertData(3, 0, this.horizon.obstacles[0].typeConfig.type);

outputs = new R.Mat(2,1);
outputs.insertData(0, 0, Runner.keycodes.JUMP);
outputs.insertData(0, 0, Runer.keycodes.DUCK);



setInput(inputs)





var fitnessFunc = function(genome, backprop_mode, num_cycle) {
    var fitness = 0.0;
    // write some code to calculate the fitness
    // backprop here as well if backprop_mode is set to true
    fitness = this.distanceRan;
    return fitness;
}
