const data = [{ id: "1", name: "abc", city: "Delhi"}, { id: "2", name: "abc1", city: "Pune"}, { id: "3", name: "abc2", city: "Noida"}, { id: "4", name: "abc3", city: "Pune"}];

function groupBy(array){
    return array.reduce((result, obj) =>{
       const groupKey = obj.city;
        if(!result[groupKey]){
            result[groupKey] = [];
        }
        result[groupKey].push(obj);
        return result;
    }, {});
}

const groupData = groupBy(data);

console.log(groupData);