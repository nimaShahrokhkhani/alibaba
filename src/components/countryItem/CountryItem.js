import React from "react";
import {Col, Container, Row, Image, Ratio} from 'react-bootstrap'
import './CountryItem.css';
import { useNavigate } from "react-router-dom";

export default function CountryItem({darkMode, country, onCountryClick}) {
    let navigate = useNavigate();
    return (
        <Container onClick={() => {
            navigate('/detail', {state:country})
        }} style={{backgroundColor: darkMode ? 'hsl(211deg 21% 22%)' : 'white', color: !darkMode ? '#000' : 'white'}} className="countryContainer">
            <Ratio aspectRatio="4x3">
                <Image className="countryImage" src={country.flags.png}/>
            </Ratio>
            <Container className="countryDetailContainer">
                <Row className="countryName"><Col>{country.name}</Col></Row>
                <br/>
                <Row><Col className="countryTitle" md="auto">{"Population:"}</Col><Col className="countryValue" md="auto">{country.population}</Col></Row>
                <Row><Col className="countryTitle" md="auto">{"Region:"}</Col><Col className="countryValue" md="auto">{country.region}</Col></Row>
                <Row><Col className="countryTitle" md="auto">{"Capital:"}</Col><Col className="countryValue" md="auto">{country.capital}</Col></Row>
            </Container>
        </Container>
    )
}