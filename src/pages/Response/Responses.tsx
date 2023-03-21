import { Box, Stack } from "@chakra-ui/layout";
import {
  CustomNodeElementProps,
  RawNodeDatum,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/types/common";
import { useEffect, useState } from "react";

import NodeModal from "../../components/AddFamilyModal";
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
  const [open, setOpen] = useState(false);
  const [param, setParam] = useState<string>("9a088ac0-b614-428f-9b7e-2be6e49490c0");
  const [prevstate, setPrevstate]: any = useState([]);
  const [currentNodeData, setCurrentNodeData] = useState({});
  const [tree, setTree] = useState<any>({});
  const [newTreeData, setNewTreeData] = useState(tree);

  const [node, setNode] = useState<TreeNodeDatum | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async (id: string) => {
    try {
      setIsLoading(true);
      const url = "http://localhost:4011/userRequest/" + id;
      const response = await fetch(url);
      let data = await response.json();
      // data = data.data

      
      // const [newTree, currNode] = bfs(param, tree, data)
      if (param === "9a088ac0-b614-428f-9b7e-2be6e49490c0") {
        setTree(data);
      } else {
        handleArrayOfNode(param, data[0].children);
        //setTree
      }

      console.log("====================================");
      console.log("tree", tree);
      console.log("====================================");

      //    data && handleArrayOfNode(param, tree, data[0].children)

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw error;
    }

    // setPrevstate([...prevstate, data.data]);
    // console.log(currentNode)
    // console.log("Tree", tree)
    // console.log("hello",data.data)

    // tree['children'].map((item : any, i : number) => {
    //     if(item._id == currentNode){
    //       tree['children'][i]['children'] = data.data['children']
    //     }
    // })

    // const [newTree, curNode] = bfs(param, tree, )

    //Fill this data in the children array of the uuid -> param

    // setTree(data.data)
    // setTree(data.data);
    console.log("prevState from getmethod", prevstate);
  };

  useEffect(() => {
    getData(param);
  }, []);

  const close = () => {
    setOpen(false);
    setNode(undefined);
  };

  const bfs: any = (
    id: string,
    tree: RawNodeDatum | RawNodeDatum[],
    node: RawNodeDatum
  ) => {
    const queue: RawNodeDatum[] = [];

    queue.unshift(tree as RawNodeDatum);
    console.log("I am here------------->", queue);
    let i = 0
    while (queue.length > 0) {
      let curNode: any = queue.pop();
     
      if(Array.isArray(curNode)) {
        curNode = curNode[0]
      }
      // i === 0 && (curNode = curNode[0])  

      if (curNode.uuid === id) {
        var nodeId = curNode._id;
        curNode.children.push(node);
        let resTree = {tree}
        console.log('====================================');
        console.log("Chcfuikhdfvcuikdsrr", resTree);
        console.log('====================================');
        return [...resTree["tree"] , curNode];
      }
      const len = curNode.children.length;
      console.log("I am here while------------->", len);
      for (let i = 0; i < len; i++) {
        queue.unshift(curNode.children[i]);
      }
      i++
    }
  };

  const handleArrayOfNode = (
    id: string,
    nodes: RawNodeDatum[]
  ) => {
    console.log("nodes->handleArrayOfNode", nodes[0], id);
    // const [newTree, currNode]: any = bfs(id, tree, nodes[0]);
    // setTree(newTree);
    let resTree = []
    for (let index = 0; index < nodes.length; index++) {
      const element = nodes[index];
      const [newTree, currNode]: any = bfs(id, tree, element)
      resTree.push(newTree)
      // setTree(newTree)
    }
    console.log('====================================');
    console.log("Res Tree", resTree);
    console.log('====================================');
    setTree(resTree.pop())
  };

  const handleNodeClick = (datum: TreeNodeDatum) => {
    setNode(datum);
    // setModalVisible(!modalVisible);
    setOpen(true);
    // setCurrentNodeData(datum);
    // setParam(datum.uuid)
    // console.log("datum.uuid from response", datum.uuid);
  };
  const handleNodeClickEdit = (datum: TreeNodeDatum) => {
    setNode(datum);
    // setModalVisible(false);
    setOpen(false);
    setCurrentNodeData(datum);
    // setParam(datum.uuid)
    // console.log("datum.uuid from response", datum.uuid);
  };

  const [currentNode, setCurrentNode] = useState("");

  // useEffect(() => {
  //   param.
  // }, [tree.length, isLoading])

  const handleNodeClickView =  (datum: TreeNodeDatum) => {
    console.log(",,,,,,,,,,,,", datum);
    setParam(datum.uuid);
    // console.log("sidddd", datum.uuid);
    //  setCurrentNode(datum._id)
    //  setTree(newTree);
    //  onceView(datum)
    // setTree(tree)
    console.log("viewDetails", datum);
    console.log("viewDetailsID", param);
    console.log("tree from view", tree);
    //  const [newTree, curNode]: any = bfs(node?.uuid,tree, datum);
    //  console.log("newTree", node?.uuid,)
    getData(param);
    // datum.__rd3t.collapsed = false
  };
  const handleSubmit = (
    title: string,
    description: string,
    selectType: string,
    tags: string
  ) => {
    var newUuid = uuidv4();

    console.log("====================================");
    console.log("handleSubmit");
    console.log("====================================");

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
      setTree(newTree);
    }
    setNode(undefined);
    setModalVisible(false);
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
    dispatch(putResponse(updatedData, currentId));
    setModalVisible(!modalVisible);
  };

  const renderRectSvgNode = (
    customProps: CustomNodeElementProps,
    click: (datum: TreeNodeDatum) => void,
    editClick: (datum: TreeNodeDatum) => void,
    viewClick: (datum: TreeNodeDatum) => void
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
        <foreignObject x="-10" y="-17" width="125" height="50">
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
              onClick={() => {
                viewClick(nodeDatum);
              }}
            />
            <AddCircleIcon
              className="mr-[10px]"
              onClick={() => {
                click(nodeDatum);
              }}
            />
            <EditIcon
              className="mr-[10px]"
              onClick={() => {
                editClick(nodeDatum);
              }}
            />
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className="mt-[60px] ml-[214px]">
      <div className="relative">
        <ResponsePreview param ={param} />
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
              renderRectSvgNode(
                nodeInfo,
                handleNodeClick,
                handleNodeClickEdit,
                handleNodeClickView
              )
            }
          />
          <NodeModal
            currData={currentNodeData}
            visible={modalVisible}
            open={open}
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
