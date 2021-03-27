import React from 'react';
import { Radio } from 'antd';

export class TeamMode extends React.Component {
    state = {
        value: "HeadToHead",
    };

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { value } = this.state;

        return (
            <Radio.Group onChange={this.onChange} value={value}>
                <Radio value={"HeadToHead"} selected>Head to Head</Radio>
                <Radio value={"TagCoop"}>Tag Coop</Radio>
                <Radio value={"TeamVs"}>Team VS</Radio>
                <Radio value={"TagTeamVs"}>Tag Team VS</Radio>
            </Radio.Group>
        );
    }
}

