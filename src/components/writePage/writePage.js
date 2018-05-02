import React, {Component} from 'react';

class writePage extends Component {
    componentWillMount(){
        console.log(this.props.match.params)
    }
    render() {
        return (
            <div className="writePage_box">
                writePage
            </div>
        );
    }
}
export default writePage