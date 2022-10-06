import './form_style.scss'
const handleSubmit = (e: any, callback: Function) => {
  e.preventDefault();
  const formData = {
    method:'GET',
    url: 'https://pokeapi.co/api/v2/pokemon',
  };
  console.log('handling button')
  callback(formData);
}

export const Form = (props:any) => {
  //const [methodValue, setMethodValue] = useState('GET');
  return (
<>
<form onSubmit={(e) => handleSubmit(e, props.callApi)}>
  <label>
    <span id='urlLabel'>URL: </span>
    <input name='url' type='text'/>
    <button type='submit'>Go</button>
  </label>
  <label className="methods">
    <span id='get'>GET</span>
    <span id='post'>POST</span>
    <span id='put'>PUT</span>
    <span id='delete'>DELETE</span>
  </label>
</form>
</>
)};