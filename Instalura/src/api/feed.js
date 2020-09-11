const lerFotos = async (callback) => {
    const fotosHTTP = await fetch("http://10.1.10.46:3030/feed");
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);
  }

  export default lerFotos;