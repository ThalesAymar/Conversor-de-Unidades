# Conversor de Unidades

## Sobre o projeto

Este projeto consiste em uma aplicação web para conversão de unidades de medida. O usuário pode selecionar uma grandeza física, informar um valor numérico, escolher as unidades de entrada e saída e obter o resultado da conversão.

A aplicação foi desenvolvida utilizando HTML, CSS e JavaScript, sem a necessidade de bibliotecas ou frameworks externos.

## Funcionalidades

O conversor permite trabalhar com três grandezas:

- **Comprimento:** metro, centímetro, milímetro, quilômetro, milha, pé e polegada.
- **Velocidade:** quilômetros por hora, metros por segundo, milhas por hora, centímetros por segundo e pés por segundo.
- **Temperatura:** Celsius, Kelvin e Fahrenheit.

Outras funcionalidades incluem:

- Seleção dinâmica das unidades de entrada e saída de acordo com a grandeza escolhida.
- Conversão de valores numéricos entre as unidades disponíveis.
- Formatação dos resultados conforme as convenções numéricas brasileiras.
- Validação do campo numérico para evitar entradas vazias ou inválidas.
- Exibição de mensagens de erro quando não é possível realizar uma conversão.

## Tecnologias utilizadas

- **HTML5:** estruturação do conteúdo da página.
- **CSS3:** estilização e organização dos elementos da interface.
- **JavaScript:** implementação da lógica de conversão, manipulação dos elementos da página e validação dos dados.


### Descrição dos arquivos

- `index.html`: contém a estrutura da página, os campos de entrada, os seletores de unidades e a área de resultado.
- `style.css`: define a aparência dos elementos, o espaçamento e a organização visual da interface.
- `script.js`: contém as unidades disponíveis, os fatores de conversão e as funções responsáveis pelos cálculos e pela atualização da página.
- `README.md`: apresenta informações sobre o projeto e orientações para sua utilização.

## Como executar

Não é necessário instalar dependências para utilizar a aplicação.

1. Baixe ou clone este repositório.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam no mesmo diretório.
3. Abra o arquivo `index.html` em um navegador web.

## Como utilizar

1. Selecione a grandeza que deseja converter.
2. Escolha a unidade de entrada.
3. Escolha a unidade de saída.
4. Digite o valor que deseja converter.
5. Clique no botão **Converter**.
6. Consulte o resultado exibido na página.

### Exemplo de conversão

Considere a conversão de 1 quilômetro para metros.

| Campo | Valor |
|---|---|
| Grandeza | Comprimento |
| Unidade de entrada | Quilômetro (km) |
| Unidade de saída | Metro (m) |
| Valor informado | 1 |
| Resultado | 1.000 m |

## Métodos de conversão

Para comprimento e velocidade, a aplicação utiliza fatores de conversão em relação a uma unidade de referência.

No caso do comprimento, a unidade de referência é o metro. Para velocidade, é o metro por segundo.

O cálculo é realizado em duas etapas:

1. Conversão do valor informado para a unidade de referência.
2. Conversão da unidade de referência para a unidade desejada.

Para temperatura, a aplicação utiliza fórmulas específicas de conversão entre Celsius, Kelvin e Fahrenheit.

## Possíveis melhorias futuras

- Adicionar novas grandezas físicas, como massa, área, volume e tempo.
- Permitir realizar conversões automaticamente ao alterar os valores.
- Melhorar a adaptação da interface para diferentes tamanhos de tela.

## Declaração de uso de IA

Ferramentas de inteligência artificial foram utilizadas como apoio no desenvolvimento do projeto, auxiliando na elaboração e revisão do código e na documentação. A implementação e a validação do projeto são de responsabilidade do autor.
