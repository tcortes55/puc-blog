import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const MenuLink = styled.a`
    color: white;
`;

function Menu({ links }) {
    return (
        <MenuContainer>
        {links.map((item, index) => (
            <React.Fragment key={index}>
                <MenuLink href={item.url}>
                    {item.name}
                </MenuLink>
                {index < links.length - 1 && <span> | </span>}
            </React.Fragment>
        ))}
        </MenuContainer>
    )
}

export default Menu;