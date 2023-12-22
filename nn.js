function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));

}



class NeuralNetwork {
    constructor(input_nodes, hidden_nodes, output_nodes) {
             this.input_nodes = input_nodes;
             this.hidden_nodes = hidden_nodes;
             this.output_nodes = output_nodes;

             this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
             this.weights_oh =  new Matrix(this.output_nodes, this.hidden_nodes);
             this.weights_ih.randomize();
             this.weights_oh.randomize();

             this.bias_h = new Matrix(this.hidden_nodes, 1);
             this.bias_o = new Matrix(this.output_nodes, 1);
             this.bias_h.randomize();
            this.bias_o.randomize();

    }



    feedforward = function(input_array) {  


        //generating the hidden outputs

        let inputs = Matrix.fromArray(input_array);
 
        let hidden = Matrix.multiply(this.weights_ih, inputs);

        hidden.add(this.bias_h);

        // activation function

        hidden.map(sigmoid);

        // generating the output's output

        let output = Matrix.multiply(this.weights_oh, hidden);
        output.add(this.bias_o);
        output.map(sigmoid); 


        
        return output.toArray();
    }

    train(inputs , answer) {
        
    }

}