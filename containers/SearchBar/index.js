import { useState, useRef } from "react";

import Form from "./Form";
import Input from "./Input";
import MagnifierButton from "./MagnifierButton";

import withTheme from "utils/hocs/withTheme";

const SearchBar = ({ id, theme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [opened, setOpened] = useState(false);
  const formRef = useRef();
  const inputRef = useRef();

  const onFormSubmitHandler = event => {
    event.preventDefault();

    if (searchTerm.length === 0) {
      return;
    }

    setOpened(false);
  };

  const onFormClickHandler = () => {
    setOpened(true);
    inputRef.current.focus();
  };

  const onInputChangeHandler = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Form opened={opened} theme={theme} ref={formRef} onClick={onFormClickHandler} onSubmit={onFormSubmitHandler}>
      <MagnifierButton 
        type="submit"
        theme={theme}
        opened={opened}
      />
      <Input 
        aria-label="Search Input"
        id={`search-input-${id}`}
        opened={opened}
        theme={theme}
        ref={inputRef}
        value={searchTerm}
        onChange={onInputChangeHandler}
        placeholder="Search for a movie..."
      />
    </Form>
  )
};

export default withTheme(SearchBar);