import { useState } from "react";
import { Box, Button, Input, VStack, HStack, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box p={5}>
      <VStack spacing={5}>
        <HStack>
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a todo" />
          <Button onClick={handleAddTodo} leftIcon={<FaPlus />}>
            Add
          </Button>
        </HStack>
        {todos.map((todo, index) => (
          <HStack key={index} w="100%" justifyContent="space-between">
            <Text>{todo}</Text>
            <Button onClick={() => handleDeleteTodo(index)} colorScheme="red" leftIcon={<FaTrash />}>
              Delete
            </Button>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
