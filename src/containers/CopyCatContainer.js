import React from 'react';
import CopyCat from '../components/CopyCat';

class CopyCatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        copying: true,
        input: ''
        };

        this.toggleTape = this.toggleTape.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.target.value })
    }

    toggleTape() {
        this.setState({ copying: !this.state.copying });
    }

    render() {
        return <CopyCat copying={this.state.copying}
                        input={this.state.input}
                        toggleTape={this.toggleTape}
                        handleChange={this.handleChange} />
    }
}

export default CopyCatContainer;

// ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
