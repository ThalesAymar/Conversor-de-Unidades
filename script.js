
// ======================================================
// 1. UNIDADES DISPONÍVEIS
// ======================================================


const unidades = {

    // Unidades de comprimento
    comprimento: [
        { valor: "m", texto: "Metro (m)" },
        { valor: "cm", texto: "Centímetro (cm)" },
        { valor: "mm", texto: "Milímetro (mm)" },
        { valor: "km", texto: "Quilômetro (km)" },
        { valor: "mi", texto: "Milha (mi)" },
        { valor: "ft", texto: "Pé (ft)" },
        { valor: "in", texto: "Polegada (in)" }
    ],

    // Unidades de velocidade
    velocidade: [
        { valor: "km/h", texto: "Quilômetros por hora (km/h)" },
        { valor: "m/s", texto: "Metros por segundo (m/s)" },
        { valor: "mi/h", texto: "Milhas por hora (mi/h)" },
        { valor: "cm/s", texto: "Centímetros por segundo (cm/s)" },
        { valor: "ft/s", texto: "Pés por segundo (ft/s)" }
    ],

    // Unidades de temperatura
    temperatura: [
        { valor: "C", texto: "Celsius (°C)" },
        { valor: "K", texto: "Kelvin (K)" },
        { valor: "F", texto: "Fahrenheit (°F)" }
    ]
};


// ======================================================
// 2. FATORES DE CONVERSÃO
// ======================================================

/*
    Para comprimento, a referência é o metro.
    Para velocidade, a referência é o metro por segundo.
*/
const fatores = {

    comprimento: {
        m: 1,
        cm: 0.01,
        mm: 0.001,
        km: 1000,
        mi: 1609.344,
        ft: 0.3048,
        in: 0.0254
    },

    velocidade: {
        "km/h": 1 / 3.6,
        "m/s": 1,
        "mi/h": 0.44704,
        "cm/s": 0.01,
        "ft/s": 0.3048
    }
};


// ======================================================
// 3. ELEMENTOS HTML
// ======================================================

/*
    getElementById procura um elemento HTML pelo seu id.
*/
const grandeza = document.getElementById("grandezas");
const entrada = document.getElementById("entrada");
const saida = document.getElementById("saida");
const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("converter");


// ======================================================
// 4. ATUALIZAÇÃO DOS SELETORES DE UNIDADES
// ======================================================

/*
    Esta função é executada quando a grandeza selecionada
    muda e também quando a página é inicializada.

    Ela preenche os menus de entrada e saída com as
    unidades correspondentes à grandeza escolhida.
*/
function atualizarUnidades() {

    // Obtém a lista da grandeza selecionada.
    const opcoes = unidades[grandeza.value];

    // Remove as opções anteriores dos dois seletores.
    entrada.innerHTML = "";
    saida.innerHTML = "";

    // Percorre cada unidade da lista selecionada.
    opcoes.forEach(function(unidade) {

        // Cria uma opção para o menu de entrada.
        const opcaoEntrada = document.createElement("option");

        // Define o valor interno e o texto visível.
        opcaoEntrada.value = unidade.valor;
        opcaoEntrada.textContent = unidade.texto;


        // Cria uma opção para o menu de saída.
        const opcaoSaida = document.createElement("option");

        // Define o valor interno e o texto visível.
        opcaoSaida.value = unidade.valor;
        opcaoSaida.textContent = unidade.texto;


        // Adiciona as opções aos respectivos menus.
        entrada.appendChild(opcaoEntrada);
        saida.appendChild(opcaoSaida);
    });


    /*
        Se houver mais de uma unidade, seleciona a segunda
        opção no menu de saída
    */
    if (opcoes.length > 1) {
        saida.selectedIndex = 1;
    }

    // Limpa o resultado ao mudar a grandeza.
    resultado.textContent = "";
}


// ======================================================
// 5. CONVERSÃO DE TEMPERATURA PARA CELSIUS
// ======================================================

/*
    Converte uma temperatura da escala original
    para Celsius.
*/
function paraCelsius(valor, unidade) {

    switch (unidade) {

        case "C":
            // Celsius para Celsius: não precisa converter.
            return valor;

        case "K":
            // Kelvin para Celsius.
            return valor - 273.15;

        case "F":
            // Fahrenheit para Celsius.
            return (valor - 32) * 5 / 9;
    }
}


// ======================================================
// 6. CONVERSÃO DE CELSIUS PARA A UNIDADE DE DESTINO
// ======================================================

/*
    Recebe uma temperatura em Celsius e a transforma
    na escala escolhida pelo usuário.
*/
function deCelsius(valor, unidade) {

    switch (unidade) {

        case "C":
            // O valor já está em Celsius.
            return valor;

        case "K":
            // Celsius para Kelvin.
            return valor + 273.15;

        case "F":
            // Celsius para Fahrenheit.
            return valor * 9 / 5 + 32;
    }
}


// ======================================================
// 7. FUNÇÃO PRINCIPAL DE CONVERSÃO
// ======================================================

/*
    Esta função é executada quando o botão é clicado.
*/
function converter() {

    // Obtém a grandeza selecionada.
    const tipo = grandeza.value;

    // Obtém as unidades de entrada e de saída.
    const unidadeEntrada = entrada.value;
    const unidadeSaida = saida.value;


    // Verifica se o usuário deixou o campo vazio.
    if (numero.value.trim() === "") {
        resultado.textContent = "Digite um número.";
        return;
    }

    // Converte o texto do campo para um número.
    const valor = Number(numero.value);

    // Verifica se o valor é um número finito.
    if (!Number.isFinite(valor)) {
        resultado.textContent = "Digite um número válido.";
        return;
    }


    // --------------------------------------------------
    // CÁLCULO DA CONVERSÃO
    // --------------------------------------------------

    // Variável que armazenará o resultado numérico.
    let convertido;

    if (tipo === "temperatura") {
        //primeiro converte para Celsius
        const celsius = paraCelsius(valor, unidadeEntrada);
        //depois converte para a unidade de saida
        convertido = deCelsius(celsius, unidadeSaida);

    } else {

        //para velocidade e comprimento multiplica pelo fator de entrada
        
        const valorBase =
            valor * fatores[tipo][unidadeEntrada];
        //depois divide pelo fator da unidade de saída
        convertido =
            valorBase / fatores[tipo][unidadeSaida];
    }


    // --------------------------------------------------
    // VERIFICAÇÃO DO RESULTADO
    // --------------------------------------------------

    /*
        Impede a exibição de valores como NaN ou Infinity,
        que indicariam um resultado numericamente inválido.
    */
    if (!Number.isFinite(convertido)) {
        resultado.textContent = "Não foi possível converter.";
        return;
    }

    if (Math.abs(convertido) < 1e-12) {
        convertido = 0;
    }


    // --------------------------------------------------
    // FORMATAÇÃO E EXIBIÇÃO
    // --------------------------------------------------

    /*
        toLocaleString utiliza as convenções numéricas
        brasileiras, incluindo a vírgula decimal.

        maximumSignificantDigits limita o número de
        algarismos significativos apresentados.
    */
    const valorFormatado = convertido.toLocaleString("pt-BR", {
        maximumSignificantDigits: 12
    });

    // Exibe o valor convertido junto da unidade de saída.
    resultado.textContent = `${valorFormatado} ${unidadeSaida}`;
}


// ======================================================
// 8. EVENTOS
// ======================================================

/*
    Quando o usuário muda a grandeza, os menus de unidade
    são atualizados automaticamente.
*/
grandeza.addEventListener("change", atualizarUnidades);


/*
    Quando o usuário clica no botão "Converter",
    a função principal é executada.
*/
botao.addEventListener("click", converter);


// ======================================================
// 9. INICIALIZAÇÃO
// ======================================================

/*
    Preenche os menus assim que o script é executado,
    sem exigir que o usuário mude a grandeza primeiro.
*/
atualizarUnidades();