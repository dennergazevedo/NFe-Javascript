var data = JSON.stringify({
  "ID": 1137,
  "url_notificacao": "https://webmaniabr.com/retorno.php",
  "operacao": 1,
  "natureza_operacao": "Venda de produção do estabelecimento",
  "modelo": 1,
  "finalidade": 1,
  "ambiente": 2,
  "cliente": {
    "cpf": "000.000.000-00",
    "nome_completo": "Miguel Pereira da Silva",
    "endereco": "Av. Anita Garibaldi",
    "complemento": "Sala 809 Royal",
    "numero": 850,
    "bairro": "Ahú",
    "cidade": "Curitiba",
    "uf": "PR",
    "cep": "80540-180",
    "telefone": "(41) 4063-9102",
    "email": "suporte@webmaniabr.com"
  },
  "produtos": [
    {
      "nome": "Camisetas Night Run",
      "sku": "camiseta-night-run",
      "ean": "0789602015376",
      "ncm": "6109.10.00",
      "cest": "28.038.00",
      "cnpj_produtor": "00.000.000/0000-00",
      "quantidade": 3,
      "unidade": "UN",
      "peso": "0.800",
      "origem": 0,
      "subtotal": "44.90",
      "total": "134.70",
      "classe_imposto": "REF1637"
    },
    {
      "nome": "Camisetas 10 Milhas",
      "sku": "camisetas-10-milhas",
      "ean": "0789602015376",
      "ncm": "6109.10.00",
      "cest": "28.038.00",
      "cnpj_produtor": "00.000.000/0000-00",
      "quantidade": "1",
      "unidade": "UN",
      "peso": "0.200",
      "origem": 0,
      "subtotal": "29.90",
      "total": "29.90",
      "classe_imposto": "REF1637"
    }
  ],
  "pedido": {
    "pagamento": 0,
    "presenca": 2,
    "modalidade_frete": 0,
    "frete": "12.56",
    "desconto": "10.00",
    "total": "174.60"
  },
  "transporte": {
    "cnpj": "00.000.000/0000-00",
    "razao_social": "Transportes LTDA",
    "ie": "123.456.789.123",
    "endereco": "Av. Anita Garibaldi",
    "uf": "PR",
    "cidade": "Curitiba",
    "cep": "80540-180"
  }
});

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://webmaniabr.com/api/1/nfe/emissao/");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-consumer-key", "SEU_CONSUMER_KEY");
xhr.setRequestHeader("x-consumer-secret", "SEU_CONSUMER_SECRET");
xhr.setRequestHeader("x-access-token", "SEU_ACCESS_TOKEN");
xhr.setRequestHeader("x-access-token-secret", "SEU_ACCESS_TOKEN_SECRET");

xhr.send(data);
