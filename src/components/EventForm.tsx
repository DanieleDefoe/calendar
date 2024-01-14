import { FC } from 'react';

import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';

import { IEvent } from '@/models/IEvent';
import { User } from '@/models/User';
import { rules } from '@/utils/rules';

const { Item } = Form;

interface Props {
  guests: Array<User>;
  submit(values: IEvent & { date: Moment | null }): void;
}

const EventForm: FC<Props> = ({ guests, submit }) => {
  return (
    <Form onFinish={submit}>
      <Item label="Event name" name="description" rules={[rules.required()]}>
        <Input />
      </Item>
      <Item
        label="Event date"
        name="date"
        rules={[rules.required(), rules.isDateAfter('You may not add events for the past!')]}
      >
        <DatePicker />
      </Item>
      <Item label="Event quest" name="quest" rules={[rules.required()]}>
        <Select
          options={guests.map((el) => ({
            label: el.username,
            value: el.username,
          }))}
          loading={guests.length === 0}
        />
      </Item>
      <Row justify="end">
        <Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Item>
      </Row>
    </Form>
  );
};

export default EventForm;
