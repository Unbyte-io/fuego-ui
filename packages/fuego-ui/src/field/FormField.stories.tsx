import React, { useMemo } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Field from '.';
import { useForm } from 'react-hook-form';

export default {
  title: 'Components/Form Fields/Text Fields',
  component: Field,
  argTypes: {},
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <Field
              {...args}
              {...register('name', {
                required: true,
                pattern: /[A-Za-z]{2}$/i,
              })}
              fieldErrors={errors.name ? true : false}
              errorLabel={errors.name && 'Valid email is required!'}
            >
              Name
            </Field>
          </form>
        </div>
      </div>
    </div>
  );
};

export const TextField = Template.bind({});
TextField.args = {
  name: 'name',
  floatLabel: true,
  autoComplete: 'off',
};

export const OutlineField = Template.bind({});
OutlineField.args = {
  name: 'name',
  floatLabel: true,
  autocomplete: 'off',
  fieldStyle: 'outlineFloat',
};

export const outfieldFloat = Template.bind({});
outfieldFloat.args = {
  name: 'name',
  floatLabel: true,
  autocomplete: 'off',
  fieldStyle: 'outsideFloat',
};

export const TextArea = Template.bind({});
TextArea.args = {
  name: 'name',
  floatLabel: true,
  autocomplete: 'off',
  type: 'textarea',
};
