import React, { useState } from 'react';
import Select from 'react-select';
import data from './data.json';

function ReactCascade() {
    const [country, setCountry] = useState(null);
    const [State, setState] = useState(null);
    const [StateList, setStateList] = useState([]);

    // handle change event of the country dropdown
    const handleCountryChange = data => {
        setCountry(data);
        setStateList(data.states);
        setState(null);
    };

    // handle change event of the state dropdown
    const handlestateChange = obj => {
        setState(obj);
    };

    // generate the link when both dropdowns are selected

    return (
        <div className="App">
            <div style={{ width: 400, marginBottom: 20 }}>
                <b>Country</b>
                <Select
                    placeholder="Select Country"
                    value={country}
                    options={data}
                    onChange={handleCountryChange}
                    getOptionLabel={x => x.region}
                    getOptionValue={x => x.country_code}
                />
                <br />
                <b>state</b>
                <Select
                    placeholder="Select state"
                    value={State}
                    options={StateList}
                    onChange={handlestateChange}
                    getOptionLabel={x => x.name}
                    getOptionValue={x => x.code}
                />
            </div>
            
        </div>
    );
}

export default ReactCascade;
