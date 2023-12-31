import { InplaceInputDateEditMode } from '@/ui/inplace-inputs/components/InplaceInputDateEditMode';

import { useEditableCell } from '../hooks/useEditableCell';

export type EditableDateProps = {
  value: Date;
  onChange: (date: Date) => void;
};

export function EditableCellDateEditMode({
  value,
  onChange,
}: EditableDateProps) {
  const { closeEditableCell } = useEditableCell();

  function handleDateChange(newDate: Date) {
    onChange(newDate);
    closeEditableCell();
  }

  return <InplaceInputDateEditMode onChange={handleDateChange} value={value} />;
}
