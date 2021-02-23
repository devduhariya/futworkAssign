
const data = [{
    name: "Yashbeer",
    phone: 8080123456,
    address: "Germany"
}, {
    name: "Armaan",
    phone: 9812345678,
    address: "Tokyo"
}, {
    name: "Yashbeer",
    phone: 8080123457,
    address: "Berlin"
}, {
    name: "Prasad",
    phone: 7201123456,
    address: "Dubai"
}, {
    name: "Prasad",
    phone: 7201123457,
    address: "Amsterdam"
}]
function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
       const key = obj[property];
       if (!acc[key]) {
          acc[key] = [];
       }
       acc[key].push(obj);
       return acc;
    }, {});
 }
 const grouped2 = groupBy(data, 'name');
 let result1 = Object.keys(grouped2).map(e => {
    let ret = {
        name: e,
        value: grouped2[e]
    };
    return ret;
});
let result = [];

result1.forEach(res =>{
    let ss = {
        name: res.name,
        phone:'',
        address:''
    };
    res.value.forEach(r => {
        ss.phone += r.phone+', ',
        ss.address += r.address+', ';
    });
    result.push(ss);
})
console.log(result);