# Factory Method

O **Factory Method** é um padrão de projeto criacional que fornece uma interface para criar objetos em uma superclasse, permitindo que as subclasses alterem o tipo de objeto criado.  
Os objetos retornados pelo método fábrica são geralmente chamados de **produtos**.

![imagem 1](/images/Screenshot.jpg)

---

## Problema

- Melhorar a escalabilidade do código  
- Centralizar a criação dos objetos  
- Reduzir acoplamento entre quem usa o objeto e as classes concretas  
- Evitar espalhar `new` pelo sistema

---

## Solução

O padrão Factory Method sugere **substituir chamadas diretas ao construtor** por chamadas a um **método fábrica**, localizado dentro do *criador* (superclasse).

![imagem 2](/images/Screenshot_1.jpg)

À primeira vista, isso pode parecer apenas mover a criação do objeto de um lugar para outro.  
No entanto, ocorre algo importante:  

➡ Agora é possível **sobrescrever o método fábrica** em subclasses, permitindo retornar produtos diferentes.

A limitação é que todas as subclasses devem retornar objetos que implementem **a mesma interface base**.  
Por isso, o método fábrica na classe base deve ter seu tipo de retorno declarado como essa interface.

![imagem 3](/images/Screenshot_2.jpg)

Por exemplo:

- **Caminhão** e **Navio** implementam a interface `Transporte`, que possui o método `entregar()`.
- O criador `LogísticaViária` retorna `Caminhão`.  
- O criador `LogísticaMarítima` retorna `Navio`.

O código cliente não se importa com qual produto concreto é criado. Ele trabalha apenas com o tipo abstrato `Transporte`.

Isso aumenta a flexibilidade e reduz o acoplamento.

---

## Estrutura

![imagem 4](/images/Screenshot_3.jpg)

1. **Produto**  
   Declara a interface comum a todos os objetos que podem ser produzidos pelo criador.

2. **Produtos Concretos**  
   Implementam a interface do produto.

![imagem 5](/images/Screenshot_4.jpg)

3. **Criador**  
   Declara o método fábrica que deve retornar um objeto do tipo produto.  
   Apesar do nome, criar objetos **não é a função principal** do criador.  
   Ele geralmente contém lógica relacionada aos produtos, e o método fábrica serve para **desacoplar essa lógica** dos produtos concretos.

4. **Criadores Concretos**  
   Sobrescrevem o método fábrica para retornar produtos específicos.  
   O método fábrica não precisa instanciar sempre um novo objeto — pode acessar cache, reusar ou controlar instâncias.

---

## Casos de Uso

Use o Factory Method quando:

- Você não sabe antecipadamente quais tipos concretos seu código precisará usar.  
- Deseja oferecer uma forma de usuários estenderem comportamentos da sua biblioteca ou framework.  
- Precisa reaproveitar objetos existentes em vez de recriá-los sempre.  
- Quer desacoplar código de criação de objetos complexos.

---

## Implementação

1. Faça todos os produtos implementarem a mesma interface, com métodos que façam sentido para todos.  
2. Adicione um método fábrica na classe criadora. O retorno deve ser a interface comum.  
3. Substitua as chamadas diretas ao construtor por chamadas ao método fábrica.  
4. Crie subclasses criadoras para cada produto e sobrescreva o método fábrica.  
5. Se existirem muitos tipos de produto, você pode usar parâmetros na classe base para decidir o tipo criado.  
6. Caso o método fábrica base fique vazio, torne-o abstrato.

---

## Vantagens

- Evita acoplamento forte entre criador e produtos concretos.  
- **Princípio da Responsabilidade Única:** centraliza a lógica de criação.  
- **Princípio Aberto/Fechado:** facilita adicionar novos tipos de produto sem alterar código existente.  
- Melhora testabilidade, permitindo mockar a criação de objetos.

---

## Desvantagens

- Pode tornar o código mais complexo devido ao aumento de subclasses.  
- Requer maior conhecimento de POO, o que pode dificultar para iniciantes.  
- Pode deixar a arquitetura mais pesada comparada a uma criação simples com `new`.

---

## Relações com Outros Padrões

- Muitos projetos começam com Factory Method e evoluem para **Abstract Factory**, **Prototype** ou **Builder**.  
- Abstract Factory normalmente usa vários Factory Methods internamente.  
- Factory Method pode funcionar junto com Iterator, permitindo criar diferentes tipos de iteradores.  
- Prototype evita herança, mas exige inicialização mais complexa do objeto clonado.  
- Factory Method é uma especialização do Template Method e pode ser usado como etapa dentro dele.

---

## Conclusão

O Factory Method é um padrão poderoso para tornar o código mais flexível, limpo e escalável.  
É especialmente útil em projetos com grande potencial de crescimento ou em equipes experientes que buscam reduzir acoplamento e facilitar manutenção.
