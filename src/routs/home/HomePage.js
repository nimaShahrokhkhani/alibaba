import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import Dropdown from '../../components/dropDown/DropDown'
import SearchInput from "../../components/searchInput/SearchInput";
import CountriesList from "../../components/countriesList/CountriesList";
import {changeDarkMode} from "../../utils/stateManagement/actions";
import store from "../../utils/stateManagement/customStore";
import ErrorPage from "../../components/errorPage/ErrorPage";
import Loading from "../../components/loading/Loading";

export default class HomePage extends React.Component {

    contentList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    state = {
        countryName: '',
        countryRegion: '',
        isError: false
    }

    constructor(props) {
        super(props);
    }

    onContentSelected = (content) => {
        this.setState({
            countryRegion: content,
            countryName: ''
        })
    }

    onSearchTextChange = (text) => {
        this.setState({
            countryName: text,
            countryRegion: ''
        })
    }

    showErrorPage = () => {
        this.setState({
            isError: true
        })
    }

    render() {
        let {countryName, countryRegion, isError} = this.state;
        return (
            <Container>
                {!isError ?
                    <div>
                        <Row>
                            <Col><SearchInput value={countryName} placeholder={"Search for a country..."}
                                              onChangeText={this.onSearchTextChange}/></Col>
                            <Col><Dropdown value={countryRegion} placeholder={"Filter By Region"}
                                           optionList={this.contentList}
                                           onItemSelected={this.onContentSelected}/></Col>
                        </Row>
                        <Row>
                            <CountriesList showErrorPage={this.showErrorPage} countryName={countryName}
                                           countryRegion={countryRegion}/>
                        </Row>
                    </div> :
                    <ErrorPage/>
                }
            </Container>
        )
    }
}