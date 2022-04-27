import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ContextContainer, Stack } from '@bubbles-ui/components';
import { Controller } from 'react-hook-form';
import ImagePicker from '@leebrary/components/ImagePicker';

export default function DetailDesign({ form, t, onNext }) {
  const [isDirty, setIsDirty] = React.useState(false);

  async function next() {
    setIsDirty(true);
    const formGood = await form.trigger([]);
    if (formGood) {
      onNext();
    }
  }

  return (
    <ContextContainer>
      <Stack justifyContent="space-between">
        <Box sx={(theme) => ({ marginRight: theme.spacing[8] })}>
          <Controller
            control={form.control}
            name="cover"
            render={({ field }) => {
              console.log(field);
              return <ImagePicker {...field} />;
            }}
          />
        </Box>
        <Button onClick={next}>{t('continue')}</Button>
      </Stack>
    </ContextContainer>
  );
}

DetailDesign.propTypes = {
  form: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  onNext: PropTypes.func,
};
