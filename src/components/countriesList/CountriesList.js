import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import {getCountries, getCountriesByName, getCountriesByRegion} from '../../model/Countries'
import CountryItem from "../countryItem/CountryItem";
import store from "../../utils/stateManagement/customStore";
import {changeDarkMode} from "../../utils/stateManagement/actions";
import ErrorPage from "../errorPage/ErrorPage";
import Loading from "../loading/Loading";

export default class CountriesList extends React.Component {

    state = {
        countries: [],
        countryName: '',
        countryRegion: '',
        darkMode: false,
        isLoading: false
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                darkMode: store.getState().darkMode
            })
        })
        this.setIsLoading(true);
        getCountries().then(result => {
            this.setState({
                countries: result
            })
            this.setIsLoading(false);
        }).catch(error => {
            this.props.showErrorPage()
            this.setIsLoading(false);
        })
    }

    async componentWillReceiveProps(newProps) {
        if (newProps.countryName !== this.props.countryName && newProps.countryName !== '') {
            this.setState({
                countries: await getCountriesByName(newProps.countryName)
            })
        } else if (newProps.countryRegion !== this.props.countryRegion && newProps.countryRegion !== '') {
            this.setState({
                countries: await getCountriesByRegion(newProps.countryRegion)
            })
        }
    }

    setIsLoading = (isLoading) => {
        this.setState({isLoading})
    }

    render() {
        let {countries, darkMode, isLoading} = this.state;
        return (
            <Container>
                {isLoading ?
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
                        <Loading/>
                    </div> :
                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        {countries && countries.map((country) => {
                            return (
                                <Col key={country.name} xs={8} xl={3}><CountryItem darkMode={darkMode}
                                                                                   country={country}/></Col>
                            )
                        })}
                    </Row>
                }
            </Container>
        )
    }
}