import React, {useState} from 'react';
import {
    HomeOutlined,
    SoundOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';
import {
    useNavigate, Outlet, Route, Routes
} from "react-router-dom";
import Settings from "./routes/settings";
import Root from "./routes/root";
import Volumes from "./routes/volumes";

const {
    Content,
    Footer,
    Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', '/', <HomeOutlined/>),
    getItem('Player Volumes', '/volumes', <SoundOutlined/>),
    getItem('Settings', '/settings', <SettingOutlined/>),
];

const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const navigate = useNavigate();

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
    }

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)'}}/>
                <Menu theme="dark" onClick={handleMenuClick} defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout className="site-layout">
                <Content style={{margin: '0 16px'}}>
                    <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                        <Outlet/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    ARMCO Atlas Dev Team ©2023<br/>
                    Hacked together by TBSliver and donequis
                </Footer>
            </Layout>
        </Layout>
    );
};

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route path={"volumes"} element={<Volumes/>}/>
                <Route path={"settings"} element={<Settings/>}/>
                <Route index element={<Root/>}/>
            </Route>
        </Routes>
    )
}

export default App;
