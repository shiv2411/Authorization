import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from '@angular/http';
import { MockBackend, MockConnection} from '@angular/http/testing';
import {JwtHelper} from 'angular2-jwt';
export function fakeBackendFactory(
backend: MockBackend,
options: BaseRequestOptions) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNoaXZhbSBBZ3Jhd2FsIiwiYWRtaW4iOnRydWV9.cwfxSlFG1JcNoKQEPaqw2VLboxgq_w9io5NxkTecr4M';

    backend.connections.subscribe((connection: MockConnection) => {
     setTimeout(() => {

        if (connection.request.url.endsWith('/api/authenticate') && (connection.request.method === RequestMethod.Post)) {
            const body = JSON.parse(connection.request.getBody());

            if (body.email === 'agrawal.shivam127@gmail.com' && body.password === '1234') {
                console.log('welcome shivam');
                connection.mockRespond(new Response(
                  new ResponseOptions({
                      status: 200,
                      body: {token}
                  })
                ));
            } else {
        connection.mockRespond(new Response(
            new ResponseOptions({
                status: 400
            })
          ));

      }

        }




        if (connection.request.url.endsWith('/api/orders') &&
 (connection.request.method === RequestMethod.Get)) {

            console.log('asdn');

            if (connection.request.headers.get('Authorization') === 'Bearer' + token) {
            console.log('asdsfsf');
            connection.mockRespond(new Response(

        new ResponseOptions({status: 200, body: ['Pizza', 'Noodles', 'Burger']})
        ));
        } else {
            console.log('sdasas');
            connection.mockRespond(new Response(
          new ResponseOptions({status: 401})
            ));
        }
        }
    }
    , 1000);
});
    return new Http(backend, options);
}
export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions],
};
