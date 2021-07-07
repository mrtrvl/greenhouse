import React, { useState } from 'react';
import axios from 'axios';

function Relays() {
  const [relays, updateRelays] = useState([]);

	const getRelays = async () => {
		try {
			const res = await axios.get('http://192.168.1.110:3200/relays');
			if (!res) throw new Error('No relays found');
      updateRelays(res.data.relays);
		} catch (error) {
			console.log(error);
		}
	};
	return (
    <div>
      <h3>Relays</h3>
      <button type="button" className="btn btn-secondary" onClick={getRelays}>
    		Get relays
			</button>
      <ul className="list-group">
        {relays.map(relay => <li key={relay.id} className="list-group-item">{relay.id}: {relay.name}</li>)}
      </ul>
    </div>
  );
}
  
export default Relays;