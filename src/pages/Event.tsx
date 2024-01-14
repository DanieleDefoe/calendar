import { Button, Layout, Modal, Row } from 'antd';
import EventCalendar from '../components/Calendar';
import { useEffect, useState } from 'react';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Moment } from 'moment';
import { formatDate } from '../utils/helpers/date';
import { IEvent } from '../models/IEvent';

type SubmitValues = IEvent & { date: Moment | null };

const Event = () => {
  const { username: author } = useTypedSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const { guests, events } = useTypedSelector((state) => state.event);
  const { fetchGuests, createEvent, fetchEvents } = useActions();

  useEffect(() => {
    fetchGuests();
    fetchEvents(author);
  }, []);

  const submit = (values: SubmitValues) => {
    const event = {
      ...values,
      author,
      date: values.date && formatDate(values.date),
    };

    createEvent(event);

    setOpen(false);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setOpen(true)}>Add Event</Button>
      </Row>
      <Modal
        title="Add Event"
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <EventForm guests={guests} submit={submit} />
      </Modal>
    </Layout>
  );
};

export default Event;
