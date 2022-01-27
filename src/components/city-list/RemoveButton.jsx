/*import { useState } from "react";


export default function RemoveButton(props) {
  const [remove, removeCity] = useState([]);
  let { buttonId, setAndSaveItems, stateList } = props;

  const handleDelete = (buttonId) => {

  
    let updatedList = stateList.filter((item) => { return item.indexId != buttonId });

   
    updatedList.splice(buttonId, 1);

    setAndSaveItems(updatedList);
  };

  return (
    
    <div className="RemoveButton">
    <button
        className="btn-primary btn-m"
        style={{ background:"rgba(0, 1, 0, 0.500)"  }}
        
      onClick={() => handleDelete(buttonId)}
    >
        Remove { }
    
      </button>
      </div>
    
  );
}
*/

