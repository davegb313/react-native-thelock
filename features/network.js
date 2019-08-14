const networkBase = 'http://192.168.1.100:4000';

export const Login = props =>
  fetch(networkBase + '/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: props.email,
      password: props.password,
    }),
  }).then(
    response => response.status >= 400 ? Promise.reject() : response.json(),
  );
