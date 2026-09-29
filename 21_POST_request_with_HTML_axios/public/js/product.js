const onSubmitHandler = (event)=>{
    event.preventDefault();
    console.log("On submit called ");

    const product = document.getElementById('product').value;

    const obj ={
        "productName" : product
    }

    axios.post('http://localhost:3000'+'/api/products',obj)
    .then((result)=>{
        console.log(`Value return By post ${result.data.value}`);
    })

}