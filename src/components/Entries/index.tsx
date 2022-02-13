import styled, { CSSProperties } from "styled-components";
import closeSquare from "../../assets/icons/close_square_red.svg";
import { ChangeEvent, FormEvent, useState } from "react";

interface IWord {
  id: any;
  word: string;
}

interface EntriesProps {
  label?: string;
  placeholder?: string;
  entries: IWord[];
  addEntry: (value: string) => void;
  removeEntry: (id: string) => void;
  styles?: CSSProperties;
}

const Wrapper = styled.div``;

const Label = styled.h3`
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: #efefef;
  padding: 10px 20px;
`;

const EntriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const Entry = styled.div`
  display: flex;
  align-items: center;
  justify-items: space-between;
  padding: 0px 20px;
  background-color: #ffffff;
  border-radius: 8px;
`;

const Button = styled.button`
  background-image: url(${closeSquare});
  background-size: cover;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 12px;
  width: 25px;
  height: 25px;
  margin-left: 16px;
`;

const Value = styled.p`
  font-size: 1.2rem;
`;

const Entries = ({
  label,
  placeholder,
  entries,
  addEntry,
  removeEntry,
  styles,
}: EntriesProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      addEntry(inputValue);
      setInputValue("");
    }
  };

  return (
    <Wrapper style={styles}>
      <form onSubmit={handleSubmit}>
        {label ? <Label>{label}</Label> : null}
        <Input
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          placeholder={placeholder}
        />
      </form>
      {entries.length > 0 && (
        <EntriesWrapper>
          {entries.map((entry) => (
            <Entry key={entry.id}>
              <Value>{entry.word}</Value>
              <Button onClick={() => removeEntry(entry.id)} />
            </Entry>
          ))}
        </EntriesWrapper>
      )}
    </Wrapper>
  );
};

export default Entries;
