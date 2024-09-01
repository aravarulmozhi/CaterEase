import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Select from 'react-select';

const EditableField = ({ cellData, onItemizedItemEdit, options }) => {
  const handleSelectChange = (selectedOption) => {
    onItemizedItemEdit({
      target: {
        name: cellData.name,
        value: selectedOption ? selectedOption.value : '',
        id: selectedOption ? selectedOption.id : ''
      }
    });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: 'calc(1.5em + .75rem + 2px)',
      height: 'calc(1.5em + .75rem + 2px)'
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: 'calc(1.5em + .75rem + 2px)',
      padding: '0 8px'
    }),
    input: (provided) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: 'calc(1.5em + .75rem + 2px)'
    })
  };

  return (
    <InputGroup className="my-1 flex-nowrap">
      {cellData.leading != null && (
        <InputGroup.Text className="bg-light fw-bold border-0 text-secondary px-2">
          <span
            className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small"
            style={{ width: '20px', height: '20px' }}
          >
            {cellData.leading}
          </span>
        </InputGroup.Text>
      )}
      {cellData.type === 'search-select' ? (
        <Select
          styles={customStyles}
          options={options}
          value={options.find(option => option.value === cellData.value)}
          onChange={handleSelectChange}
          placeholder={cellData.placeholder}
          isClearable
          aria-label={cellData.name}
        />
      ) : (
        <Form.Control
          className={cellData.textAlign}
          type={cellData.type}
          placeholder={cellData.placeholder}
          min={cellData.min}
          name={cellData.name}
          id={`${cellData.id}`}
          value={cellData.value}
          step={cellData.step}
          precision={cellData.precision}
          aria-label={cellData.name}
          onChange={onItemizedItemEdit}
          required
        />
      )}
    </InputGroup>
  );
};

export default EditableField;
