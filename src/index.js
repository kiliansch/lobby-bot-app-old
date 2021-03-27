import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import reportWebVitals from './reportWebVitals';
import { Layout, Input, Slider, Space, Card, Button } from 'antd';
import { StarSliders } from './components/StarSliders'
import { ModsSelection } from './components/ModsSelection';
import { TeamMode } from './components/TeamMode';

const { Content, Sider } = Layout;

class App extends React.Component {
    state = {
        buttonLoading: false,
        buttonText: "Start game"
    }

    onClick = () => {
        this.setState({
            buttonLoading: true,
            buttonText: "Validating inputs..."
        });
        if (!window.lobbyName.state.value) {
            return;
        }
        this.setState({buttonLoading: false});
    }

    render() {
        const { buttonLoading, buttonText } = this.state;

        return (

            <Layout className="layout">
                <Sider width={200} className="site-layout-background">
                </Sider>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <Space direction="vertical" style={{ width: "100%" }}>
                            <Card title="Lobby name">
                                <Input ref={(r) => window.lobbyName = r} />
                            </Card>
                            <Card title="Max Players">
                                <Slider ref={(r) => window.maxPlayers = r}
                                    min={1}
                                    max={16}
                                />
                            </Card>
                            <Card title="Star difficults restriction">
                                <StarSliders ref={(r) => window.starSliders = r} />
                            </Card>
                            <Card title="Mods">
                                <ModsSelection ref={(r) => window.mods = r} />
                            </Card>
                            <Card title="Team Mode">
                                <TeamMode ref={(r) => window.teamMode = r} />
                            </Card>
                            <Button type="primary" onClick={this.onClick} loading={buttonLoading}>{buttonText}</Button>
                        </Space>
                    </div>
                </Content>
            </Layout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
