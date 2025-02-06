# Reatividade em Text Area e Select

Este projeto demonstra a reatividade de um componente `textarea` e um componente `select` em um formulário React.

## Text Area

O componente `textarea` permite ao usuário inserir texto livremente. A reatividade é alcançada através do uso do estado do React. O valor do `textarea` é controlado pelo estado `textArea`, e qualquer alteração no texto dispara a função `onChange`, que atualiza o estado.

```jsx
<textarea
     placeholder="Faça um comentario..."
     name="area"
     id="area"
     value={textArea}
     rows={4}
     onChange={({ target }) => setTextArea(target.value)}
     className="mt-3 p-1 col-span-2 border border-gray-400/50 resize-none rounded-md placeholder:text-gray-300"
/>
<div>{textArea}</div>
```

## Select

O componente `select` permite ao usuário escolher uma opção de uma lista. A reatividade é gerenciada pelo estado `select`. Quando uma nova opção é selecionada, a função `onChange` atualiza o estado com o valor selecionado.

```jsx
<label className="col-span-2" htmlFor="select">
     Escolha sua opção
</label>
<div className="col-span-2">
     <select id="produtos" value={select} onChange={({ target }) => setSelect(target.value)}>
          <option value="" disabled>
               Selecione
          </option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
     </select>
     {select}
</div>
```

## Botão de Envio

O formulário também inclui um botão de envio estilizado.

```jsx
<div className="flex justify-end col-span-2">
     <button className="mx-2 py-2 px-4 bg-gray-900 text-gray-200 rounded-md place-content-end cursor-pointer">
          Submit
     </button>
</div>
```

## Conclusão

Este exemplo ilustra como usar o estado do React para criar componentes de formulário reativos, permitindo que a interface do usuário responda dinamicamente às entradas do usuário.