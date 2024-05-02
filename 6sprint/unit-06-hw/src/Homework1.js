import React from "react";

class Homework1 extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            s1: this.props.p1
        }
        this.s2 = 201;
        console.log(props);
    }
    componentDidMount() {

        let a = this.state.s1;
        a += 5
        this.setState({ s1: a });

        this.s2 += 5;

    }

    buttonHander = () => {
        let a = this.state.s1;
        a += 50;
        this.setState({ s1: a });

        this.s2 += 50;
    }

    render() {

        return (
            <>
                <div>{this.state.s1}</div>
                <div>{this.s2}</div>
                <div>
                    <button onClick={this.buttonHander} style={{ width: '60px', height: '30px' }}>Button</button>
                </div >
            </>
        )
    }
}

export default Homework1;