let data={
    Sophia:{
        id:33,
        study:[
            {
            primary:[
                {school_name:'abc primary school'},
                {location:'peters burg'}
            ]
        },
        {
            secondary:
            [
                {school_name:'abc secondary school'},
                {location:'st lorence'}
            ]
        }
    ]
    }
}
console.log(data.Sophia.study[1].secondary[1].location)