
const useState = (valor) => {
    return [valor, ()=> {console.log('hello, world')}]
}

const [name, setName] = useState('Goku')
console.log(name)
setName()
