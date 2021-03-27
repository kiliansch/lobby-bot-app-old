import React from 'react';
import { Slider, InputNumber, Row, Col, Tooltip } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

export class StarSliders extends React.Component {
    state = {
        minInputValue: 0,
        maxInputValue: 0,
    };

    onMinChange = value => {
        if (isNaN(value))
            return;

        let maxInputValue = this.state.maxInputValue;
        if (maxInputValue < value)
            maxInputValue = value;

        this.setState({
            minInputValue: value,
            maxInputValue: maxInputValue
        });
    }

    onMaxChange = value => {
        if (isNaN(value))
            return;

        let minInputValue = this.state.minInputValue;
        if (value < minInputValue)
            minInputValue = value;

        this.setState({
            maxInputValue: value,
            minInputValue: minInputValue
        });
    }

    render() {
        const { minInputValue, maxInputValue } = this.state;

        return (
            <>
                <Row>
                    <Col span={2}>
                        <Tooltip placement="topLeft" title="Minimum Stars">
                            <StarOutlined style={{ fontSize: 21, position: 'relative', top: 5 }} />
                        </Tooltip>
                    </Col>
                    <Col span={18}>
                        <Slider
                            min={0}
                            max={10}
                            step={0.01}
                            onChange={this.onMinChange}
                            value={typeof minInputValue === 'number' ? minInputValue : 0}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={0}
                            max={10}
                            style={{ margin: '0 16px' }}
                            step={0.01}
                            value={minInputValue}
                            onChange={this.onMinChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>
                        <Tooltip placement="topLeft" title="Maximum Stars">
                            <StarFilled style={{ fontSize: '21px', position: 'relative', top: '5px' }} />
                        </Tooltip>
                    </Col>
                    <Col span={18}>
                        <Slider
                            min={0}
                            max={10}
                            step={0.01}
                            onChange={this.onMaxChange}
                            value={typeof maxInputValue === 'number' ? maxInputValue : 0}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={0}
                            max={10}
                            style={{ margin: '0 16px' }}
                            step={0.01}
                            value={maxInputValue}
                            onChange={this.onMaxChange}
                        />
                    </Col>
                </Row>
            </>
        );
    }
}