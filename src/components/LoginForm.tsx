import { Button, Form, Input, Row } from 'antd';

import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { User } from '@/models/User';
import { rules } from '@/utils/rules';

const { Item } = Form;

const LoginForm = () => {
  const { isLoading } = useTypedSelector((state) => state.auth);
  const { login } = useActions();

  const submit = ({ username, password }: User) => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      <Item label="Username" name="username" rules={[rules.required('Please enter your username!')]}>
        <Input />
      </Item>
      <Item label="Password" name="password" rules={[rules.required('Please enter your password!')]}>
        <Input type="password" />
      </Item>
      <Row justify="space-between">
        <Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Login
          </Button>
        </Item>
        <Item>
          <Button type="primary" danger htmlType="reset">
            Reset
          </Button>
        </Item>
      </Row>
    </Form>
  );
};

export default LoginForm;
