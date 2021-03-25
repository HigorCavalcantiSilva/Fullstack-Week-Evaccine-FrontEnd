import { Layout, Menu, Breadcrumb } from 'antd';
import "antd/dist/antd.css"
import ListaPessoas from './components/ListaPessoas';

const {Header, Content, Footer} = Layout;

export default function App() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo"></div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <div className="site-layout-content">
            <ListaPessoas></ListaPessoas>
          </div>
        </Content>
        <Footer style={{textAlign: 'center', bottom: '0px', position: 'absolute', width: '100%'}}>
          eVaccine - Fullstack Week
        </Footer>
      </Layout>
    </div>
  );
}
