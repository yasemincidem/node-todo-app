import React, { useState, useEffect } from 'react';
import {
  Checkbox,
  IconButton,
  SvgIcon,
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '10ch',
    },
  },
}));

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  height: 100px;
  display: flex;
  background-color: #cde7f1;
`;
const HeaderText = styled.div`
  font-size: 30px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7b7979;
`;
const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 500px;
  margin-top: 5%;
`;
const TodoContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  width: 70%;
  padding: 20px;
  margin-left: 13%;
  background-color: white;
`;
const DeleteButtonWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  flex: 1;
`;
const Todos = function () {
  const [initialTodos, setInitialTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});
  const classes = useStyles();
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/todos')
      .then(function (response) {
        setInitialTodos(response.data);
      })
      .catch(function (error) {
        throw error;
      });
  }, []);
  const setTodo = (selectedTodo) => (event) => {
    const { userName, todo, hasAttachment, _id: id } = selectedTodo;
    const isDone = event.target.checked;
    axios.post('http://localhost:3000/api/todo',{
      id,
      userName,
      todo,
      isDone,
      hasAttachment
    }).then((function(response) {
      const mappedTodos = initialTodos.map(todo => todo._id === selectedTodo._id ? response.data : todo);
      setInitialTodos(mappedTodos);
    }))
  };
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3000/api/todo/${id}`).then((function(response) {
      const mappedTodos = initialTodos.filter(todo => todo._id !== id);
      setInitialTodos(mappedTodos);
    })).catch(function(err) {
      throw err;
    });
  };
  const items = initialTodos?.map((item) => (
    <TodoContainer key={item._id}>
      <Checkbox
        checked={item.isDone}
        onChange={setTodo(item)}
        inputProps={{ 'aria-label': 'Checkbox A' }}
      />
      {item.todo}
      <DeleteButtonWrapper>
        <IconButton aria-label="delete" value="delete" onClick={() => deleteTodo(item._id)}>
          <DeleteIcon />
        </IconButton>
      </DeleteButtonWrapper>
    </TodoContainer>
  )) || <div>No matches todo</div>;
  return (
    <Container>
      <Header>
        <HeaderText>SAMPLE TODO APP</HeaderText>
      </Header>
      <FormControl variant="outlined" style={{ marginTop: 20 }}>
          <InputLabel htmlFor="outlined-todo">Todo</InputLabel>
          <OutlinedInput
            id="outlined-todo"
            value={null}
            onChange={() => handleChange}
            labelWidth={60}
          />
        </FormControl>
      <WrapperItems>{items}</WrapperItems>
    </Container>
  );
};

export default Todos;
