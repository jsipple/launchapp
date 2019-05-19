import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownButton from 'react-bootstrap/DropdownButton'

const Filter = (props) => {
    const organizations = ["Nasa", "SpaceX", "ULA", "Arianespace"];
    const {filterOrg, handleFilter} = props
    return (
    <div className="filter">
    <ButtonToolbar>
            <DropdownButton title={filterOrg} >
            <Dropdown.Item eventKey={9} onClick= {() => handleFilter("All Organizations")}>All Organizations</Dropdown.Item>
            {organizations.map((organ,index) => (
                    <Dropdown.Item eventKey={index} onClick= {() => handleFilter(organ)}>{organ}</Dropdown.Item>
                ))}
            </DropdownButton>
        </ButtonToolbar>
  

    </div>
    )
}

export default Filter;