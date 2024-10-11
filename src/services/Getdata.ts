const Getdata = async() => {
    try {
        const promise = await fetch("https://api.le-systeme-solaire.net/rest.php/bodies")
        const data = await promise.json()
        console.log(data);
        return data
        
    }catch (error) {}
}



export default Getdata;