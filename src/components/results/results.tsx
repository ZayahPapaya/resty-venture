import './results_style.scss';
export const Results = (props: any) => (<section><pre>{props.results.data ? JSON.stringify(props.results, undefined, 2): null}</pre></section>);