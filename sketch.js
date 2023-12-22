function setup() {
  // Add your setup code here

  let nn = new NeuralNetwork(2, 2, 1);
  let inputs = [1, 0];

  let outputs = nn.feedforward(inputs);
  console.log(outputs);

}
