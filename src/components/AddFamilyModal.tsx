import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface AddFamilyModalProps {
  isOpen: boolean;
  onClose: () => void;
  visible: boolean;
  editVisible:boolean;
  onSubmit: (
    title: string,
    description: string,
    selectType: string,
    tags: string
  ) => void;
  onSubmitEdit: (
    title: string,
    description: string,
    selectType: string,
    tags: string
  ) => void;
  currData: any;
}

const AddFamilyModal: React.FC<AddFamilyModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  onSubmitEdit,
  currData,
  visible,
  editVisible
}) => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [selectType, setSelectType] = useState("");
  const getData = async () => {
    const param = currData.uuid;
    const url = "http://localhost:4011/userRequest/" + param;
    const response = await fetch(url);
    const getRes = await response.json();
    if(!visible){
    setTitle(getRes?.data?.title || "");
    setTags(getRes?.data?.tags || "");
    setDescription(getRes?.data?.description || "");
    setSelectType(getRes?.data?.type || "");
    }
    else{
      setTitle("");
    setTags("");
    setDescription("");
    setSelectType("");
    }
    console.log("visible", visible)
  };
  useEffect(() => {
    getData();
  }, [visible]);

 
  // const [tags, setTags] = useState([
  //   {
  //     res: "",
  //   },
  // ]);
  // const addInputField = () => {
  //   setTags([
  //     ...tags,
  //     {
  //       res: "",
  //     },
  //   ]);
  // };
  // const handleChange = (index, evnt) => {
  //   const { name, value } = evnt.target;
  //   const list = [...tags];
  //   list[index][name] = value;
  //   setTags(list);
  // };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Fill the Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <FormLabel>Description</FormLabel>
            <Input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <FormLabel>Types</FormLabel>
            <Select
              value={selectType}
              onChange={(event) => setSelectType(event.target.value)}
            >
              <option value="Text">Text</option>
              <option value="Button">Button </option>
              <option value="Voice">Voice </option>
            </Select>
            <div className="flex">
              <FormLabel>Tags</FormLabel>
              {/* <i
                className="fa-solid fa-square-plus text-[#7451f8] text-[20px] ml-6 mt-2"
                onClick={() => addInputField()}
              ></i> */}
            </div>
            {/* {tags.map((data, index) => {
              const { res } = data;
              console.log("data", { res });

              return (
                <div className=" justify-center py-[6px]" key={index}>
                  <Input isDisabled={true}
                    type="text"
                    onChange={(evnt) => handleChange(index, evnt)}
                    value={res}
                    name="res"
                  />
                </div>
              );
            })} */}
            <Input
              isDisabled={true}
              value={tags}
              onChange={(event) => setTags(event.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          {visible ? (
            <Button
              mr={3}
              colorScheme="blue"
              // disabled={!title}
              onClick={(event) => {
                onSubmit(title, description, selectType, tags);
                onClose();
                event.preventDefault();
              }}
            >
              Submit
            </Button>
          ) : (
            <Button
              colorScheme="orange"
              onClick={(event) => {
                onSubmitEdit(title, description, selectType, tags);
                onClose();
                event.preventDefault();
              }}
            >
              Edit
            </Button>
          )} 
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default AddFamilyModal;
