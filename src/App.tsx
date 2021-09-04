import { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// // components

// import  Drawer  from "@material-ui/core/Drawer";
// import LinearProgress  from "@material-ui/core/LinearProgress";
// import  Grid  from "@material-ui/core/Grid";
// import  AddShoppingCartIcon  from "@material-ui/icons/AddShoppingCart";
// import  Badge  from "@material-ui/core/Badge";
// //styles
// import { Wrapper } from "./App.styles";
import axios from "axios";
//Types
export type CourseItemType = {
  id:number;
  title:string;
  updated: string;
  webPath: string;
  version: number;
  activityId: any;
  courseLearningStandard: string;
  launchable: boolean;
}
const App = () => {
  const [courses, setCourses] = useState([]);
   useEffect(() => {
    axios.get('/api2/courses?$format=json', {
      headers: {
        'EngineTenantName' : 'klp',
        
      },
      auth: {
        username: 'RusticiEngine',
        password: 'GL62hujqMZO2bBTk91avoYjOyns3o27'
      }
    }).then(res => {
      const courses = res.data;
      //setCourses(courses);
      console.log(courses);
   });
}, []);

    console.log(setCourses);
  return  <div className="App">Start</div>; 
    
};

export default App;
