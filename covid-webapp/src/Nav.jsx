import React from 'react'
import {Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default function NavRender(props) {
    const types = ['Cases', 'Deaths', 'Recovered']
    
    return (
        <Nav className="nav nav-tabs h-100 border-0 d-flex bg-light" defaultActiveKey="/Cases">
            {types.map((type) => 
            
            <Nav.Item className="nav-item h-100 flex-fill m-0" key={type} 
                    onClick={() => props.onSelectLanguage(type)}>
                <LinkContainer to={'/' + type}>
                    <Nav.Link>{type}</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            )}
        </Nav>
    )
}

