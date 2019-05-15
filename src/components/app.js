import React, {Component} from 'react';

class App extends Component {

    state= {
        title: "titulo"
    }
    render(){
        return(
            <h1>hola con un componente de react{this.state.title}</h1>
        );
    }
}export default App;