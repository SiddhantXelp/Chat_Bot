import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface AddFamilyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, tags:any) => void;
}

const AddFamilyModal: React.FC<AddFamilyModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  // const [tags, setTags] = useState("");
  const [tags, setTags] = useState([
    {
      res: "",
    },
  ]);
  const addInputField = () => {
    setTags([
      ...tags,
      {
        res: "",
      },
    ]);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...tags];
    list[index][name] = value;
    setTags(list);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <FormLabel>Tags</FormLabel>
            <i
                  className="fa-solid fa-square-plus text-[#7451f8] text-[20px] ml-6 mt-2"
                  onClick={() => addInputField()}
                ></i>
            {tags.map((data, index) => {
                const { res } = data;
              console.log("data",{res})

                return (
                  <div className="flex justify-center py-[6px]" key={index}>
                    <Input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={res}
                      name="res"
                    />
                  </div>
                );
              })}
            {/* <Input
              value={tags}
              onChange={(event) => setTags(event.target.value)}
            /> */}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            // disabled={!title}
            onClick={() => {
              onSubmit(title, tags);
              onClose();
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default AddFamilyModal;
