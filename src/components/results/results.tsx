import './results_style.scss';
export const Results = (props: any) => (<section><pre>{props.results.response ? JSON.stringify(props.results, undefined, 2): null}</pre></section>);