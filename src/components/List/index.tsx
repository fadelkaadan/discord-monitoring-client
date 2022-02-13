import { useEffect, useState } from "react";
import styled from "styled-components";
import Entries from "../Entries";
import { axiosInstance as axios } from "../../api/discord";

interface IWord {
  id: any;
  word: string;
}

const Wrapper = styled.div`
  width: 70%;
  max-width: 1000px;
`;

const List = () => {
  const [words, setWords] = useState<IWord[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      const fetchedWords: any = await axios.get("/censoredWords");
      if (fetchedWords.data) {
        setWords(fetchedWords.data);
      }
    };
    fetchWords();
  }, []);

  const createWord = async (value: string) => {
    if (value.length > 2) {
      const newWord = await axios.post("/censoredWords", {
        word: value,
      });
      if (newWord.status === 200) {
        setWords((prevState) => [newWord.data, ...prevState]);
      }
    }
  };

  const removeWord = async (id: string) => {
    const deletedWord = await axios.delete(`/censoredWords/${id}`);
    if (deletedWord.status === 200) {
      setWords((prevState) => prevState.filter((item) => item.id !== id));
    }
  };

  return (
    <Wrapper>
      <Entries
        placeholder="Add a new word"
        entries={words}
        addEntry={(value: string) => createWord(value)}
        removeEntry={(id: string) => removeWord(id)}
      />
    </Wrapper>
  );
};

export default List;
