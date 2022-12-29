import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: 23
        }
    }

    render() {
        return (
            <div>
                <h1>
                    HoLa { this.props.name } !
                </h1>
                <h3>
                    Tu edad es: {this.state.age}
                </h3>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir Años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }

}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
