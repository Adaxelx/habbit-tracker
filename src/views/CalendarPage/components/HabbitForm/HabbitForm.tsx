import React, { MouseEventHandler } from 'react';
import { PopUp, Input, Button, DateInput, Alert, Select } from 'components';
import { useForm } from 'react-hook-form';
import { EventSend, createRestrictedLengthObject, Label } from 'utils';
import { useQuery } from 'hooks';
import { useUserContext } from 'context';
import { getLabels, postEvent } from 'views/CalendarPage/CalendarPage.api';
import { StyledWrapper } from './HabbitForm.css';
import { WeekDaysInput } from '..';

interface HabbitFormProps {
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement>;
}

const HabbitForm = (props: HabbitFormProps) => {
  const { register, handleSubmit, errors, control } = useForm<EventSend>({
    defaultValues: { label: '' },
  });

  const { token } = useUserContext();

  const [labels, loading, error] = useQuery<Label>([token], () => getLabels(token));

  console.log(labels);

  const onSubmit = async (data: EventSend) => {
    try {
      await postEvent(token, data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PopUp {...props} header="Add habbit">
      <StyledWrapper as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          name="title"
          label="Title"
          id="title"
          refVal={register(createRestrictedLengthObject('title'))}
          minLength={6}
          maxLength={30}
          error={errors.title}
          data-testid="title"
        />
        <Input
          name="description"
          label="Description"
          id="description"
          refVal={register()}
          error={errors.description}
          data-testid="description"
          type="textarea"
        />
        <WeekDaysInput control={control} />
        <DateInput control={control} name="dateStart" header="Date start" />
        <DateInput control={control} name="dateEnd" header="Date end" />
        <Input
          name="timeStart"
          label="Time start"
          id="timeStart"
          refVal={register()}
          error={errors.timeStart}
          type="time"
          data-testid="timeStart"
        />
        <Input
          name="timeEnd"
          label="Time end"
          id="timeEnd"
          refVal={register()}
          error={errors.timeStart}
          type="time"
          data-testid="timeEnd"
        />
        <Select
          name="label"
          label="Label"
          control={control}
          options={labels.map(({ _id, title, ...rest }) => ({ key: _id, value: title, ...rest }))}
        />
        <Alert loading={loading} error={error} />
        <Button size="s" mt="16px" type="submit" data-testid="submit" noMaxWidth>
          Send
        </Button>
      </StyledWrapper>
    </PopUp>
  );
};

export default HabbitForm;
