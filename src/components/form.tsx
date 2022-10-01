import './header_style.scss'
const handleSubmit = (e: any, callback: Function) => {
  e.preventDefault();
  const formData = {
    method:'GET',
    url: 'https://pokeapi.co/api/v2/pokemon',
  };
  callback(formData);
}
export const Form = (props:any) => (
<>
<form onSubmit={(e) => handleSubmit(e, props.callApi)}>
  <label>
    <span>URL: </span>
    <input name='url' type='text'/>
    <button type='submit'>Go</button>
  </label>
  <label>
    <span id='get'>GET</span>
    <span id='post'>POST</span>
    <span id='put'>PUT</span>
    <span id='delete'>DELETE</span>
  </label>
</form>
</>
);