import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Container, Header, Content, Footer, Nav, Navbar, Icon, Dropdown} from 'rsuite'
import { ReactComponent as LolSvg } from "../icons/lol.svg"
import { ReactComponent as ApexSvg } from "../icons/apex.svg"
import { ReactComponent as ValSvg } from "../icons/valorant.svg"
import { ReactComponent as RLSvg } from "../icons/rl.svg" 
import { ReactComponent as CSSvg } from "../icons/cs.svg"
import '../CSS/font.css'
import bg from '../icons/fond.png'
import logo from '../icons/logoGG.png'
import { ReactComponent as ChatSvg } from "../icons/chat.svg"
import { useHistory } from "react-router-dom";

function NavComp(props) {
  const history = useHistory()

  return (
    <Navbar appearance="inverse" style={{backgroundColor: "#0DD9C4"}} className="font">
      <Navbar.Header>
        <img src={logo} alt="Logo" style={{width: '50px', height: '50px', marginLeft: '5px', marginTop: '3px'}}></img>
      </Navbar.Header>
      <Navbar.Body >
        <Nav>
          <Dropdown title="Jeux" trigger="hover">
            <Dropdown.Item onClick={() => history.push({pathname: `/lol`})}><LolSvg/> League of Legends</Dropdown.Item>
            <Dropdown.Item onClick={() => history.push({pathname: `/valorant`})}><ValSvg/> Valorant</Dropdown.Item>
            <Dropdown.Item onClick={() => history.push({pathname: `/csgo`})}><CSSvg/> CS:GO</Dropdown.Item>
          </Dropdown>
          <Nav.Item onClick={() => history.push({pathname: '/forum'})} icon={<Icon icon="chat" />}>Forum</Nav.Item>
          <Nav.Item onClick={() => history.push({pathname: '/news'})} icon={<Icon icon="newspaper-o"/>}>News</Nav.Item>
          <Nav.Item onClick={() => history.push({pathname: '/boutique'})} icon={<Icon icon="shopping-cart"/>}>Boutique</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Dropdown title="Options" trigger="hover" placement='bottomEnd'>
            <Dropdown.Item onClick={() => history.push({pathname: `/parametres`})} icon={<Icon icon='cog'/>}> Paramètres</Dropdown.Item>
            <Dropdown.Item onClick={() => history.push({pathname: `/`})} icon={<Icon icon='exit'/>}> Déconnexion</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar.Body>
    </Navbar>
  )
}

export default NavComp;