import { Layout, Menu, Row } from 'antd';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateMenuItems, publicMenuItems } from '../utils/constants';

const { Header } = Layout;

const Navbar = () => {
  const {
    isAuth,
    user: { username },
  } = useTypedSelector((state) => state.auth);

  return (
    <Header>
      <Row justify="end" align="middle">
        {isAuth ? (
          <>
            <h3 style={{ color: 'white', marginInline: 10 }}>{username}</h3>
            <Menu theme="light" mode="horizontal" items={privateMenuItems} selectable={false} />
          </>
        ) : (
          <Menu theme="light" mode="horizontal" items={publicMenuItems} selectable={false} />
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
