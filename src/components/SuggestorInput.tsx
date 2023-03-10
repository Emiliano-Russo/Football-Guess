import { AutoComplete, Button, ButtonProps, Select } from "antd";
import { useState } from "react";

interface Props {
  options: { value: string }[];
  select: (name: string) => void;
}

export const SuggestorInput = (props: Props) => {
  const [playerSelected, setPlayerSelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function FilterMatch(searchTerm: { value: string }) {
    return (option: any, index: number) =>
      option.value.toUpperCase().indexOf(searchTerm.value.toUpperCase()) !== -1;
  }

  function onSelect(data: string) {
    setPlayerSelected(data);
  }

  var filteredOptions = props.options
    .filter(FilterMatch({ value: searchTerm }))
    .filter((_, index) => index < 5);

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.value.toLocaleLowerCase() ?? "").includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          (optionA?.value ?? "").toLowerCase().localeCompare((optionB?.value ?? "").toLowerCase())
        }
        options={filteredOptions}
        onSearch={(text: string) => setSearchTerm(text)}
        onSelect={onSelect}
      />
      <Button type="primary" onClick={() => props.select(playerSelected)}>
        Preguntar
      </Button>
    </div>
  );

  return (
    <div>
      <AutoComplete
        style={{ width: 200 }}
        options={filteredOptions}
        onSearch={(text: string) => setSearchTerm(text)}
        onSelect={onSelect}
      />
      <Button type="primary" onClick={() => props.select(playerSelected)}>
        Preguntar
      </Button>
    </div>
  );
};
