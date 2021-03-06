import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class BirthdayForm extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            startDate: moment()
        }
    }

    handleChange(date) {
        alert(date);
    }

    render() {
        return(
            <div>
                <h1>BIRTHDAY COUNTDOWN</h1>
                <DatePicker 
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default BirthdayForm;