const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Deu ruim!');
    }, 3000);

    setTimeout(() => {
        resolve({name: "João"});
    }, 1000);
});

promise.then(obj => {
    console.log('Executando o THEN')
    console.log(obj.name);
});

promise.catch(error => {
    console.log(error);
});

