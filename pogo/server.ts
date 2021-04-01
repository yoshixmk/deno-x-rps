import pogo from 'https://deno.land/x/pogo@v0.5.2/main.ts';

const server = pogo.server({ hostname: '0.0.0.0', port : 8080 });

server.router.get('/', () => {
    return 'Hello World!';
});

server.start();
