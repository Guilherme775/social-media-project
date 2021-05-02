import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import Cookie from 'js-cookie';

const token = Cookie.get("token");

const network = Network.create((operation, variables) =>
    fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => response.json()),
);

const source = new RecordSource();
const store = new Store(source);

export const env = new Environment({
    network,
    store
});

export default env;