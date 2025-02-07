
### Definição de Tipos

```javascript
const types = {
     cep: {
          regex: /^\d{5}-?\d{3}$/,
          message: 'cep incorreto',
     },
     email: {
          regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'email, não valido... tente novamente',
     },
};
```

Aqui, definimos um objeto types que contém as regras de validação (regex) e mensagens de erro para diferentes tipos de inputs, como cep e email.

Hook useForm

```javascript
const useForm = (type) => {
     const [value, setValue] = React.useState('');
     const [error, setError] = React.useState(null);

     function validate(value) {
          if (type === false) return true;
          if (value.length === 0) {
               setError('insira um valor');
               return false;
          } else if (types[type] && !types[type].regex.test(value)) {
               setError(types[type].message);
               return false;
          } else {
               setError(null);
               return true;
          }
     }

     function onChange({ target }) {
          if (error) validate(target.value);
          setValue(target.value);
     }

     return {
          value,
          setValue,
          onChange,
          error,
          onBlur: () => validate(value),
          validate: () => validate(value),
     };
};
export default useForm;
```

O hook useForm aceita um parâmetro type que define o tipo de validação a ser aplicada. Ele gerencia três estados principais:

value: o valor do input.
error: a mensagem de erro, se houver.
setValue e setError: funções para atualizar os estados.
Função validate
A função validate verifica se o valor do input é válido com base no tipo fornecido. Se o valor for inválido, ela define uma mensagem de erro apropriada.

Função onChange
A função onChange é chamada sempre que o valor do input muda. Ela atualiza o estado value e, se houver um erro, chama a função validate para verificar o novo valor.

Utilização do Hook

```jsx
const cep = useForm('cep');
const email = useForm('email');
const nome = useForm();
const sobrenome = useForm(false);

const handleSubmit = (event) => {
     event.preventDefault();
     if (cep.validate() && email.validate() && nome.validate()) {
          console.log('Enviar');
     } else {
          console.log('Não enviar');
     }
};

return (
     <form onSubmit={handleSubmit}>
          <div className="flex">
               <Input name="Nome" id="nome" type="text" {...nome} />
               <Input name="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
          </div>
          <Input name="CEP" id="cep" type="text" placeholder="00000-000" {...cep} />
          <Input name="Email" id="email" type="email" {...email} />
          <button className="py-2 px-4 bg-blue-200 rounded mt-2 ml-3">Enviar</button>
     </form>
);
```
