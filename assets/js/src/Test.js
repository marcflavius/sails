import * as React    from "react"
import './Test.css'
export class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {status: 0};
	}

	componentDidMount() {
		this.timerID = setInterval(
				() => this.tick(),
			1000
		);
	}

		tick() {
		let status = this.state.status;
		status++;
		if(status >= 2) {
			status = 0;
		}
		this.setState({
			status: status
		});
	}

	render() {
		const btnClass = this.state.status ? 'primary' : 'secondary';

		return (
			<button  rotation className={`btn btn-${btnClass}`} type='button'>
				{this.state.status ? this.props.large : this.props.short}
			</button>
		);
	}
}

