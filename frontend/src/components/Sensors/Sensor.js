import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sensor(props) {
  const [sensor, updateSensor] = useState({});

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://192.168.1.110:3200/sensors/${props.sensor.id}`);
      updateSensor(res.data);
      console.log(sensor);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      {props.sensor.name} {sensor.result} {sensor.relayState}
      <button type="button" className="btn btn-primary" onClick={fetchData}>Värskenda</button>
    </div>
  );
}

export default Sensor;