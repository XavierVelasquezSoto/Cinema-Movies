import { CounterContext } from '../contexts/CounterContext';

const CounterProvider = children => {
	return <CounterContext.Provider>{children}</CounterContext.Provider>;
};

export default CounterProvider;
