import axios from "axios";
import apis from './index'

export const createWidget = async (data) => {
    console.log( data, "iam  data from api call")

    let config = {
      method: 'POST',
      url: apis.widget.upload,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      data,
    };
    console.log("Config", config);
    try {
  
      console.log("before api")
      const response = await axios(config);
      console.log("Response+__>", response);
      return response.data.data;
    } catch (e) {
      console.log(e, "iam error")
      throw e;
    }
}