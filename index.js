function alunosAprovados( arr, media) {
    let aprovados =[];
    for (let i=0 < arr.length; i++){

        (nota, nome) = arr[i];
        if (arr[i] nota >= media)
        {
            aprovados.push(arr[i].nome);
        }
    }
}