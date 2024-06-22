const muhsina ={
    id: 22591000,
    name:'Muhsina',
    address: {
        streets:{
            home: '119, Muradpur Madrasah Road',
            Thana: 'KadamTali',
            Road: 'Jurain'
        },
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

const nabil ={
    id: 22591001,
    name:'Nabil',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}
console.log(muhsina.address.streets.Road)
console.log(nabil.address.streets?.Road)  //optional chain