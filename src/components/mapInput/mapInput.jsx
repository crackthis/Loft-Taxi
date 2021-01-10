import React, { Component } from "react";
import { Input } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { input, arrow, container, inputcontainer, dropdown, active1, active2 } from './mapInput.module.css';
import classNames from "classnames";
import { connect } from "react-redux";
import {saveRouteOne, saveRouteTwo, loadAddressList} from "../../actions";

const AddressList = (props) => {

    if(props.list === undefined) return null;
    const chooseRoute = props.chooseRoute;
    const list = props.list;

    let result = list.filter((item) => (item !== props.routeOne && item !== props.routeTwo));

    const listItems = result.map((address, index) =>
        <li key={index} className="list-item">
            {address}
        </li>
    );

    return (
        <ul id={props.id} onClick={chooseRoute}>{listItems}</ul>
    );
}


export class MapInput extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.active1 !== prevProps.active1) {
            this.setState({active1: this.props.active1})
        }
        if(this.props.active2 !== prevProps.active2) {
            this.setState({active2: this.props.active2})
        }
    }

    componentWillUnmount() {
        this.props.saveRouteOne('');
        this.props.saveRouteTwo('');
    }

    constructor(props) {
        super(props);
        this.state = {
            active1: this.props.active1,
            active2: this.props.active2,
            target: this.props.target,
        }
    }

    filter = async (e) => {
        const value = e.target.value.toLowerCase();
        const id = e.target.id;
        if(value !== null) {
            if(id === 'active1') {
                await this.setState({active1: true})
            }

            if(id === 'active2') {
                await this.setState({active2: true})
            }
        }

        if (value !== this.props.routeOne && id === 'active1') {
            this.props.saveRouteOne('');
        }

        if (value !== this.props.routeTwo && id === 'active2') {
            this.props.saveRouteTwo('');
        }

        const ul = document.querySelector("#list");
        const li = ul.getElementsByTagName("li");
        for (let item of li) {
            if (item.textContent.toLowerCase().indexOf(value) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    }

    chooseRoute = async (e) => {
        const value = e.target.textContent;
        const input = e.target.parentNode.parentNode.previousSibling.querySelector('input');
        input.value = await value;
        if(input.id === 'active1') {
            this.props.saveRouteOne(value);
            this.setState({active1: false});
        }
        if(input.id === 'active2') {
            this.props.saveRouteTwo(value);
            this.setState({active2: false});
        }
    }

    render() {
        return (
            <div className={container}>
                <div className={inputcontainer}>
                    <Input
                        type="text"
                        placeholder={this.props.placeholder}
                        className={input}
                        id={this.props.id}
                        onChange={this.filter}
                    />
                    <KeyboardArrowDownIcon
                        className={arrow}
                    />
                </div>
                {
                    (this.state.active1) ? (
                        <div className={classNames([dropdown], [active1])}>
                            <AddressList
                                list={this.props.addressList}
                                id="list"
                                chooseRoute={this.chooseRoute}
                                routeOne={this.props.routeOne}
                                routeTwo={this.props.routeTwo}
                            />
                        </div>
                    ) : (null)
                }
                {
                    (this.state.active2) ? (
                        <div className={classNames([dropdown], [active2])}>
                            <AddressList
                                list={this.props.addressList}
                                id="list"
                                chooseRoute={this.chooseRoute}
                                routeOne={this.props.routeOne}
                                routeTwo={this.props.routeTwo}
                            />
                        </div>
                    ) : (null)
                }
            </div>
        )
    }
}

export const MapInputConnect = connect((state) => ({
    routeOne: state.address.routeOne,
    routeTwo: state.address.routeTwo,
    addressList: state.address.addressList,
}), {saveRouteOne, saveRouteTwo, loadAddressList})(MapInput);
