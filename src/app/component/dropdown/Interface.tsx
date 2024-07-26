type Option = {
  label: string;
  value?: string;
};

interface IDropdownProps {
  options: Option[] | string[];
  selected: Option | string;
  placeholder?: string;
  onSelectedChanges: () => void;
}
