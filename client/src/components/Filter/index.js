import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar  from 'react-bootstrap/Navbar'

const Filter = (props) => {
    const organizations = ["NASA", "SpaceX", "United Launch Alliance", "Arianespace"];
    const {filterOrg, handleFilter} = props
    return (
    <div className="filter">
    <Navbar bg="dark" variant="dark">
    <div className="launches-header">LAUNCHES</div>
    <ButtonToolbar>
            <DropdownButton title={filterOrg} variant="secondary">
            <Dropdown.Item eventKey={9} onClick= {() => handleFilter("All Organizations")}>All Organizations</Dropdown.Item>
            {organizations.map((organ,index) => (
                    <Dropdown.Item eventKey={index} onClick= {() => handleFilter(organ)}>{organ}</Dropdown.Item>
                ))}
            </DropdownButton>
        </ButtonToolbar>
    </Navbar>

    </div>
    )
}

export default Filter;