function setup() {
  // Add your setup code here

  let nn = new NeuralNetwork(2, 2, 2);
  let inputs = [1, 2];

  nn.train(inputs, [1,10]);

}
