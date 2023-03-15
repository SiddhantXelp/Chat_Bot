import axios from "axios";
import apis from './index'

export const editResponse = async (updatedData:any,currentId:string) => {

    let config = {
      method: 'PUT',
      url: apis.responseEdit.upload + currentId,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      data:updatedData,
    };
    try {
  
      const res = await axios(config);
      return res.data.data;
    } catch (e) {
      console.log(e, "iam error")
      throw e;
    }
}