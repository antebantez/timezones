import FavoriteItem from "./FavoriteItem";

export default function FavoriteList(props) {
  let { stateList, setAndSaveItems } = props;

 // state list from localStorage.
 // add relativ index location for RemoveButton.
  if (stateList != []) {
   
    const itemRows = [];
    for (let item of stateList) {
      const row = (
        <FavoriteItem
          key={item.id}
          {...{
            city: item.city,
            utc: item.timezone,
            indexId: stateList.indexOf(item),
          }}
          setAndSaveItems={setAndSaveItems}
          stateList={stateList}
        />
      );
      itemRows.push(row);
    }

    return <>{itemRows}</>;
  }
}
