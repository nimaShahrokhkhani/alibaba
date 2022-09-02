import React, {useEffect, useState} from "react";
import {Col, Container, Row, Image, Button, Ratio} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';
import './DetailPage.css'
import store from "../../utils/stateManagement/customStore";

export default function DetailPage() {
    const country = useLocation().state;
    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(store.getState() && store.getState().darkMode);

    useEffect(() => {
        store.subscribe(() => {
            setDarkMode(darkMode => store.getState().darkMode)
        })
    });

    return (
        <Container style={{color: !darkMode ? '#000' : 'white'}}>
            <Row>
                <Col>
                    <Button style={{
                        boxShadow: 'grey 0px 0px 10px 0px',
                        backgroundColor: darkMode ? 'hsl(209deg 24% 17%)' : 'white',
                        color: !darkMode ? '#000' : 'white',
                        width: 100
                    }}
                            variant="Light"
                            size="sm" onClick={() => {
                        navigate('/')
                    }}>&#8592; Back</Button>
                </Col>
            </Row>
            <Row style={{marginTop: 50, display: 'flex', justifyContent: 'center'}}>
                <Col xs={8} xl={4}>
                    <Ratio aspectRatio="4x3">
                        <Image src={country.flags.png}/>
                    </Ratio>
                </Col>
                <Col style={{margin: 50}}>
                    <Container>
                        <Row>
                            <Col className="countryDetailName">{country.name}</Col>
                        </Row>
                        <Row>
                            <Col style={{marginTop: 20}} xs={12} xl={4}>
                                <Row><Col className="countryTitle">{"Native Name:"}</Col><Col
                                    className="countryValue">{country.nativeName}</Col></Row>
                                <Row style={{marginTop: 5}}><Col className="countryTitle">{"Population:"}</Col><Col
                                    className="countryValue">{country.population}</Col></Row>
                                <Row style={{marginTop: 5}}><Col className="countryTitle">{"Region:"}</Col><Col
                                    className="countryValue">{country.region}</Col></Row>
                                <Row style={{marginTop: 5}}><Col className="countryTitle">{"Sub Region:"}</Col><Col
                                    className="countryValue">{country.subregion}</Col></Row>
                                <Row style={{marginTop: 5}}><Col className="countryTitle">{"Capital:"}</Col><Col
                                    className="countryValue">{country.capital}</Col></Row>
                            </Col>
                            <Col style={{marginTop: 20}} xs={12} xl={4}>
                                <Row><Col className="countryTitle">{"Top Level Domain:"}</Col><Col
                                    className="countryValue">{country.topLevelDomain.toString()}</Col></Row>
                                <Row style={{marginTop: 5}}><Col className="countryTitle">{"Currencies:"}</Col><Col
                                    className="countryValue">{country.currencies.map(currency => currency.name)}</Col></Row>
                                <Row style={{marginTop: 5}}><Col className="countryTitle">{"Languages:"}</Col><Col
                                    className="countryValue">{country.languages.map(language => language.name + ' ')}</Col></Row>
                            </Col>
                        </Row>
                        <Row style={{display: 'flex', alignItems: 'center'}}>
                            <Col style={{marginTop: 20}} className="countryTitle"
                                 md={"auto"}>{"Border Countries:"}</Col>
                            <Col style={{marginTop: 20}}>{country.borders && country.borders.map(border => <Button
                                key={border}
                                style={{
                                    boxShadow: 'grey 0px 0px 10px 0px',
                                    paddingRight: 20,
                                    paddingLeft: 20,
                                    marginRight: 10,
                                    backgroundColor: darkMode ? 'hsl(209deg 24% 17%)' : 'white',
                                    color: !darkMode ? '#000' : 'white',
                                }} variant="Light"
                                size="sm">{border}</Button>)}</Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}