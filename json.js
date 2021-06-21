   /* Enviando dados com JSON */

   var myObj = {nome: "Francisco", idade: 20, cidade: "Ipueiras"};
   var myJSON = JSON.stringify(myObj);
   alert(myJSON);

   /* Recebendo dados em JSON */

   function myFunc()
   {
       var myJSON = '{"nome" : "Francisco", "idade" : 31, "cidade" : "Ipueiras"}';
       var myObj = JSON.parse(myJSON);
       document.getElementById("demo").innerHTML = myObj.nome;
   }

   /* Armazenando dados em JSON - LocalStorage */

   /*Armazenamento de dados em JSON */
   
    function writeA()
    {
        myObj = {nome: "Francisco", idade: 20, cidade: "Ipueiras"};
        myObj = JSON.stringify(myObj);
        localStorage.setItem("testJSON", myJSON);
    }
   
    /* Recuperando dados */

    function read()
    { 
        text = localStorage.getItem("testJSON");
        obj = JSON.parse(text);
        document.getElementById("demo").innerHTML = obj.nome + myObj.idade + myObj.cidade;
    }   