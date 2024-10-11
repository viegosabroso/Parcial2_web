const getDataId = async (id: any) => {
    const response = await fetch("https://api.le-systeme-solaire.net/rest.php/bodies/"+ id)
    const data = await response.json()
    return data

}

export default getDataId