import React, { useState } from 'react';
import axios from 'axios';
import Sensor from './Sensor';

function Sensors() {
	const [sensors, updateSensors] = useState([]);

	const getSensors = async () => {
		try {
			const res = await axios.get('http://192.168.1.110:3200/sensors');
			if (!res) throw new Error('No sensors found');
      updateSensors(res.data.sensors);
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <div>
      <h3>Sensors</h3>
			<button type="button" className="btn btn-secondary" onClick={getSensors}>
    		Get sensors
			</button>
      <ul className="list-group">
        {sensors.map(sensor => <li key={sensor.id} className="list-group-item"><Sensor sensor={sensor} /></li>)}
      </ul>
    </div>
  );
}

export default Sensors;
