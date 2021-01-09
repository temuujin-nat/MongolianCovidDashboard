import './NationalStatBoard.css'


function NationalStatBoard(props) {
	return (
		<div className="wrapper-stat-list">
			<div className="stat-list">
				<div className="stat-item confirmed">
					<div className="count">{props.data["confirmed"][0]}<div className="diff">( {props.data["confirmed"][1]} )</div></div>
					<div className="label">Confirmed</div>
				</div>
				<div className="stat-item recovered">
					<div className="count">{props.data["recovered"][0]}<div className="diff">( {props.data["recovered"][1]} )</div></div>
					<div className="label">Recovered</div>
				</div>
				<div className="stat-item dead">
					<div className="count">{props.data["dead"][0]}<div className="diff">( {props.data["dead"][1]} )</div></div>
					<div className="label">Deceased</div>
				</div>
				<div className="stat-item active">
					<div className="count">{props.data["active"][0]}<div className="diff">( {props.data["active"][1]} )</div></div>
					<div className="label">Active<div className="crit">({props.data["active"][2]} critical)</div></div>
				</div>
				<div className="stat-item tested">
					<div className="count">{props.data["tested"][0]}<div className="diff">( {props.data["tested"][1]} )</div></div>
					<div className="label">Tested</div>
				</div>
			</div>
		</div>
	)
}


export default NationalStatBoard