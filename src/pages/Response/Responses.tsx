import { Box, Stack } from "@chakra-ui/layout";
import {
  CustomNodeElementProps,
  RawNodeDatum,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/types/common";
import { useEffect, useState } from "react";

import NodeModal from "../../components/AddFamilyModal";
import EditFamilyModal from "../../components/EditFamilyModal";
import ResponsePreview from "../../components/ResponsePreview/responsePreview";
import Tree from "react-d3-tree";
import { postResponse } from "./responseSlice";
import { putResponse } from "./responseEditSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function App() {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  
  
  const [param, setParam] = useState("9593f6dc-7731-493b-b761-bb3eeebc1867");
  const [add, setAdd] = useState("add")

  const getData = async () => {
    const url = "http://localhost:4011/userRequest/" + param;
    const response = await fetch(url);
    const data = await response.json();
    setTree(data.data);
  };

  const [currentNodeData, setCurrentNodeData] = useState({});
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
    title: "Root1",

    children: [
      {
        title: "Root2",
        children: [],
      },
      {
        title: "Root3",
        children: [],
      },
    ],
  });
  useEffect(() => {
    getData();
  }, [modalVisible]);

  const [node, setNode] = useState<TreeNodeDatum | undefined>();
  const close = () => {
    // setModalVisible(false)
    
    setNode(undefined)};

  const bfs = (
    id: string,
    tree: RawNodeDatum | RawNodeDatum[],
    node: RawNodeDatum
  ) => {
    const queue: RawNodeDatum[] = [];

    queue.unshift(tree as RawNodeDatum);
    while (queue.length > 0) {
      const curNode: any = queue.pop();
      if (curNode.uuid === id) {
        var nodeId = curNode._id;
        curNode.children.push(node);
        return [{ ...tree }, curNode];
      }
      const len = curNode.children.length;

      for (let i = 0; i < len; i++) {
        queue.unshift(curNode.children[i]);
      }
    }
  };

  const handleNodeClick = (datum: TreeNodeDatum) => {
    setNode(datum);
    setAdd(add)
    console.log("addddd",add)
    setModalVisible(!modalVisible);
    setCurrentNodeData(datum);
    // setParam(datum.uuid)
    // console.log("datum.uuid from response", datum.uuid);
  };
  const handleNodeClickEdit = (datum: TreeNodeDatum) => {
    setNode(datum);
    // setAdd(!add)
    console.log("addddd",add)
    setModalVisible(!modalVisible);
    setEditVisible(!editVisible)
    setCurrentNodeData(datum);
    // setParam(datum.uuid)
    // console.log("datum.uuid from response", datum.uuid);
  };
  const handleSubmit = (
    title: string,
    description: string,
    selectType: string,
    tags: string
  ) => {
    var newUuid = uuidv4();

    const [newTree, curNode]: any = bfs(node?.uuid, tree, {
      title: title,
      uuid: newUuid,
      description: description,
      type: selectType,
      tags: tags,
      children: [],
    });
    var newData = {
      title: title,
      uuid: curNode.uuid,
      description: description,
      type: selectType,
      children: [],
    };
     dispatch(postResponse(newData));
    if (newTree) {
      setTree([{ ...tree }, newTree]);
    }
    setNode(undefined);
  };
  const handleEdit = async (
    title: string,
    description: string,
    selectType: string,
    tags: string
  ) => {
    const [newTree, curNode]: any = bfs(node?.uuid, tree, {});
    var currentId = curNode.uuid;

    const updatedData = {
      title: title,
      description: description,
      type: selectType,
      tags: tags,
    };
    dispatch(putResponse(updatedData,currentId));
    setModalVisible(!modalVisible);
  };

  const renderRectSvgNode = (
    customProps: CustomNodeElementProps,
    click: (datum: TreeNodeDatum) => void,
    editClick :(datum: TreeNodeDatum) =>void
  ) => {
    const { nodeDatum } = customProps;
// console.log("nodedatum",nodeDatum)
    return (
      <g>
        <rect
          x={"-20"}
          y={"-15"}
          width="125"
          height="45"
          rx="15"
          fill={"#ccd7e3"}
          // onClick={() => {click(nodeDatum)}}
        />
        <foreignObject x="-10" y="-17" width="125" height="50" >
          <span 
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              color: "black",
              fontWeight: 600,
              fontSize: "13px",
              wordWrap: "break-word",
            }}
          >
            {nodeDatum.title}
          </span>
          <br />
          <div>
            <VisibilityIcon
              className="mr-[10px]"
            />
            <AddCircleIcon className="mr-[10px]" 
              onClick={() => {click(nodeDatum)}}
              />
            <EditIcon className="mr-[10px]"
             onClick={() => {editClick(nodeDatum),editVisible}} />
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className="mt-[60px] ml-[214px]">
      <div className="relative">
        <ResponsePreview />
      </div>
      <Stack direction="row" spacing="md">
        <Box w="100vw" h="100vh" style={{ backgroundColor: "#20344a" }}>
          <Tree
            data={tree}
            zoomable={true}
            // onNodeClick={handleNodeClick}
            translate={{
              x: 200,
              y: 200,
            }}
            renderCustomNodeElement={(nodeInfo) =>
              renderRectSvgNode(nodeInfo, handleNodeClick,handleNodeClickEdit)
            }
          />
          <NodeModal 
            currData={currentNodeData}
            visible={modalVisible}
            editVisible = {editVisible}
            onSubmit={(title, description, selectType, tags) =>
              handleSubmit(title, description, selectType, tags)
            }
            onSubmitEdit={(title, description, selectType, tags) =>
              handleEdit(title, description, selectType, tags)
            }
            onClose={close}
            isOpen={Boolean(node)}
          />
          {/* <EditFamilyModal
            currData={currentNodeData}
            visible={modalVisible}
            // onSubmit={(title, description, selectType, tags) =>
            //   handleSubmit(title, description, selectType, tags)
            // }
            onSubmitEdit={(title, description, selectType, tags) =>
              handleEdit(title, description, selectType, tags)
            }
            onClose={close}
            isOpen={Boolean(node)}/> */}
        </Box>
      </Stack>
    </div>
  );
}
