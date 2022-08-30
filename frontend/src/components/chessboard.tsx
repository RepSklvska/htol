import React from 'react';

interface ITank {
	type: string,
	name: string
}

interface IPanel {
	available: boolean
	number: number
}

const Panel: React.FC = () => {
	
	return (
		<img src="/panel/big/CG27062.png" alt="panel"/>
	)
}

export default function Chessboard() {
	const panels: IPanel[][] = []
	let i = 0
	for (let x = 0; x < 20; x++) {
		panels[x] = []
		for (let y = 0; y < 20; y++) {
			panels[x][y] = {available: true, number: i}
			i++
		}
	}
	console.log(panels)
	
	return (
		<div>
			<table style={{borderCollapse: "separate", borderSpacing: "0px"}}>
				<tbody>
				{panels.map((row, key) => {
					return (<tr key={key}>
						{row.map((panel) => {
							return (<td key={panel.number}><Panel/></td>)
						})}
					</tr>)
				})}
				</tbody>
			</table>
		</div>
	);
}