import './Hello.css'


export default function Hello({name,lastname=" JAIDEE",AGE=25}){
    return(<><h1>Hello World {name}{lastname}{AGE}</h1></>);
 
}