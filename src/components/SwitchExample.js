import React, { Component } from "react";
import Switch from "react-switch";
import {toggle} from "../utils/darkCheck"
export class SwitchExample extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let ls = localStorage.getItem("dark");
        let checked = ls === "true" ? true : false;
        this.setState({checked})
    }

    handleChange(checked) {
        this.setState({ checked }, () => {
           toggle(checked);
        });
    }

    render() {
        return (
            <label htmlFor="normal-switch">
                <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    id="normal-switch"
                />
            </label>
        );
    }
}