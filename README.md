# SciMatrix

Biblioteca Javascript para realizar operações sobre matrizes em um paradígma funcional. Para isso, define um tipo imutável para representar matrizes e define também uma śerie de funções puras que realizam operações sobre matrizes. 

## Getting Started

Instale a biblioteca
```
npm install sci-matrix
```
Importe a bliblioteca
```
import Matrix from 'sci-matrix'
```
Crie matrizes
```
const A = new Matrix('identity', 3)
```
Aplique funções
```
const C = addMatrices(A, B)
```
Consulte propriedades dos objetos das matrizes criadas com new Matrix
```
console.log(A.rows) // 3
```


## Built With

* [Webpack](https://webpack.js.org) - A static module bundler for modern JavaScript applications.
* [Babel](https://babeljs.io/) - The compiler for writing next generation JavaScript.
* [Mocha](https://mochajs.org/) - The fun, simple, flexible JavaScript test framework.
* [Chai](http://chaijs.com/) - A BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [Nyc](https://github.com/istanbuljs/nyc) - The Istanbul command line interface.
* [ESLint](https://eslint.org/) - Pluggable JavaScript linter.
* [Husky](https://github.com/typicode/husky) - Git hooks made easy.



## Authors

* **James Oliveira da Silva** - *Initial work* - [jamesodas](https://github.com/jamesodas)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


