import { Box, Stack } from "@chakra-ui/layout";
import {
  CustomNodeElementProps,
  RawNodeDatum,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/types/common";

import NodeModal from "../../components/AddFamilyModal";
import EditNodeModel from "../../components/EditFamilyModel"
import Tree from "react-d3-tree";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {postResponse} from "./responseSlice"
import {putResponse} from "./responseEditSlice"
import AddCircleIcon from '@mui/icons-material/AddCircle';

// import { v4 } from "uuid";



export default function App() {
 
  const dispatch = useDispatch();
  const getData = async() => {
    const response = await fetch('http://localhost:4011/userRequest/6409ae59df721eb18c134e19')
    const data =  await response.json()
    // setGetNewTree(data.data)
   setTree(data.data)

  }

 
  const [parentUUID, setParentUUID] = useState("")
  const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>(
      {
       title: "Root1",
     
      children: [
        {
          title:'Root2',
          children:[]
        },
        {
          title:'Root3',
          children:[]
        },
        
      ],
    }
    );
    useEffect(() => {
      getData()
      //  getNodeDetails(tree)
    }, []);
  console.log("Tree=========>",tree)

  const [node, setNode] = useState<TreeNodeDatum | undefined>();
  const close = () => setNode(undefined);

  const handleNodeClick = (datum: TreeNodeDatum) => {
    setNode(datum);
  };
  const bfs = (id: string,
    tree: RawNodeDatum | RawNodeDatum[],
    node: RawNodeDatum
    )=> 
       {
    console.count("bfs method fired")

      const queue: RawNodeDatum[] = [];
    
      queue.unshift(tree as RawNodeDatum);
      while (queue.length > 0) {
        const curNode: any = queue.pop();
        console.log(curNode._id,"curNode._id" )
        setParentUUID(curNode._id)
        if (curNode.uuid === id) {
          console.log("curNodeID", curNode._id)
          var nodeId = curNode._id
          // setParentUUID(nodeId)
          curNode.children.push(node);
          console.log("from curnNode",node)
          return {...tree,nodeId};
        }
        const len = curNode.children.length;
        console.log("len",len)
    
        for (let i = 0; i < len; i++) {
          queue.unshift(curNode.children[i]);
        }
      }
    }
    // console.log("parentUUID",parentUUID)

  const handleSubmit =  (title: string,description:string, selectType:string, tags:string ) => {
    var newId = Math.random()
    
    // var parentId = node?.uuid;
    // console.log("parentUUID ---- 116", parentId)

    const newTree = bfs(node?.uuid, tree, {
      title: title,
      uuid:newId,
      description: description,
      type: selectType,
      tags: tags,
      children: [],
    });
    // console.log("bfs",newTree)
    var newData = {
      title: title,
      uuid:newId,
      description: description,
      type: selectType,
      // tags: tags,
      children: [],
    }
    //  dispatch(postResponse(newData));
    console.log("newtreeId",newData)
    // setTree(tree)
    if (newTree) {
      setTree(newTree);
    }

    setNode(undefined);
    console.count("handleSubmit fired")
  };
 const handleEdit = async(title: string,description:string, selectType:string, tags:string ) =>{

  const updatedData = {
   title: title,
   description : description,
   type: selectType,
   tags: tags
  }
// dispatch(putResponse(updatedData));

 }
  const renderRectSvgNode = (
    customProps: CustomNodeElementProps,
    click: (datum: TreeNodeDatum) => void
  ) => {
    const { nodeDatum } = customProps;

    return (
      <g>
        <rect
          x={"-50"}
          y={"-15"}
          width="100"
          height="30"
          rx="15"
          fill={"white"}
          onClick={() => click(nodeDatum)}
        />
        <text fill="#7451f8" strokeWidth="0.5" x="-30" y="1" onClick={() => click(nodeDatum)}>
          {nodeDatum.title} 
        </text>
        {/* <image x="-20" href="https://static.vecteezy.com/system/resources/previews/000/554/223/original/plus-sign-vector-icon.jpg" height="35" width="20" 
        onClick={() => click(nodeDatum)}  />
        <image href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4SbeYl4bHvzG1PSGT5si1NWlMyexMTdOmahli2BMbqzs8EgiowWPYAVeblM2smDjyM6Q&usqp=CAU"
        onClick={() => click(nodeDatum)}  
        height="25" width="40" /> */}
      </g>
    );
  };

  return (
    <div className="mt-[60px] ml-[214px]">
    <Stack direction="row" spacing="md">
      <Box w="100vw" h="100vh">
        <Tree
          data={tree}
          zoomable={true}
          // onNodeClick={handleNodeClick}
          translate={{
            x: 200,
            y: 200,
          }}
          renderCustomNodeElement={(nodeInfo) =>
            renderRectSvgNode(nodeInfo, handleNodeClick )
          }
        />
        <NodeModal
          onSubmit={(title,description,selectType,tags) => handleSubmit(title,description,selectType,tags)}
          onSubmitEdit={(title,description,selectType,tags) => handleEdit(title,description,selectType,tags)}
          onClose={close}
          isOpen={Boolean(node)}
        />
      </Box>
    </Stack>
    </div>
  );
}
