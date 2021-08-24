import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance as axios } from "../../api/discord";
import Item from "../Item";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 500px;
`;

const Textfield = styled.input`
  width: 450px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  outline: none;
  :hover {
    background-color: #dfdfdf;
  }
  :focus {
    background-color: #dfdfdf;
  }
`;

const AddButton = styled.button`
  width: 33px;
  height: 33px;
`;

const CensoredWordsList = () => {
  const [wordsList, setWordsList] = useState<any[]>([]);
  const [word, setWord] = useState<string>("");

  const deleteWord = async (id: String) => {
    const updatedWords = wordsList.filter((word) => word.id !== id);
    setWordsList(updatedWords);
    await axios.delete(`/words/${id}`);
  };

  const addWord = async (e: React.FormEvent) => {
    e.preventDefault();
    const newWord = await axios.post(`/words`, { word: word });
    const updatedWords = [newWord.data.data, ...wordsList];
    setWordsList(updatedWords);
    setWord("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/words");
      setWordsList(response.data.data.Items);
    };
    fetchData();
  }, []);

  return (
    <>
      <Form onSubmit={(e: React.FormEvent) => addWord(e)}>
        <Textfield
          placeholder="Add a censored word"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <AddButton type="submit">+</AddButton>
      </Form>
      {wordsList.map((word: any) => (
        <Item
          key={word.id}
          content={word.word}
          onClick={() => deleteWord(word.id)}
        />
      ))}
    </>
  );
};

export default CensoredWordsList;
